import { Controller, Body, Get, Param, Put, ClassSerializerInterceptor, UseInterceptors, UseGuards } from "@nestjs/common";
import { Roles } from "src/domains/authentication/decorators/roles.decorator";
import { JwtAuthGuard } from "src/domains/authentication/guards/jwtAuthGuard";
import { RolesGuard } from "src/domains/authentication/guards/roleGuard";
import { User, UserRole } from "src/entities/user";
import { AssignProjectDto, UpdateUserDto, UserResponseDto } from "src/services/user/dto";
import { UserService } from "src/services/user/userService";
import { ApiBearerAuth } from '@nestjs/swagger';
import { CurrentUser } from "src/domains/authentication/decorators/currentUser.decorator";

@Controller('/user')
@UseInterceptors(ClassSerializerInterceptor)
export class UserController {

    constructor(
        private readonly userService: UserService,
    ) {}


    @Get('/')
    async findAllUsersForCompany(companyId: number): Promise<UserResponseDto[]> {
        return this.userService.findAllUsersForCompany(companyId);
    }

    @ApiBearerAuth()
    @Roles([UserRole.CFO])
    @Get('/:id')
    async findUser(
        @Param('id') id: number,
        @CurrentUser('user') user: User
    ): Promise<UserResponseDto> {
        return this.userService.findUserById(id, user)
    }

    @Put('/:id/assign-project')
    async assignProject(@Param('id') id: number, @Body() input: AssignProjectDto): Promise<UserResponseDto> {
        return this.userService.assignProjectToUser(id, input);
    }

    @Put('/:id')
    async updateUser(@Param('id') id: number, @Body() body: UpdateUserDto): Promise<UserResponseDto> {
        return this.userService.updateUser(id, body);
    }
}