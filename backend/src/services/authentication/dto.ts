import { UserRole } from "src/entities/user";

export class RegisterDto {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
}

export class LoginDto {
    email: string;
    password: string;
}

export class AuthUser {
    id: number;
    email: string;
    firstName: string;
    role: UserRole;
    companyId: number;
    companyName: string
}

export class LoginResponse {
    user: AuthUser;
    token: string
}

export type RefreshJWTBody = {
    refreshToken: string;
};

export type RefreshJWTResponse = {
    accessToken: string;
    expiresAt: Date;
    user: AuthUser;
};

export type Tokens = {
    access_token: string;
    refresh_token: string;
    user?: any;
};

export type JwtPayload = {
    email: string;
    sub: number;
    role: UserRole;
    name: string
};