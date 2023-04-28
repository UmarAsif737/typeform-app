import { Controller, ClassSerializerInterceptor, UseInterceptors, Get, } from "@nestjs/common";
import { CurrentUser } from "src/domains/authentication/decorators/currentUser.decorator";
import { Roles } from "src/domains/authentication/decorators/roles.decorator";
import { AuthUser } from "src/services/authentication/dto";
import { DashboardService } from "src/services/dashboard/dashboardService";
import { DashboardData } from "src/services/dashboard/dto";
import { FULL_ACCESS } from "src/services/user/dto";

@Roles(FULL_ACCESS)
@Controller('/dashboard')
@UseInterceptors(ClassSerializerInterceptor)
export class DashboardController {
    constructor(private readonly dashboardService: DashboardService) {}

    @Get('/')
    async getDashboardData(
        @CurrentUser('user') user: AuthUser
    ): Promise<DashboardData> {
        return this.dashboardService.getData(user);
    }
}