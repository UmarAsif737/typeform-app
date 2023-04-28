import { IsString, ValidateNested, IsNumber } from "@nestjs/class-validator";
import { Type } from '@nestjs/class-transformer';
import { Column, Entity, ManyToOne } from "typeorm";
import { ExtendedBaseEntity } from "./base/extendedBaseEntity";
import { Company } from "./company";

@Entity()
export class FiscalYear extends ExtendedBaseEntity {
    @IsNumber()
    @Column()
    year: number;

    @IsNumber()
    @Column()
    preliminaryData: number;

    @IsNumber()
    @Column()
    abbreviatedFiscalYear: string;

    @IsString()
    @Column()
    timePeriodOfFiscalYear: string;
    
    @IsNumber()
    @Column()
    numberOfEmployees: number;

    @IsNumber()
    @Column()
    numberOfRDEmployees: number;

    @IsNumber()
    @Column()
    revenue: number;

    @IsNumber()
    @Column()
    internalCostsPersonell: number;

    @IsNumber()
    @Column()
    internalCostsMaterial: number;

    @IsNumber()
    @Column()
    externalContractCostsInEU: number;

    @IsNumber()
    @Column()
    externalContractCostsOutsideEU: number;

    @ValidateNested({ each: true })
    @Type(() => Company)
    @ManyToOne(() => Company, (company) => company.fiscalYears)
    company: Company;
}