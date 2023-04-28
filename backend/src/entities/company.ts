import { IsString, IsEnum, IsOptional, IsBoolean, IsNumber } from "@nestjs/class-validator";
import { Column, Entity, OneToMany } from "typeorm";
import { ExtendedBaseEntity } from "./base/extendedBaseEntity";
import { User } from "./user";
import { SubCompany } from "./subCompany";
import { Project } from "./project";
import { FiscalYear } from "./fiscalYear";

export enum CompanyStatus {
    PENDING = 'pending',
    CONFIRMED = 'confirmed',
}

@Entity()
export class Company extends ExtendedBaseEntity {
    //Question 41
    @IsString()
    @Column()
    name: string;

    @IsEnum(CompanyStatus)
    @Column({ type: 'enum', enum: CompanyStatus, default: CompanyStatus.PENDING })
    status: CompanyStatus;

    //Question 41
    @IsString()
    @IsOptional()
    @Column({ nullable: true })
    address: string;

    //Question 40
    @IsBoolean()
    @IsOptional()
    @Column({ nullable: true })
    isGermanCompany: boolean;

    //Question 42
    @IsString()
    @IsOptional()
    @Column({ nullable: true })
    taxId: string;

    //Question 43
    @IsString()
    @IsOptional()
    @Column({ nullable: true })
    taxOfficeName: string;

    //Question 44
    @IsNumber()
    @IsOptional()
    @Column({ nullable: true })
    fundingYear: number;

    //Question 45
    @IsString()
    @IsOptional()
    @Column({ nullable: true })
    registerNumber: string;

    //Question 45
    @IsString()
    @Column({ nullable: true })
    registerCourtName: string;

    //Question 46
    @IsString()
    @IsOptional()
    @Column({ nullable: true })
    legalRepresentatives: string;

    //Question 47
    @IsString()
    @IsOptional()
    @Column({ nullable: true })
    legalForm: string;

    //Question 48
    @IsString()
    @IsOptional()
    @Column({ nullable: true })
    industrySector: string;

    //Question 49
    @IsBoolean()
    @IsOptional()
    @Column({ nullable: true })
    isIndustrialWorkshopCompany: boolean;

    //Question 52
    @IsBoolean()
    @IsOptional()
    @Column({ nullable: true })
    isLegallyIndependent: boolean;

    //Question 56
    @IsBoolean()
    @IsOptional()
    @Column({ nullable: true })
    hasUpdatedElsterCertificate: boolean;

    //Question 55
    @IsNumber()
    @IsOptional()
    @Column({ nullable: true })
    publicFundingAmount: number;

    @OneToMany(() => User, (user) => user.company, { cascade: true })
    users: User[];

    @OneToMany(() => Project, (project) => project.company, { cascade: true })
    projects: Project[];

    //Question 51
    @OneToMany(() => SubCompany, (subCompany) => subCompany.company, { cascade: true })
    subCompanies: SubCompany[];

    //Question 53
    @OneToMany(() => FiscalYear, (fiscalYear) => fiscalYear.company, { cascade: true })
    fiscalYears: FiscalYear[];
}