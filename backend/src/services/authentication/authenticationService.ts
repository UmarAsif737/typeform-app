import { HttpException, HttpStatus, Inject, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { AuthenticationHelper } from "src/domains/authentication/authenticationHelper";
import { Company } from "src/entities/company";
import { User } from "src/entities/user";
import { Repository } from "typeorm";
import { AuthUser, LoginDto, LoginResponse, RefreshJWTBody, RegisterDto } from "./dto";


@Injectable()
export class AuthenticationService {
    @Inject(AuthenticationHelper) private readonly helper: AuthenticationHelper
    @InjectRepository(User) private readonly repository: Repository<User>

    async register(body: RegisterDto): Promise<AuthUser> {
      const { firstName, lastName, email, password, companyName }: RegisterDto = body;
      let user = await this.repository.findOne({ where: { email } });
  
      if (user) {
        throw new HttpException('Conflict', HttpStatus.CONFLICT);
      }

      const company = await Company.create({ name: companyName });
      await company.save();
  
      user = new User();
      user.firstName = firstName;
      user.lastName = lastName;
      user.email = email;
      user.password = this.helper.encodePassword(password);
      user.company = company;
  
      const newUser = await this.repository.save(user);

      const authUser: AuthUser = {
        id: newUser.id,
        email: newUser.email,
        firstName: newUser.firstName,
        role: newUser.role,
        companyId: newUser.company.id,
        companyName: newUser.company.name
      }
      return authUser
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