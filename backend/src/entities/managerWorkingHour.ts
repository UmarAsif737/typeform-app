import { IsString, ValidateNested, IsNumber } from "@nestjs/class-validator";
import { Type } from '@nestjs/class-transformer';
import { Column, Entity, ManyToOne } from "typeorm";
import { ExtendedBaseEntity } from "./base/extendedBaseEntity";
import { Project } from "./project";

@Entity()
export class ManagerWorkingHour extends ExtendedBaseEntity {
    @IsString()
    @Column()
    name: string;

    @IsString()
    @Column()
    hour: string;

    @IsString()
    @Column()
    task: string;

    @ValidateNested({ each: true })
    @Type(() => Project)
    @ManyToOne(() => Project, (project) => project.managerWorkingHours)
    project: Project;
}