import { IsString, IsOptional, ValidateNested } from "@nestjs/class-validator";
import { Type } from '@nestjs/class-transformer';
import { Column, Entity, ManyToOne } from "typeorm";
import { ExtendedBaseEntity } from "./base/extendedBaseEntity";
import { Company } from "./company";

//Question 51
@Entity()
export class SubCompany extends ExtendedBaseEntity {
    @IsString()
    @Column()
    name: string;

    @IsString()
    @IsOptional()
    @Column({ nullable: true })
    address: string;

    @IsString()
    @Column()
    legalForm: string;

    @IsString()
    @Column()
    federalState: string;

    @IsString()
    @IsOptional()
    @Column({ nullable: true })
    taxId: string;

    @ValidateNested({ each: true })
    @Type(() => Company)
    @ManyToOne(() => Company, (company) => company.users)
    company: Company;
}