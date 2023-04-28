import { Injectable, HttpException } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { User } from 'src/entities/user';

@Injectable()
export class LocalAuthGuard extends AuthGuard('local') {
  handleRequest(err: any, user: User, status: any): any {
    if (err || !user) {
        throw new HttpException(err, status);
    }
    return user;
  }
}