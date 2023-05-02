import { HttpException, HttpStatus, Inject, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { generateRandomPassword } from "src/domains/user/generateRandomPassword";
import { Project } from "src/entities/project";
import { User, UserRole } from "src/entities/user";
import { CompanyRepository } from "src/repositories/companyRepository";
import { ProjectRepository } from "src/repositories/projectRepository";
import { UserRepository } from "src/repositories/userRepository";
import { Repository } from "typeorm";
import { AuthUser } from "../authentication/dto";
import { CreateProjectDto, GeneralProjectDataDto, ProjectDataDto, UpdateProjectDto } from "./dto";
import { handleProjectStatus } from "src/domains/project/handleProjectStatus";
import { createContractors } from "src/domains/contractor/createContractors";
import { createCooperateResearchPartner } from "src/domains/cooperateResearchPartner/createCooperateResearchPartner";
import { createProjectJournals } from "src/domains/projectJournal/createProjectJournals";
import { createManagerWorkingHours } from "src/domains/managerWorkingHour/createManagerWorkingHours";
import { createFinancialFrameworks } from "src/domains/financialFramework/createFinancialFrameworks";
import { createPersonalFrameworks } from "src/domains/personalFramework/createPrersonalFrameworks";
import { createPrivateOrPrivateSubsidiesCosts } from "src/domains/privateOrPrivateSubsidiesCost/createPrivateOrPrivateSubsidiesCosts";
import { DocumentService } from "../document/documentService";


@Injectable()
export class ProjectService {
    
    @InjectRepository(Project) private readonly projectRepository: Repository<Project>
    @Inject(UserRepository) private readonly userRepository: UserRepository
    @Inject(CompanyRepository) private readonly companyRepository: CompanyRepository
    @Inject(ProjectRepository) private readonly customProjectRepository: ProjectRepository
    @Inject(DocumentService) private readonly documentService: DocumentService

    async findProject(id: number): Promise<Project> {
        return await this.customProjectRepository.findProjectWithRelations(id);
    }

    async findAllProjectsForCompany(companyId: number): Promise<Project[]> {
        const projects = await this.projectRepository.find({ where: { company: { id: companyId} }, relations: ['company'] });
        if (!projects) {
            throw new HttpException(`No projects found for company with id: ${companyId}`, HttpStatus.NOT_FOUND);
        }

        return projects;
    }
    
    async findGeneralDataOfProject(id: number): Promise<GeneralProjectDataDto> {
        return await this.customProjectRepository.findGeneralDataOfProject(id);
    }

    async findProjectData(id: number): Promise<ProjectDataDto> {
        return await this.customProjectRepository.findProjectWithUserRelations(id);
    }

    async createProject(currentUser: AuthUser, input: CreateProjectDto): Promise<Project> {
        const company = await this.companyRepository.findCompany(currentUser.companyId);
        
        let user;
        user = await User.findOne({ where: { email: input.user.email } });
        if (!user) {
            const password = generateRandomPassword()
            user = await this.userRepository.createUser({
                firstName: input.user.firstName,
                lastName: input.user.lastName, 
                email: input.user.email,
                role: UserRole.PROJECT_MANAGER,
                password
            })
        //TODO: send email
        }

        const projectInput = { ...input, company, users: [user] };
        const project = await this.projectRepository.save(projectInput);
        
        return project;
    }

    async assignUserToProject(id: number, email: string): Promise<Project> {
        const user = await this.userRepository.findUserByEmail(email);

        const project = await this.customProjectRepository.findProjectWithUserRelations(id);
        project.users = [...project.users, user];

        return await this.projectRepository.save(project);
    }

    //TODO: add manager
    async updateProject(id: number, projectBody: UpdateProjectDto, currentUserId: number, screenshotOfParticipatingRDStaff?: Express.Multer.File): Promise<Project> {
        const project = await this.customProjectRepository.findProjectWithRelations(id);
        const status = handleProjectStatus(project.status, projectBody);

        if (screenshotOfParticipatingRDStaff) {
            await this.documentService.uploadDocument(
                screenshotOfParticipatingRDStaff, 
                project.id, 
                currentUserId, 
                'screenshotOfParticipatingRDStaff'
            )
        }

        //TODO check if relation already exisits
        //TODO check that it's not empty
        let contractors;
        if (projectBody.contractors) {
            contractors = await createContractors(projectBody.contractors)
        }

        let cooperateResearchPartners;
        if (projectBody.researchPartners) {
            cooperateResearchPartners = await createCooperateResearchPartner(projectBody.researchPartners);
        }

        let projectJournals;
        if (projectBody.projectJournals) {
            projectJournals = await createProjectJournals(projectBody.projectJournals);
        }

        let managerWorkingHours;
        if (projectBody.managerWorkingHours) {
            managerWorkingHours = await createManagerWorkingHours(projectBody.managerWorkingHours);
        }

        let financialFrameworks;
        if (projectBody.financialFrameworks) {
            financialFrameworks = await createFinancialFrameworks(projectBody.financialFrameworks);
        }

        let personalFrameworks;
        if (projectBody.personalFrameworks) {
            personalFrameworks = await createPersonalFrameworks(projectBody.personalFrameworks);
        }

        let publicOrPrivateSubsidiesCosts;
        if (projectBody.publicOrPrivateSubsidiesCosts) {
            publicOrPrivateSubsidiesCosts = await createPrivateOrPrivateSubsidiesCosts(projectBody.publicOrPrivateSubsidiesCosts);
        }

        const projectInput = { 
            ...project, 
            ...projectBody, 
            status, 
            contractors, 
            cooperateResearchPartners,
            projectJournals,
            managerWorkingHours,
            financialFrameworks,
            personalFrameworks,
            publicOrPrivateSubsidiesCosts
        };

        const savedProject = await this.projectRepository.save(projectInput);
        
        return savedProject;
    }
}