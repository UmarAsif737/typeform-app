import { Body, Controller, Post, Req, UseGuards } from '@nestjs/common';
import { Public } from 'src/domains/authentication/decorators/public.decorator';
import { User } from 'src/entities/user';
import { AuthenticationService } from 'src/services/authentication/authenticationService';
import { AuthUser, LoginResponse, RefreshJWTBody, RefreshJWTResponse, RegisterDto } from 'src/services/authentication/dto';


export type RefreshTokenDto = {
    token: string;
    user: any;
}
@Public()
@Controller('/auth/')
export class AuthenticationController {

    constructor(
        private readonly authService: AuthenticationService,
    ) {}

    @Post('sign-up')
    async signUp(@Body() body: RegisterDto): Promise<AuthUser> {
        return this.authService.register(body);
    }

    @Post('sign-in')
    async signIn(@Body() body: RegisterDto): Promise<LoginResponse> {
        return this.authService.login(body);
    }

    @Post('refresh')
    async refresh(@Body() body: RefreshTokenDto) {
        const user = body.user;
        return this.authService.refresh(user);
    }
}