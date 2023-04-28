import { Injectable } from "@nestjs/common";
import { CompanyNotFoundError } from "src/domains/company/errors";
import { Company } from "src/entities/company";
import { Repository } from "typeorm";

@Injectable()
export class CompanyRepository extends Repository<Company> {
    async findCompany(id: number): Promise<Company> {
        const company = await Company.findOne({ where: { id } });
        if (!company) {
            throw new CompanyNotFoundError('id', String(id));
        }
        return company;
    }

    async findCompanyWithUserRelations(id: number): Promise<Company> {
        const company = await Company.findOne({ where: { id }, relations: ['users'] });
        if (!company) {
            throw new CompanyNotFoundError('id', String(id));
        }
        return company;
    }
}