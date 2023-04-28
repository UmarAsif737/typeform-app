import { IsString, ValidateNested, IsNumber } from "@nestjs/class-validator";
import { Type } from '@nestjs/class-transformer';
import { Column, Entity, ManyToOne } from "typeorm";
import { ExtendedBaseEntity } from "./base/extendedBaseEntity";
import { Project } from "./project";

@Entity()
export class ProjectJournal extends ExtendedBaseEntity {
    @IsString()
    @Column()
    part: string;

    @IsString()
    @Column()
    timeSlot: string;

    @IsNumber()
    @Column()
    budget: number;

    @ValidateNested({ each: true })
    @Type(() => Project)
    @ManyToOne(() => Project, (project) => project.projectJournals)
    project: Project;
}