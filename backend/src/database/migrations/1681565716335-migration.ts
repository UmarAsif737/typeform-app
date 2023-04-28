import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration1681565716335 implements MigrationInterface {
    name = 'Migration1681565716335'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TYPE "public"."employee_type_enum" AS ENUM('admin', 'cfo', 'head of rd', 'tax counsellor', 'project manager')`);
        await queryRunner.query(`CREATE TABLE "employee" ("id" SERIAL NOT NULL, "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "email" character varying NOT NULL, "type" "public"."employee_type_enum", "confirmed" boolean NOT NULL DEFAULT false, "firstName" character varying, "lastName" character varying, "passwordHash" character varying NOT NULL, "passwordSalt" character varying NOT NULL, "mobile" character varying, "isLegalRepresentative" boolean NOT NULL DEFAULT false, "companyId" integer, CONSTRAINT "UQ_817d1d427138772d47eca048855" UNIQUE ("email"), CONSTRAINT "PK_3c2bc72f03fd5abbbc5ac169498" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "sub_company" ("id" SERIAL NOT NULL, "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "name" character varying NOT NULL, "address" character varying, "legalForm" character varying NOT NULL, "federalState" character varying NOT NULL, "taxId" character varying, "companyId" integer, CONSTRAINT "PK_ba13246bc8ff34443be1a8d08f8" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TYPE "public"."company_status_enum" AS ENUM('pending', 'confirmed')`);
        await queryRunner.query(`CREATE TABLE "company" ("id" SERIAL NOT NULL, "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "name" character varying NOT NULL, "status" "public"."company_status_enum" NOT NULL DEFAULT 'pending', "address" character varying, "isGermanCompany" boolean NOT NULL DEFAULT true, "taxId" character varying, "taxOfficeName" character varying, "fundingYear" integer NOT NULL, "registerNumber" character varying NOT NULL, "registerCourtName" character varying NOT NULL, "legalRepresentatives" character varying NOT NULL, "legalForm" character varying NOT NULL, "industrySector" character varying NOT NULL, "isIndustrialWorkshopCompany" boolean NOT NULL DEFAULT false, "isLegallyIndependent" boolean NOT NULL DEFAULT false, "hasUpdatedElsterCertificate" boolean NOT NULL DEFAULT false, "publicFundingAmount" integer NOT NULL, CONSTRAINT "PK_056f7854a7afdba7cbd6d45fc20" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "project" ("id" SERIAL NOT NULL, "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "name" character varying NOT NULL, "startOfProject" character varying NOT NULL, "startOfPeriod" character varying NOT NULL, "endOfPeriod" character varying NOT NULL, "type" character varying NOT NULL, "isRegisteredAtBSFZ" boolean NOT NULL DEFAULT false, "bsfzProjectId" character varying, "majorityHasUniversityDegrees" boolean NOT NULL DEFAULT true, "category" character varying NOT NULL, "isCompatibleWithExistingEcosystems" boolean NOT NULL DEFAULT true, "majorityIsDevelopedFromScratch" boolean NOT NULL DEFAULT true, "endGoalDescription" character varying NOT NULL, "compatibleEcosystems" character varying NOT NULL, "basisOfProject" character varying NOT NULL, "differenceToOtherProjects" character varying NOT NULL, "processDescription" character varying NOT NULL, "currentRAndDStatus" character varying NOT NULL, "distinguishmentWithinSector" character varying NOT NULL, "uniquenessOfProduct" character varying NOT NULL, "marketIntroduction" character varying NOT NULL, "hasEstimatedFigures" boolean NOT NULL DEFAULT false, "isFundedBySubsidies" boolean NOT NULL DEFAULT false, "hasPersonalDocumentsForEmployees" boolean NOT NULL DEFAULT false, "hasWorkingTrackRecord" boolean NOT NULL DEFAULT false, CONSTRAINT "PK_4d68b1358bb5b766d3e78f32f57" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "employee" ADD CONSTRAINT "FK_26c3d513e0832e5abbbdd3d2a88" FOREIGN KEY ("companyId") REFERENCES "company"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "sub_company" ADD CONSTRAINT "FK_0718de050bce47c853dc9484e2f" FOREIGN KEY ("companyId") REFERENCES "company"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "sub_company" DROP CONSTRAINT "FK_0718de050bce47c853dc9484e2f"`);
        await queryRunner.query(`ALTER TABLE "employee" DROP CONSTRAINT "FK_26c3d513e0832e5abbbdd3d2a88"`);
        await queryRunner.query(`DROP TABLE "project"`);
        await queryRunner.query(`DROP TABLE "company"`);
        await queryRunner.query(`DROP TYPE "public"."company_status_enum"`);
        await queryRunner.query(`DROP TABLE "sub_company"`);
        await queryRunner.query(`DROP TABLE "employee"`);
        await queryRunner.query(`DROP TYPE "public"."employee_type_enum"`);
    }

}
