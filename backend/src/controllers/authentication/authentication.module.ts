import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthenticationHelper } from 'src/domains/authentication/authenticationHelper';
import { JwtAuthGuard } from 'src/domains/authentication/guards/jwtAuthGuard';
import { JwtStrategy } from 'src/domains/authentication/strategies/jwtStrategy';
import { LocalStrategy } from 'src/domains/authentication/strategies/localStrategy';
import { User } from 'src/entities/user';
import { UserRepository } from 'src/repositories/userRepository';
import { AuthenticationService } from 'src/services/authentication/authenticationService';
import { AuthenticationController } from './autentication.controller';


@Module({
    imports: [
        AuthenticationModule,
        PassportModule.register({ defaultStrategy: 'jwt', property: 'user' }),
        JwtModule.registerAsync({
            imports: [ConfigModule],
            inject: [ConfigService],
            useFactory: (config: ConfigService) => ({
                secret: process.env.JWT_SECRET,
                signOptions: { expiresIn: process.env.JWT_EXPIRES },
            }),
        }),
        TypeOrmModule.forFeature([User]),
    ],
    providers: [
        AuthenticationService,
        AuthenticationHelper,
        JwtAuthGuard,
        JwtStrategy,
        LocalStrategy,
        UserRepository
    ],
    controllers: [
        AuthenticationController
    ],
})
export class AuthenticationModule {}
