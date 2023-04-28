import { Inject, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { UserNotFoundError } from "src/domains/user/errors";
import { mapToUserResponseDto } from "src/domains/user/mapper/mapToUserResponseDto";
import { User } from "src/entities/user";
import { CompanyRepository } from "src/repositories/companyRepository";
import { ProjectRepository } from "src/repositories/projectRepository";
import { UserRepository } from "src/repositories/userRepository";
import { Repository } from "typeorm";
import { AssignProjectDto, UpdateUserDto, UserResponseDto } from "./dto";

@Injectable()
export class UserService {
    
    @Inject(CompanyRepository) private readonly customCompanyRepository: CompanyRepository
    @Inject(ProjectRepository) private readonly customProjectRepository: ProjectRepository
    @InjectRepository(User) private readonly userRepository: Repository<User>
    @Inject(UserRepository) private readonly customUserRepository: UserRepository

    async findAllUsersForCompany(companyId: number): Promise<UserResponseDto[]> {
        const company = await this.customCompanyRepository.findCompanyWithUserRelations(companyId);
        return company.users.map(mapToUserResponseDto);
    }

    async findUserById(id: number, sessionUser: User): Promise<UserResponseDto> {

        const user = await this.customUserRepository.findUserWithCompanyRelation(id)
        return mapToUserResponseDto(user);
    }

    async assignProjectToUser(id: number, input: AssignProjectDto): Promise<UserResponseDto> {
        const user = await this.customUserRepository.findUserWithProjectRelations(id);
        const project = await this.customProjectRepository.findProject(input.projectId);

        user.projects = [...user.projects, project];
        const savedUser = await this.userRepository.save(user);
        
        return mapToUserResponseDto(savedUser);
    }

    async updateUser(id: number, body: UpdateUserDto): Promise<UserResponseDto> {
        const user = await this.userRepository.findOne({ where: { id } });

        if (!user) {
            throw new UserNotFoundError('id', String(id));
        }

        const userInput = { ...user, ...body };
        const savedUser = await this.userRepository.save(userInput);
        return mapToUserResponseDto(savedUser)
    }
}