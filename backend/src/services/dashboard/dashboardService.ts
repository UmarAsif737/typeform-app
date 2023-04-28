import { Injectable, Inject } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { checkForMissingCompanyDetails } from "src/domains/company/checkForMissingCompanyDetails";
import { calculateTotalRequestedFundingAmount } from "src/domains/project/calculateTotalRequestedFundingAmount";
import { checkForExistingTaxCounsellor } from "src/domains/user/checkForExistingTaxCounsellor";
import { Project } from "src/entities/project";
import { UserRole } from "src/entities/user";
import { CompanyRepository } from "src/repositories/companyRepository";
import { Repository } from "typeorm";
import { AuthUser } from "../authentication/dto";
import { DashboardData } from "./dto";

@Injectable()
export class DashboardService {
    
    @InjectRepository(Project) private readonly projectRepository: Repository<Project>
    @Inject(CompanyRepository) private readonly companyRepository: CompanyRepository


    async getData(user: AuthUser): Promise<DashboardData> {
        const projects = await this.projectRepository.find({ where: { company: { id: user.companyId} }, relations: ['company'] });
        const company = await this.companyRepository.findCompany(user.companyId);
        
        let hasTaxCounsellor;
        if (user.role === UserRole.CFO) {
            hasTaxCounsellor = await checkForExistingTaxCounsellor(user.companyId)
        }

        let hasMissingCompanyDetails;
        if (user.role === UserRole.TAX_COUNSELLOR) {
            hasMissingCompanyDetails = await checkForMissingCompanyDetails(user.companyId)
        }
        
        const totalRequestedFundingAmount = calculateTotalRequestedFundingAmount(projects);
        const totalProjects = projects.length;

        return {
            projects,
            companyName: company.name,
            totalRequestedFundingAmount,
            totalProjects, 
            hasTaxCounsellor,
            hasMissingCompanyDetails
        }
    }


}