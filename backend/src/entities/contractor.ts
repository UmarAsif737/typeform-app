import { IsString, IsOptional, ValidateNested, IsBoolean, IsNumber } from "@nestjs/class-validator";
import { Type } from '@nestjs/class-transformer';
import { Column, Entity, ManyToOne } from "typeorm";
import { ExtendedBaseEntity } from "./base/extendedBaseEntity";
import { Project } from "./project";

@Entity()
export class Contractor extends ExtendedBaseEntity {
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

    @IsBoolean()
    @Column()
    isGermanCompany: boolean;

    @IsString()
    @IsOptional()
    @Column({ nullable: true})
    federalState: string;

    @IsString()
    @Column()
    descriptionOfWork: string;
    
    @IsString()
    @IsOptional()
    @Column({ nullable: true})
    taxId: string;

    @IsNumber()
    @Column()
    cost: number;

    @ValidateNested({ each: true })
    @Type(() => Project)
    @ManyToOne(() => Project, (project) => project.contractors)
    project: Project;
}