import { Body, ClassSerializerInterceptor, Controller, Get, Param, Post, Put, UseInterceptors } from "@nestjs/common";
import { CurrentUser } from "src/domains/authentication/decorators/currentUser.decorator";
import { Roles } from "src/domains/authentication/decorators/roles.decorator";
import { Project } from "src/entities/project";
import { UserRole } from "src/entities/user";
import { AuthUser } from "src/services/authentication/dto";
import { AssignUserDto, CreateProjectDto, GeneralProjectDataDto, ProjectDataDto, UpdateProjectDto } from "src/services/project/dto";
import { ProjectService } from "src/services/project/projectService";
import { FULL_ACCESS } from "src/services/user/dto";

@Controller('/projects')
@UseInterceptors(ClassSerializerInterceptor)
export class ProjectController {

    constructor(private readonly projectService: ProjectService) { }

    @Roles(FULL_ACCESS)
    @Get('/:id')
    async findProject(@Param('id') id: number): Promise<Project> {
        return await this.projectService.findProject(id);
    }

    @Get('/company/:companyId')
    async findAllProjectsForCompany(@Param('companyId') companyId: number): Promise<Project[]> {
        return await this.projectService.findAllProjectsForCompany(companyId);
    }

    @Get('/:companyId/general-data')
    async findGeneralDataOfProject(@Param('companyId') companyId: number): Promise<GeneralProjectDataDto> {
        return await this.projectService.findGeneralDataOfProject(companyId);
    }
    
    @Get('/:companyId/project-data')
    async findProjectDataOfProject(@Param('companyId') companyId: number): Promise<ProjectDataDto> {
        return await this.projectService.findProjectData(companyId);
    }

    @Roles(FULL_ACCESS)
    @Post('/')
    async createProject(
        @CurrentUser('user') user: AuthUser,
        @Body() projectInput: CreateProjectDto
    ): Promise<Project> {
        return await this.projectService.createProject(user, projectInput);
    }

    @Put('/:id/assign-user')
    async assignUserToProject(
        @Param('id') id: number, 
        @CurrentUser('user') user: AuthUser, 
        @Body() input: AssignUserDto
    ): Promise<Project> {
        return await this.projectService.assignUserToProject(id, input.email);
    }

    // @Roles([UserRole.TAX_COUNSELLOR, UserRole.PROJECT_MANAGER])
    @Roles(FULL_ACCESS)
    @Put('/:id')
    async updateProject(
        @Param('id') id: number, 
        @CurrentUser('user') user: AuthUser,
        @Body() projectInput: UpdateProjectDto
    ): Promise<Project> {
        return await this.projectService.updateProject(id, projectInput);
    }

}  