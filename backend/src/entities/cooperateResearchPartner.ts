import { IsString, IsOptional, ValidateNested, IsNumber } from "@nestjs/class-validator";
import { Type } from '@nestjs/class-transformer';
import { Column, Entity, ManyToOne } from "typeorm";
import { ExtendedBaseEntity } from "./base/extendedBaseEntity";
import { Project } from "./project";

@Entity()
export class CooperateResearchPartner extends ExtendedBaseEntity {
    @IsString()
    @Column()
    name: string;

    @IsString()
    @Column()
    type: string;

    @IsString()
    @Column()
    address: string;

    @IsString()
    @Column()
    legalForm: string;

    @IsString()
    @IsOptional()
    @Column({ nullable: true})
    federalState: string;

    @IsString()
    @IsOptional()
    @Column({ nullable: true})
    taxId: string;

    @IsNumber()
    @Column()
    cost: number;

    @ValidateNested({ each: true })
    @Type(() => Project)
    @ManyToOne(() => Project, (project) => project.cooperateResearchPartners)
    project: Project;
}