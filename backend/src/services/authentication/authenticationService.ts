import { HttpException, HttpStatus, Inject, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { AuthenticationHelper } from "src/domains/authentication/authenticationHelper";
import { User } from "src/entities/user";
import { Repository } from "typeorm";
import { AuthUser, LoginDto, LoginResponse, RefreshJWTBody, RegisterDto } from "./dto";


@Injectable()
export class AuthenticationService {
    @Inject(AuthenticationHelper) private readonly helper: AuthenticationHelper
    @InjectRepository(User) private readonly repository: Repository<User>

    async register(body: RegisterDto): Promise<User | never> {
        const { firstName, lastName, email, password }: RegisterDto = body;
        let user = await this.repository.findOne({ where: { email } });
    
        if (user) {
          throw new HttpException('Conflict', HttpStatus.CONFLICT);
        }
    
        user = new User();
        user.firstName = firstName;
        user.lastName = lastName;
        user.email = email;
        user.password = this.helper.encodePassword(password);
    
        return this.repository.save(user);
    }

    async login(body: LoginDto): Promise<LoginResponse> {
        const { email, password }: LoginDto = body;
        const user = await this.repository.findOne({ where: { email }, relations: [ 'company' ] });

        if (!user) {
          throw new HttpException('No user found', HttpStatus.NOT_FOUND);
        }
    
        const isPasswordValid: boolean = this.helper.isPasswordValid(password, user.password);
    
        if (!isPasswordValid) {
          throw new HttpException('No user found', HttpStatus.NOT_FOUND);
        }
    
        await this.repository.update(user.id, { lastActive: new Date() });
    
        const token =  await this.helper.generateToken(user);
        const authUser: AuthUser = {
          id: user.id,
          email: user.email,
          firstName: user.firstName,
          role: user.role,
          companyId: user.company.id,
          companyName: user.company.name
        }
        return { token, user: authUser }
    }
    
    async refresh(user: AuthUser): Promise<any> {
        this.repository.update(user.id, { lastActive: new Date() });
        const data = await this.helper.returnGeneratedToken(user);
        return data
    }
}