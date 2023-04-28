import { Controller, ClassSerializerInterceptor, UseInterceptors, Post, Param, Body, Get, HttpCode, Delete } from "@nestjs/common";
import { Document } from "src/entities/document";
import { DocumentService } from "src/services/document/documentService";
import { FileUploadBody } from "src/services/document/dto";

@Controller('/project/:projectId/')
@UseInterceptors(ClassSerializerInterceptor)
export class DocumentController {
    constructor(private readonly documentService: DocumentService) {}

    @Post('documents')
    async uploadDocument(
        @Param('projectId') projectId: number,
        @Body() documentUploadBody: FileUploadBody,
    ): Promise<Document> {
        return this.documentService.uploadDocument(projectId, documentUploadBody);
    }

    @Get('documents/:documentId')
    async downloadRetirementCertificate(
        @Param('projectId') projectId: number,
        @Param('documentId') documentId: number,
    ): Promise<string> {
        return this.documentService.downloadDocument(projectId, documentId);
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