import { Inject, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { createFiscalYears } from "src/domains/fiscalYear/createFiscalYears";
import { createSubCompanies } from "src/domains/subCompany/createSubCompanies";
import { generateRandomPassword } from "src/domains/user/generateRandomPassword";
import { Company } from "src/entities/company";
import { CompanyRepository } from "src/repositories/companyRepository";
import { UserRepository } from "src/repositories/userRepository";
import { Repository } from "typeorm";
import { AuthUser } from "../authentication/dto";
import { AssignUseroToCompanyDto, CreateCompanyDto } from "./dto";

@Injectable()
export class CompanyService {
    
    @InjectRepository(Company) private readonly companyRepository: Repository<Company>
    @Inject(UserRepository) private readonly userRepository: UserRepository
    @Inject(CompanyRepository) private readonly customCompanyRepository: CompanyRepository


    async findCompanyForUser(user: AuthUser): Promise<Company> {
        return await this.customCompanyRepository.findCompany(user.companyId);
    }

    async createCompany(companyBody: CreateCompanyDto): Promise<Company> {
        return await this.companyRepository.save(companyBody);
    }

    async assignUserToCompany(id: number, input: AssignUseroToCompanyDto): Promise<Company> {
        const company = await this.customCompanyRepository.findCompanyWithUserRelations(id);

        const password = generateRandomPassword()
        const user = await this.userRepository.createUser({...input, password});

        company.users = [...company.users, user];
        const savedCompany = await this.companyRepository.save(company);

        return savedCompany;
    }

    async updateCompany(user: AuthUser, companyBody: CreateCompanyDto): Promise<Company> {
        const company = await this.customCompanyRepository.findCompany(user.companyId);

        let subCompanies;
        if (companyBody.subCompanies) {
            subCompanies = await createSubCompanies(companyBody.subCompanies);
        }

        let fiscalYears;
        if (companyBody.fiscalYears) {
            fiscalYears = await createFiscalYears(companyBody.fiscalYears);
        }

        const companyInput = { ...company, ...companyBody, subCompanies, fiscalYears };
        const savedCompany = await this.companyRepository.save(companyInput);
        
        return savedCompany;
    }
}