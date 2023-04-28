import { HttpException, HttpStatus } from "@nestjs/common";

export class CompanyNotFoundError extends HttpException {
    constructor(variable: string, value: string) {
        super(`Couldn't find company with ${variable}: ${value}`, HttpStatus.NOT_FOUND);
    }
}