import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Company } from 'src/entities/company';
import { Document } from 'src/entities/document';
import { Project } from 'src/entities/project';
import { User } from 'src/entities/user';
import { CompanyRepository } from 'src/repositories/companyRepository';
import { DocumentRepository } from 'src/repositories/documentRepository';
import { ProjectRepository } from 'src/repositories/projectRepository';
import { DocumentService } from 'src/services/document/documentService';
import { AuthenticationModule } from '../authentication/authentication.module';
import { DocumentController } from './document.controller';


@Module({
    imports: [
        TypeOrmModule.forFeature([User, Company, Project, Document]),
        AuthenticationModule
    ],
    providers: [
        DocumentService,
        DocumentRepository,
        CompanyRepository,
        ProjectRepository,
    ],
    controllers: [
        DocumentController
    ],
})

export class DocumentModule {}