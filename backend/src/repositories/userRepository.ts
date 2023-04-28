import { Injectable } from "@nestjs/common";
import { UserNotFoundError } from "src/domains/user/errors";
import { User } from "src/entities/user";
import { CreateUserDto } from "src/services/user/dto";
import { Repository } from "typeorm";

@Injectable()
export class UserRepository extends Repository<User> {

    async createUser(userBody: CreateUserDto): Promise<User> {
        const user = await User.save({
            firstName: userBody.firstName,
            lastName: userBody.lastName,
            email: userBody.email,
            role: userBody.role,
            password: userBody.password
        });
        return user;
    }

    async findUser(id: number): Promise<User> {
        const user = await User.findOne({ where: { id } });
        if (!user) {
            throw new UserNotFoundError('id', String(id));
        }
        return user;
    }

    async findUserByEmail(email: string): Promise<User> {
        const user = await User.findOne({ where: { email } });
        if (!user) {
            throw new UserNotFoundError('email', email);
        }
        return user;
    }

    async findUserWithCompanyRelation(id: number): Promise<User> {
        const user = await User.findOne({ where: { id }, relations: ['company'] });
        if (!user) {
            throw new UserNotFoundError('id', String(id));
        }
        return user;
    }

    async findUserWithProjectRelations(id: number): Promise<User> {
        const user = await User.findOne({ where: { id }, relations: ['projects'] });
        if (!user) {
            throw new UserNotFoundError('id', String(id));
        }
        return user;
    }
}