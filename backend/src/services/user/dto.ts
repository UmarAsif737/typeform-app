import { Company } from "src/entities/company";
import { UserRole } from "src/entities/user";

export class UpdateUserDto {
    firstName?: string;
    lastName?: string;
    email?: string;
    role?: UserRole;
    mobile?: string;
    company?: Company;
    isLegalRepresentative?: boolean;
}

export class UserResponseDto {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    role: UserRole;
    mobile: string;
    company: Company;
    isLegalRepresentative: boolean;
}
export class AssignProjectDto {
    projectId: number;
}

export class CreateUserDto {
    firstName: string;
    lastName: string;
    email: string;
    role: UserRole;
    password: string
    company?: Company;
    isLegalRepresentative?: boolean;
}

export const FULL_ACCESS = [
    UserRole.ADMIN, 
    UserRole.CFO,
    UserRole.HEAD_OF_RD,
    UserRole.PROJECT_MANAGER,
    UserRole.TAX_COUNSELLOR
]