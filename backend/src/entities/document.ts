import { IsDate, ValidateNested } from "@nestjs/class-validator";
import { Type } from "class-transformer";
import { Column, DeleteDateColumn, Entity, ManyToOne } from "typeorm";
import { ExtendedBaseEntity } from "./base/extendedBaseEntity";
import { Project } from "./project";
import { User } from "./user";

@Entity()
export class Document extends ExtendedBaseEntity {
    @Column()
    fileName: string;

    @Column({ nullable: true })
    fileType: string;

    @Column({ nullable: true })
    filePath: string;

    @Column({ type: 'bytea', nullable: true})
    data: Uint8Array;

    @IsDate()
    @DeleteDateColumn()
    deletedAt: Date;

    @ValidateNested({ each: true })
    @Type(() => User)
    @ManyToOne(() => User, (user) => user.documents)
    uploadUser: User;

    @ValidateNested({ each: true })
    @Type(() => Project)
    @ManyToOne(() => Project, (project) => project.documents)
    project: Project;
}