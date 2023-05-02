import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Company } from 'src/entities/company';
import { Document } from 'src/entities/document';
import { Project } from 'src/entities/project';
import { User } from 'src/entities/user';
import { CompanyRepository } from 'src/repositories/companyRepository';
import { DocumentRepository } from 'src/repositories/documentRepository';
import { ProjectRepository } from 'src/repositories/projectRepository';
import { UserRepository } from 'src/repositories/userRepository';
import { DocumentService } from 'src/services/document/documentService';
import { ProjectService } from 'src/services/project/projectService';
import { AuthenticationModule } from '../authentication/authentication.module';
import { ProjectController } from './project.controller';


@Module({
    imports: [
        TypeOrmModule.forFeature([User, Company, Project, Document]),
        AuthenticationModule
    ],
    providers: [
        CompanyRepository,
        DocumentRepository,
        DocumentService,
        ProjectRepository,
        ProjectService,
        UserRepository,
    ],
    controllers: [
        ProjectController
    ],
})

export class ProjectModule {}