import { User } from "src/entities/user";
import { UserResponseDto } from "src/services/user/dto";

export const mapToUserResponseDto = (user: User): UserResponseDto => {
    return {
        id: user.id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        role: user.role,
        mobile: user.mobile,
        company: user.company,
        isLegalRepresentative: user.isLegalRepresentative,
    };
}