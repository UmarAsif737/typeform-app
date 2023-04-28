import { IsString, ValidateNested, IsNumber } from "@nestjs/class-validator";
import { Type } from '@nestjs/class-transformer';
import { Column, Entity, ManyToOne } from "typeorm";
import { ExtendedBaseEntity } from "./base/extendedBaseEntity";
import { Project } from "./project";

@Entity()
export class FinancialFramework extends ExtendedBaseEntity {
    @IsNumber()
    @Column()
    year: number;

    @IsNumber()
    @Column()
    totalCost: number;

    @IsNumber()
    @Column()
    personalCost: number;

    @IsNumber()
    @Column()
    materialCostAndInvestment: number;

    @IsNumber()
    @Column()
    contractorCostInEU: number;

    @IsNumber()
    @Column()
    contractorCostOutsideEU: number;

    @IsNumber()
    @Column()
    otherCost: number;

    @ValidateNested({ each: true })
    @Type(() => Project)
    @ManyToOne(() => Project, (project) => project.financialFrameworks)
    project: Project;
}