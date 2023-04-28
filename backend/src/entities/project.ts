import { IsBoolean, IsDate, IsNumber, IsString, ValidateNested } from "@nestjs/class-validator";
import { Type } from "class-transformer";
import { Column, Entity, JoinTable, ManyToMany, ManyToOne, OneToMany } from "typeorm";
import { ExtendedBaseEntity } from "./base/extendedBaseEntity";
import { Company } from "./company";
import { Contractor } from "./contractor";
import { CooperateResearchPartner } from "./cooperateResearchPartner";
import { Document } from "./document";
import { FinancialFramework } from "./financialFramework";
import { ManagerWorkingHour } from "./managerWorkingHour";
import { PersonalFramework } from "./personalFramework";
import { ProjectJournal } from "./projectJournal";
import { PublicOrPrivateSubsidiesCost } from "./publicOrPrivateSubsidiesCost";
import { User } from "./user";

export enum ProjectStatus {
    NOT_STARTED = 'not started', //default
    NOT_ELIGIBLE = 'not eligible',
    STARTED = 'started', //after passing startOfProject,
    TYPE_FILLED_OUT = 'type filled out', //after passing type
    PERSONELL_FILLED_OUT = 'personell filled out', //after passing personell question
    ECOSYSTEMS_FILLED_OUT = 'is compatible with ecosystems', //after passsing ecosystem compatability
    FROM_SCRATCH_FILLED_OUT = 'from scratch filled out', //after passing developing more than 60% from scratch
    AWAITING_TAX_CREDIT_PROCESS = 'awaiting tax credit process', //after filling out all questions
    BSFZ_REGISTRATION = 'bsfz registration', //bsfz registration
    ELSTER_FORMULA_UPLOADED = 'elster formula uploaded' //elster formula uploaded
}

@Entity()
export class Project extends ExtendedBaseEntity {
    //Question 3
    @IsString()
    @Column()
    name: string;

    @IsString()
    @Column({ default: ProjectStatus.NOT_STARTED})
    status: ProjectStatus;

    //Question 1
    @IsNumber()
    @Column({ nullable: true })
    calculatedTaxCredit: number;

    //Question 2
    @IsString()
    @Column({ nullable: true })
    startOfProject: string;

    //Question 4a
    @IsDate()
    @Column({ nullable: true })
    startOfPeriod: Date;

    //Question 4b
    @IsDate()
    @Column({ nullable: true })
    endOfPeriod: Date;

    //Question 5
    @IsString()
    @Column({ nullable: true })
    type: string;

    //Question 6
    @IsBoolean()
    @Column({ default: false })
    isRegisteredAtBSFZ: boolean;
    
    //Question 7
    @IsString()
    @Column({nullable: true})
    bsfzProjectId: string;

    //Question 9
    @IsBoolean()
    @Column({ default: true })
    majorityHasUniversityDegrees: boolean;

    //Question 10
    @IsString()
    @Column({ nullable: true })
    category: string;

    //Question 11
    @OneToMany(() => Contractor, (contractor) => contractor.project, { cascade: true })
    contractors: Contractor[];

    //Question 12
    @OneToMany(() => CooperateResearchPartner, (partner) => partner.project, { cascade: true })
    cooperateResearchPartners: CooperateResearchPartner[];

    //Question 13
    @IsBoolean()
    @Column({ default: true })
    isCompatibleWithExistingEcosystems: boolean;

    //Question 14
    @IsBoolean()
    @Column({ default: true })
    majorityIsDevelopedFromScratch: boolean;

    //Question 15
    @OneToMany(() => ProjectJournal, (projectJournal) => projectJournal.project, { cascade: true })
    projectJournals: ProjectJournal[];

    //Question 16
    @OneToMany(() => ManagerWorkingHour, (managerWorkingHour) => managerWorkingHour.project, { cascade: true })
    managerWorkingHours: ManagerWorkingHour[];

    //Question 18
    @IsString()
    @Column({ nullable: true })
    mainContact: string;

    //Question 19
    @IsString()
    @Column({ nullable: true })
    keywords: string;

    //Question 20
    @IsString()
    @Column({ nullable: true })
    endGoalDescription: string;

    //Question 21
    @IsString()
    @Column({ nullable: true })
    compatibleEcosystems: string;

    //Question 22
    @IsString()
    @Column({ nullable: true })
    basisOfProject: string;

    //Question 23
    @IsString()
    @Column({ nullable: true })
    differenceToOtherProjects: string;

    //Question 24
    @IsString()
    @Column({ nullable: true })
    processDescription: string;

    //Question 25
    @IsString()
    @Column({ nullable: true })
    currentRAndDStatus: string;

    //Question 26
    @IsString()
    @Column({ nullable: true })
    distinguishmentWithinSector: string;

    //Question 27
    @IsString()
    @Column({ nullable: true })
    uniquenessOfProduct: string;
    
    //Question 28
    @IsString()
    @Column({ nullable: true })
    marketIntroduction: string;

    //Question 30
    @IsBoolean()
    @Column({ default: false })
    hasEstimatedFigures: boolean;

    //Question 31
    @OneToMany(() => FinancialFramework, (financialFramework) => financialFramework.project, { cascade: true })
    financialFrameworks: FinancialFramework[];

    //Question 32
    @OneToMany(() => PersonalFramework, (personalFramework) => personalFramework.project, { cascade: true })
    personalFrameworks: PersonalFramework[];

    //Question 33
    @IsBoolean()
    @Column({ default: false })
    isFundedBySubsidies: boolean;

    //Question 34
    @OneToMany(() => PublicOrPrivateSubsidiesCost, (publicOrPrivateSubsidiesCost) => publicOrPrivateSubsidiesCost.project, { cascade: true })
    publicOrPrivateSubsidiesCosts: PublicOrPrivateSubsidiesCost[];

    //Question 37
    @IsBoolean()
    @Column({ default: false })
    hasPersonalDocumentsForEmployees: boolean;

    //Question 38
    @IsBoolean()
    @Column({ default: false })
    hasWorkingTrackRecord: boolean;

    @ValidateNested({ each: true })
    @Type(() => Company)
    @ManyToOne(() => Company, (company) => company.users)
    company: Company;

    @ManyToMany(() => User, (user) => user.projects)
    @JoinTable()
    users: User[];

    @OneToMany(() => Document, (document) => document.project, { cascade: true })
    documents: Document[];
}
