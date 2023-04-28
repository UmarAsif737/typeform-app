import { Injectable } from "@nestjs/common";
import { ProjectNotFoundError } from "src/domains/project/errors";
import { Project } from "src/entities/project";
import { GeneralProjectDataDto, ProjectDataDto } from "src/services/project/dto";
import { Repository } from "typeorm";

@Injectable()
export class ProjectRepository extends Repository<Project> {
    async findProject(id: number): Promise<Project> {
        const project = await Project.findOne({ where: { id } });
        if (!project) {
            throw new ProjectNotFoundError('id', String(id));
        }
        return project;
    }

    async findProjectWithRelations(id: number): Promise<Project> {
        const project = await Project.findOne({ 
            where: { id }, 
            relations: [
                'users', 
                'contractors', 
                'cooperateResearchPartners',
                'projectJournals',
                'managerWorkingHours',
                'financialFrameworks',
                'personalFrameworks',
                'publicOrPrivateSubsidiesCosts',
            ] 
        });
        if (!project) {
            throw new ProjectNotFoundError('id', String(id));
        }
        return project;
    }

    async findProjectWithUserRelations(id: number): Promise<Project> {
        const project = await Project.findOne({ where: { id }, relations: ['users'] });
        if (!project) {
            throw new ProjectNotFoundError('id', String(id));
        }
        return project;
    }

    async findGeneralDataOfProject(id: number): Promise<GeneralProjectDataDto> {
        const project = await Project.findOne({ 
            where: { id }, 
            select: [
                'id', 
                'name', 
                'hasEstimatedFigures',
                'isFundedBySubsidies',
                'hasPersonalDocumentsForEmployees',
                'hasWorkingTrackRecord'
            ] 
        });

        if (!project) {
            throw new ProjectNotFoundError('id', String(id));
        }

        return project;
    }

    async findProjectData(id: number): Promise<ProjectDataDto> {
        const project = await Project.findOne({ 
            where: { id }, 
            select: [
                'id',
                'name',
                'startOfProject',
                'startOfPeriod',
                'endOfPeriod',
                'type',
                'isRegisteredAtBSFZ',
                'bsfzProjectId',
                'majorityHasUniversityDegrees',
                'category',
                'isCompatibleWithExistingEcosystems',
                'majorityIsDevelopedFromScratch',
                'endGoalDescription',
                'compatibleEcosystems',
                'basisOfProject',
                'differenceToOtherProjects',
                'processDescription',
                'currentRAndDStatus',
                'distinguishmentWithinSector',
                'uniquenessOfProduct',
                'marketIntroduction',
            ]
        });

        if (!project) {
            throw new ProjectNotFoundError('id', String(id));
        }

        return project;
    }
}