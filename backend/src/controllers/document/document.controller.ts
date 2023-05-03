import { Controller, ClassSerializerInterceptor, UseInterceptors, Post, Param, Body, Get, HttpCode, Delete, UploadedFile, StreamableFile, Res } from "@nestjs/common";
import { CurrentUser } from "src/domains/authentication/decorators/currentUser.decorator";
import { Document } from "src/entities/document";
import { AuthUser } from "src/services/authentication/dto";
import { DocumentService } from "src/services/document/documentService";
import { FileUploadBody } from "src/services/document/dto";
import { Express, Response } from 'express';
import { FileInterceptor } from "@nestjs/platform-express";
import { Multer } from 'multer';

@Controller('/projects/:projectId/')
@UseInterceptors(ClassSerializerInterceptor)
export class DocumentController {
    constructor(private readonly documentService: DocumentService) {}

    @Post('documents')
    @UseInterceptors(FileInterceptor('document', { dest: './uploads' }))
    async uploadDocument(
        @CurrentUser('user') user: AuthUser,
        @Param('projectId') projectId: number,
        @UploadedFile() document: Express.Multer.File
    ): Promise<Document> {
        const userId = 1
        return this.documentService.uploadDocument(document, projectId, userId);
    }

    @Get('documents/:documentId')
    async downloadRetirementCertificate(
        @Param('projectId') projectId: number,
        @Param('documentId') documentId: number,
        @Res({ passthrough: true }) response: Response
    ): Promise<StreamableFile> {
        return this.documentService.getDocumentById(projectId, documentId, response);
    }

    @HttpCode(204)
    @Delete('documents/:documentId')
    async deleteRetirementCertificate(
        @Param('projectId') projectId: number,
        @Param('documentId') documentId: number,
    ): Promise<void> {
        return this.documentService.deleteDocument(projectId, documentId);
    }

}