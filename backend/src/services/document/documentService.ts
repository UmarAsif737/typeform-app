import { Inject, Injectable, StreamableFile } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Response } from "express";
import { Document } from "src/entities/document";
import { DocumentRepository } from "src/repositories/documentRepository";
import { ProjectRepository } from "src/repositories/projectRepository";
import { UserRepository } from "src/repositories/userRepository";
import { Repository } from "typeorm";
import { Readable } from "typeorm/platform/PlatformTools";


@Injectable()
export class DocumentService {
    @InjectRepository(Document) private readonly documentRepository: Repository<Document>
    @Inject(DocumentRepository) private readonly customDocumentRepo: DocumentRepository
    @Inject(UserRepository) private readonly userRepository: UserRepository
    @Inject(ProjectRepository) private readonly projectRepository: ProjectRepository


    // async uploadDocument(projectId: number, fileBody: FileUploadBody): Promise<Document> {
    //     const project = await this.projectRepository.findProject(projectId);
    //     const { filePath, fileName, fileType } = fileBody;

    //     const document = await Document.create({
    //         project,
    //         filePath,
    //         fileName,
    //         fileType,
    //     }).save();

    //     return document;
    // }

    // async downloadDocument(projectId: number, documentId: number): Promise<string> {
    //     const document = await this.documentRepository.findDocumentByIdAndProjectId(documentId, projectId);
    //     return document.filePath;
    // }

    async uploadDocument(input: Express.Multer.File, projectId: number, userId: number, customFileName?: string) {
        const project = await this.projectRepository.findProject(projectId);
        const uploadUser = await this.userRepository.findUser(userId)

        const fileName = customFileName ? customFileName : input.originalname;

        const documentInput = {
            fileName,
            fileType: input.mimetype,
            filePath: input.path,
            data: input.buffer,
            uploadUser, 
            project
        }
        const savedDocument = await this.documentRepository.save(documentInput);
        
        return savedDocument;
      }
     
      async getDocumentById(fileId: number, projectId: number, response: Response): Promise<StreamableFile> {
        const document = await this.customDocumentRepo.findDocumentByIdAndProjectId(fileId, projectId);
        const stream = Readable.from(document.data);

        response.set({
            'Content-Disposition': `inline; filename="${document.fileName}"`,
            'Content-Type': `${document.fileType}}`
        })
 
       return new StreamableFile(stream);
    }

    async deleteDocument(projectId: number, documentId: number): Promise<void> {
        const document = await this.customDocumentRepo.findDocumentByIdAndProjectId(documentId, projectId);
        await document.softRemove();
    }
}