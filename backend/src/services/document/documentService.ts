import { Inject, Injectable } from "@nestjs/common";
import { Document } from "src/entities/document";
import { DocumentRepository } from "src/repositories/documentRepository";
import { ProjectRepository } from "src/repositories/projectRepository";
import { FileUploadBody } from "./dto";

//TODO: add azure storage
@Injectable()
export class DocumentService {
    @Inject(ProjectRepository) private readonly projectRepository: ProjectRepository
    @Inject(DocumentRepository) private readonly documentRepository: DocumentRepository

    //TODO: add uploadUser
    async uploadDocument(projectId: number, fileBody: FileUploadBody): Promise<Document> {
        const project = await this.projectRepository.findProject(projectId);
        const { filePath, fileName, fileType } = fileBody;

        const document = await Document.create({
            project,
            filePath,
            fileName,
            fileType,
        }).save();

        return document;
    }

    async downloadDocument(projectId: number, documentId: number): Promise<string> {
        const document = await this.documentRepository.findDocumentByIdAndProjectId(documentId, projectId);
        return document.filePath;
    }

    async deleteDocument(projectId: number, documentId: number): Promise<void> {
        const document = await this.documentRepository.findDocumentByIdAndProjectId(documentId, projectId);
        await document.softRemove();
    }
}