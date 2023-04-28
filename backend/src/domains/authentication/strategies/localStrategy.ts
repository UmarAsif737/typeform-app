import { Injectable, Inject } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { User } from 'src/entities/user';
import { AuthenticationHelper } from '../authenticationHelper';

import * as dotenv from 'dotenv';
dotenv.config();

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
    @Inject(AuthenticationHelper) private readonly authenticationHelper: AuthenticationHelper
    
    private async validate(payload: any): Promise<User | null> {
        return this.authenticationHelper.validateUser(payload);
    }
}