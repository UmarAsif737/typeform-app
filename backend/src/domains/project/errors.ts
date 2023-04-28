import { HttpException, HttpStatus } from "@nestjs/common";

export class ProjectNotFoundError extends HttpException {
    constructor(variable: string, value: string) {
        super(`Couldn't find project with ${variable}: ${value}`, HttpStatus.NOT_FOUND);
    }
}