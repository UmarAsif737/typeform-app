import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration1682331354168 implements MigrationInterface {
    name = 'Migration1682331354168'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "contractor" ("id" SERIAL NOT NULL, "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "name" character varying NOT NULL, "type" character varying NOT NULL, "address" character varying NOT NULL, "legalForm" character varying NOT NULL, "isGermanCompany" boolean NOT NULL, "federalState" character varying, "descriptionOfWork" character varying NOT NULL, "taxId" character varying, "cost" integer NOT NULL, "projectId" integer, CONSTRAINT "PK_27a7037ba4d95c429e611cef10e" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "cooperate_research_partner" ("id" SERIAL NOT NULL, "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "name" character varying NOT NULL, "type" character varying NOT NULL, "address" character varying NOT NULL, "legalForm" character varying NOT NULL, "federalState" character varying, "taxId" character varying, "projectId" integer, CONSTRAINT "PK_8dd7a12179574556d274f0ee174" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "financial_framework" ("id" SERIAL NOT NULL, "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "year" integer NOT NULL, "totalCost" integer NOT NULL, "personalCost" integer NOT NULL, "materialCostAndInvestment" integer NOT NULL, "contractorCostInEU" integer NOT NULL, "contractorCostOutsideEU" integer NOT NULL, "otherCost" integer NOT NULL, "projectId" integer, CONSTRAINT "PK_b1bfa6a23e00048b6564b9852e5" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "manager_working_hour" ("id" SERIAL NOT NULL, "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "name" character varying NOT NULL, "hour" character varying NOT NULL, "task" character varying NOT NULL, "projectId" integer, CONSTRAINT "PK_7a71510a0b7de8ecc291d442a99" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "personal_framework" ("id" SERIAL NOT NULL, "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "year" integer NOT NULL, "personMonthsOfRD" integer NOT NULL, "personMonthsOfTechnicans" integer NOT NULL, "personMonthsOfOthers" integer NOT NULL, "projectId" integer, CONSTRAINT "PK_b83e0c64fd8662445bfd131f56e" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "project_journal" ("id" SERIAL NOT NULL, "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "part" character varying NOT NULL, "timeSlot" character varying NOT NULL, "buget" character varying NOT NULL, "projectId" integer, CONSTRAINT "PK_386cd2e96c4d78d7e5c9001a102" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "public_or_private_subsidies_cost" ("id" SERIAL NOT NULL, "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "year" integer NOT NULL, "fundedPersonellCosts" integer NOT NULL, "fundedContractorCostsInEU" integer NOT NULL, "projectId" integer, CONSTRAINT "PK_6a166ad8075890ef3aed0675f51" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "fiscal_year" ("id" SERIAL NOT NULL, "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "year" integer NOT NULL, "preliminaryData" integer NOT NULL, "abbreviatedFiscalYear" character varying NOT NULL, "timePeriodOfFiscalYear" character varying NOT NULL, "numberOfEmployees" integer NOT NULL, "numberOfRDEmployees" integer NOT NULL, "revenue" integer NOT NULL, "internalCostsPersonell" integer NOT NULL, "internalCostsMaterial" integer NOT NULL, "externalContractCostsInEU" integer NOT NULL, "externalContractCostsOutsideEU" integer NOT NULL, "companyId" integer, CONSTRAINT "PK_72fa5ea3e6b0ec7542c23bf0389" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "company" ALTER COLUMN "isGermanCompany" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "company" ALTER COLUMN "isGermanCompany" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "company" ALTER COLUMN "fundingYear" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "company" ALTER COLUMN "registerNumber" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "company" ALTER COLUMN "registerCourtName" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "company" ALTER COLUMN "legalRepresentatives" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "company" ALTER COLUMN "legalForm" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "company" ALTER COLUMN "industrySector" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "company" ALTER COLUMN "isIndustrialWorkshopCompany" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "company" ALTER COLUMN "isIndustrialWorkshopCompany" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "company" ALTER COLUMN "isLegallyIndependent" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "company" ALTER COLUMN "isLegallyIndependent" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "company" ALTER COLUMN "hasUpdatedElsterCertificate" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "company" ALTER COLUMN "hasUpdatedElsterCertificate" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "company" ALTER COLUMN "publicFundingAmount" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "contractor" ADD CONSTRAINT "FK_2fe6895d0cbaba1c9d796b226a9" FOREIGN KEY ("projectId") REFERENCES "project"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "cooperate_research_partner" ADD CONSTRAINT "FK_f67251968a5ce360242c8f3786e" FOREIGN KEY ("projectId") REFERENCES "project"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "financial_framework" ADD CONSTRAINT "FK_eaf20e956390de303a04da8106a" FOREIGN KEY ("projectId") REFERENCES "project"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "manager_working_hour" ADD CONSTRAINT "FK_c1c36e2b5c462698a8e163390f8" FOREIGN KEY ("projectId") REFERENCES "project"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "personal_framework" ADD CONSTRAINT "FK_2ac3dfa6bef96aa3e7dee226ef2" FOREIGN KEY ("projectId") REFERENCES "project"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "project_journal" ADD CONSTRAINT "FK_77232867da66b58cf6e032552f5" FOREIGN KEY ("projectId") REFERENCES "project"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "public_or_private_subsidies_cost" ADD CONSTRAINT "FK_8928b3c073ff6b79cbeb948d37f" FOREIGN KEY ("projectId") REFERENCES "project"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "fiscal_year" ADD CONSTRAINT "FK_d1f6cd8c94bddaaac68b3637722" FOREIGN KEY ("companyId") REFERENCES "company"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "fiscal_year" DROP CONSTRAINT "FK_d1f6cd8c94bddaaac68b3637722"`);
        await queryRunner.query(`ALTER TABLE "public_or_private_subsidies_cost" DROP CONSTRAINT "FK_8928b3c073ff6b79cbeb948d37f"`);
        await queryRunner.query(`ALTER TABLE "project_journal" DROP CONSTRAINT "FK_77232867da66b58cf6e032552f5"`);
        await queryRunner.query(`ALTER TABLE "personal_framework" DROP CONSTRAINT "FK_2ac3dfa6bef96aa3e7dee226ef2"`);
        await queryRunner.query(`ALTER TABLE "manager_working_hour" DROP CONSTRAINT "FK_c1c36e2b5c462698a8e163390f8"`);
        await queryRunner.query(`ALTER TABLE "financial_framework" DROP CONSTRAINT "FK_eaf20e956390de303a04da8106a"`);
        await queryRunner.query(`ALTER TABLE "cooperate_research_partner" DROP CONSTRAINT "FK_f67251968a5ce360242c8f3786e"`);
        await queryRunner.query(`ALTER TABLE "contractor" DROP CONSTRAINT "FK_2fe6895d0cbaba1c9d796b226a9"`);
        await queryRunner.query(`ALTER TABLE "company" ALTER COLUMN "publicFundingAmount" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "company" ALTER COLUMN "hasUpdatedElsterCertificate" SET DEFAULT false`);
        await queryRunner.query(`ALTER TABLE "company" ALTER COLUMN "hasUpdatedElsterCertificate" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "company" ALTER COLUMN "isLegallyIndependent" SET DEFAULT false`);
        await queryRunner.query(`ALTER TABLE "company" ALTER COLUMN "isLegallyIndependent" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "company" ALTER COLUMN "isIndustrialWorkshopCompany" SET DEFAULT false`);
        await queryRunner.query(`ALTER TABLE "company" ALTER COLUMN "isIndustrialWorkshopCompany" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "company" ALTER COLUMN "industrySector" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "company" ALTER COLUMN "legalForm" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "company" ALTER COLUMN "legalRepresentatives" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "company" ALTER COLUMN "registerCourtName" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "company" ALTER COLUMN "registerNumber" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "company" ALTER COLUMN "fundingYear" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "company" ALTER COLUMN "isGermanCompany" SET DEFAULT true`);
        await queryRunner.query(`ALTER TABLE "company" ALTER COLUMN "isGermanCompany" SET NOT NULL`);
        await queryRunner.query(`DROP TABLE "fiscal_year"`);
        await queryRunner.query(`DROP TABLE "public_or_private_subsidies_cost"`);
        await queryRunner.query(`DROP TABLE "project_journal"`);
        await queryRunner.query(`DROP TABLE "personal_framework"`);
        await queryRunner.query(`DROP TABLE "manager_working_hour"`);
        await queryRunner.query(`DROP TABLE "financial_framework"`);
        await queryRunner.query(`DROP TABLE "cooperate_research_partner"`);
        await queryRunner.query(`DROP TABLE "contractor"`);
    }

}
