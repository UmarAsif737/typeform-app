import { HttpException, HttpStatus } from "@nestjs/common";

export class UserNotFoundError extends HttpException {
    constructor(variable: string, value: string) {
        super(`Couldn't find user with ${variable}: ${value}`, HttpStatus.NOT_FOUND);
    }
}