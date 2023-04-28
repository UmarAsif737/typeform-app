import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Company } from 'src/entities/company';
import { Document } from 'src/entities/document';
import { Project } from 'src/entities/project';
import { User } from 'src/entities/user';
import { CompanyRepository } from 'src/repositories/companyRepository';
import { ProjectRepository } from 'src/repositories/projectRepository';
import { UserRepository } from 'src/repositories/userRepository';
import { ProjectService } from 'src/services/project/projectService';
import { AuthenticationModule } from '../authentication/authentication.module';
import { ProjectController } from './project.controller';


@Module({
    imports: [
        TypeOrmModule.forFeature([User, Company, Project, Document]),
        AuthenticationModule
    ],
    providers: [
        ProjectService,
        CompanyRepository,
        ProjectRepository,
        UserRepository
    ],
    controllers: [
        ProjectController
    ],
})

export class ProjectModule {}