import { Inject, Injectable } from "@nestjs/common";
import { DocumentNotFoundError } from "src/domains/document/errors";
import { Document } from "src/entities/document";
import { Repository } from "typeorm";
import { ProjectRepository } from "./projectRepository";

@Injectable()
export class DocumentRepository extends Repository<Document> {
    @Inject(ProjectRepository) private readonly projectRepository: ProjectRepository

    async findDocumentByIdAndProjectId(id: number, projectId: number): Promise<Document> {
        const project = await this.projectRepository.findProject(projectId);
        const document = await Document.findOne({ where: { id, project: {id: project.id} } });
        
        if (!document) {
            throw new DocumentNotFoundError('id', String(id))
        }
        return document
    }


}