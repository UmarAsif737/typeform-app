import { ValidateNested, IsNumber } from "@nestjs/class-validator";
import { Type } from '@nestjs/class-transformer';
import { Column, Entity, ManyToOne } from "typeorm";
import { ExtendedBaseEntity } from "./base/extendedBaseEntity";
import { Project } from "./project";

@Entity()
export class PersonalFramework extends ExtendedBaseEntity {
    @IsNumber()
    @Column()
    year: number;

    @IsNumber()
    @Column()
    personMonthsOfRD: number;

    @IsNumber()
    @Column()
    personMonthsOfTechnicans: number;

    @IsNumber()
    @Column()
    personMonthsOfOthers: number;

    @ValidateNested({ each: true })
    @Type(() => Project)
    @ManyToOne(() => Project, (project) => project.personalFrameworks)
    project: Project;
}