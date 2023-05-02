import { Exclude, Type } from '@nestjs/class-transformer';
import {
    IsBoolean,
    IsDate,
    IsEmail,
    IsEnum,
    IsPhoneNumber,
    IsString,
    ValidateNested,
} from '@nestjs/class-validator';
import { Column, Entity, ManyToMany, ManyToOne, OneToMany } from 'typeorm';
import { ExtendedBaseEntity } from './base/extendedBaseEntity';
import { Company } from './company';
import { Document } from './document';
import { Project } from './project';

export enum UserRole {
    ADMIN = 'admin',
    CFO = 'cfo',
    HEAD_OF_RD = 'headOfRd',
    TAX_COUNSELLOR = 'taxCounsellor',
    PROJECT_MANAGER = 'projectManager',
}

@Entity()
export class User extends ExtendedBaseEntity {
    @IsString()
    @IsEmail()
    @Column({ nullable: false, unique: true })
    email: string;

    @IsEnum(UserRole)
    @Column({ type: 'enum', enum: UserRole, nullable: true, default: UserRole.PROJECT_MANAGER })
    role: UserRole;

    @IsBoolean()
    @Column({ default: false })
    isConfirmed: boolean;

    @IsString()
    @Column({ nullable: false })
    firstName: string;

    @IsString()
    @Column({ nullable: false })
    lastName: string;

    @IsString()
    @Exclude()
    @Column({ nullable: false })
    password: string;

    @IsDate()
    @Column({ type: 'timestamptz', default: () => 'now()' })
    lastActive: Date;

    @IsPhoneNumber()
    @Column({ nullable: true })
    mobile: string;

    @IsBoolean()
    @Column({ default: false })
    isLegalRepresentative: boolean;

    @ValidateNested({ each: true })
    @Type(() => Company)
    @ManyToOne(() => Company, (company) => company.users)
    company: Company;

    @ManyToMany(() => Project, (project) => project.users, { cascade: true })
    projects: Project[];

    @OneToMany(() => Document, (document) => document.uploadUser, { cascade: true })
    documents: Document[];
}
