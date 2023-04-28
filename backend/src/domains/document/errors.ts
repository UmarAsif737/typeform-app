import { HttpException, HttpStatus } from "@nestjs/common";

export class DocumentNotFoundError extends HttpException {
    constructor(variable: string, value: string) {
        super(`Couldn't find document with ${variable}: ${value}`, HttpStatus.NOT_FOUND);
    }
}