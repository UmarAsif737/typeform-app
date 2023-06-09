import { UserRole } from "src/entities/user";

export class RegisterDto {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    companyName: string;
}

export class LoginDto {
    email: string;
    password: string;
}

export class AuthUser {
    id: number;
    email: string;
    name: string;
    role: UserRole;
    companyId: number;
    companyName: string;
}

export class SessionUser extends AuthUser {
    accessToken: string;
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
    accessToken: string;
    refreshToken: string;
    user?: any;
};

export type JwtPayload = {
    email: string;
    sub: number;
    role: UserRole;
    name: string
};