import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Company } from 'src/entities/company';
import { Document } from 'src/entities/document';
import { Project } from 'src/entities/project';
import { User } from 'src/entities/user';
import { CompanyRepository } from 'src/repositories/companyRepository';
import { ProjectRepository } from 'src/repositories/projectRepository';
import { UserRepository } from 'src/repositories/userRepository';
import { DashboardService } from 'src/services/dashboard/dashboardService';
import { AuthenticationModule } from '../authentication/authentication.module';
import { DashboardController } from './dashboard.controller';


@Module({
    imports: [
        TypeOrmModule.forFeature([User, Company, Project, Document]),
        AuthenticationModule
    ],
    providers: [
        DashboardService,
        CompanyRepository,
        ProjectRepository,
        UserRepository
    ],
    controllers: [
        DashboardController
    ],
})

export class DashboardModule {}