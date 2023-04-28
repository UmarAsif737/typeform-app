import { IsString, ValidateNested, IsNumber } from "@nestjs/class-validator";
import { Type } from '@nestjs/class-transformer';
import { Column, Entity, ManyToOne } from "typeorm";
import { ExtendedBaseEntity } from "./base/extendedBaseEntity";
import { Project } from "./project";

@Entity()
export class PublicOrPrivateSubsidiesCost extends ExtendedBaseEntity {
    @IsNumber()
    @Column()
    year: number;

    @IsNumber()
    @Column()
    fundedPersonellCosts: number;

    @IsNumber()
    @Column()
    fundedContractorCostsInEU: number;

    @ValidateNested({ each: true })
    @Type(() => Project)
    @ManyToOne(() => Project, (project) => project.publicOrPrivateSubsidiesCosts)
    project: Project;
}