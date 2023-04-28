import { HttpException, HttpStatus, Inject, Injectable, UnauthorizedException } from "@nestjs/common";
import { JwtService } from '@nestjs/jwt';
import { User } from "src/entities/user";
import * as bcrypt from 'bcryptjs';
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { UserRepository } from "src/repositories/userRepository";
import { AuthUser, JwtPayload, Tokens } from "src/services/authentication/dto";
import * as argon from 'argon2';

@Injectable()
export class AuthenticationHelper {
    @Inject(JwtService) private readonly jwt: JwtService;
    @InjectRepository(User) private readonly repository: Repository<User>
    @Inject(UserRepository) private readonly customUserRepository: UserRepository

    // Decoding the JWT Token
    async decode(token: string): Promise<unknown> {
        return this.jwt.decode(token);
    }

    // Get User by User ID we get from decode()
    async validateUser(decoded: any): Promise<User | null> {
        return this.repository.findOne(decoded.id);
    }

    // Generate JWT Token
    async generateToken(user: User): Promise<string> {
        const currentUser = await this.customUserRepository.findUserWithCompanyRelation(user.id)
        return this.jwt.sign({ 
          id: user.id, 
          email: user.email, 
          role: user.role, 
          companyId: currentUser.company.id, 
          companyName: currentUser.company.name 
        });
    }

    // Validate User's password
    isPasswordValid(password: string, userPassword: string): boolean {
        return bcrypt.compareSync(password, userPassword);
    }

    // Encode User's password
    encodePassword(password: string): string {
        const salt: string = bcrypt.genSaltSync(10);
        return bcrypt.hashSync(password, salt);
    }

    async returnGeneratedToken(user: AuthUser) {
        const tokens = await this.getTokens(user as any);
        await this.updateRtHash(user.id, tokens.refresh_token);
        tokens.user = this.returnedSearializedUser(user);
        return tokens;
    }

    async getTokens({id, email, role, name}): Promise<Tokens> {
        const jwtPayload: JwtPayload = {
          sub: id,
          email,
          role,
          name
        };
    
        const [at, rt] = await Promise.all([
          this.jwt.signAsync(jwtPayload, {
            secret: process.env.JWT_AT_SECRET,
            expiresIn: process.env.JWT_ACCESS_TOKEN_EXPIRE,
          }),
          this.jwt.signAsync(jwtPayload, {
            secret: process.env.JWT_RT_SECRET,
            expiresIn: process.env.JWT_REFRESH_TOKEN_EXPIRE,
          }),
        ]);
    
        return {
          access_token: at,
          refresh_token: rt,
        };
    }

    async updateRtHash(id: number, rt: string): Promise<void> {
        const hash = await argon.hash(rt);
      }

    // Validate JWT Token, throw forbidden error if JWT Token is invalid
    private async validate(token: string): Promise<boolean | never> {
        const decoded: unknown = this.jwt.verify(token);
    
        if (!decoded) {
          throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
        }
    
        const user = await this.validateUser(decoded);
    
        if (!user) {
          throw new UnauthorizedException();
        }
    
        return true;
    }

    returnedSearializedUser({
        id,
        firstName,
        email,
        role,
        companyId,
        companyName
    }: any) {
        return { id, firstName, email, role, companyId, companyName };
    }
}