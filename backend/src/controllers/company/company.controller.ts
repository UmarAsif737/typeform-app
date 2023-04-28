import { Controller, Body, Get, Param, Put, ClassSerializerInterceptor, UseInterceptors, Post } from "@nestjs/common";
import { CurrentUser } from "src/domains/authentication/decorators/currentUser.decorator";
import { Roles } from "src/domains/authentication/decorators/roles.decorator";
import { Company } from "src/entities/company";
import { UserRole } from "src/entities/user";
import { AuthUser } from "src/services/authentication/dto";
import { CompanyService } from "src/services/company/companyService";
import { AssignUseroToCompanyDto, CreateCompanyDto, UpdateCompanyDto } from "src/services/company/dto";
import { FULL_ACCESS } from "src/services/user/dto";

@Controller('/company')
@UseInterceptors(ClassSerializerInterceptor)
export class CompanyController {
    constructor(private readonly companyService: CompanyService) {}
    
    @Roles(FULL_ACCESS)
    @Get('/')
    async findCompanyForUser(
        @CurrentUser('user') user: AuthUser
    ): Promise<Company> {
        return await this.companyService.findCompanyForUser(user);
    }

    @Post('/')
    async createCompany(@Body() company: CreateCompanyDto): Promise<Company> {
        return await this.companyService.createCompany(company);
    }
    @Roles(FULL_ACCESS)
    @Put('/:id/assign-user')
    async assignUserToCompany(@Param('id') id: number, @Body() input: AssignUseroToCompanyDto): Promise<Company> {
        return await this.companyService.assignUserToCompany(id, input);
    }

    @Roles([UserRole.ADMIN, UserRole.CFO, UserRole.TAX_COUNSELLOR])
    @Put('/')
    async updateCompany(
        @CurrentUser('user') user: AuthUser, 
        @Body() company: UpdateCompanyDto
    ): Promise<Company> {
        return await this.companyService.updateCompany(user, company);
    }
}