import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration1682062686997 implements MigrationInterface {
    name = 'Migration1682062686997'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "project" ALTER COLUMN "status" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "project" ALTER COLUMN "status" SET DEFAULT 'not started'`);
        await queryRunner.query(`ALTER TABLE "project" ALTER COLUMN "startOfProject" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "project" ALTER COLUMN "startOfPeriod" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "project" ALTER COLUMN "endOfPeriod" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "project" ALTER COLUMN "type" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "project" ALTER COLUMN "category" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "project" ALTER COLUMN "endGoalDescription" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "project" ALTER COLUMN "compatibleEcosystems" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "project" ALTER COLUMN "basisOfProject" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "project" ALTER COLUMN "differenceToOtherProjects" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "project" ALTER COLUMN "processDescription" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "project" ALTER COLUMN "currentRAndDStatus" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "project" ALTER COLUMN "distinguishmentWithinSector" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "project" ALTER COLUMN "uniquenessOfProduct" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "project" ALTER COLUMN "marketIntroduction" DROP NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "project" ALTER COLUMN "marketIntroduction" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "project" ALTER COLUMN "uniquenessOfProduct" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "project" ALTER COLUMN "distinguishmentWithinSector" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "project" ALTER COLUMN "currentRAndDStatus" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "project" ALTER COLUMN "processDescription" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "project" ALTER COLUMN "differenceToOtherProjects" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "project" ALTER COLUMN "basisOfProject" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "project" ALTER COLUMN "compatibleEcosystems" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "project" ALTER COLUMN "endGoalDescription" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "project" ALTER COLUMN "category" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "project" ALTER COLUMN "type" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "project" ALTER COLUMN "endOfPeriod" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "project" ALTER COLUMN "startOfPeriod" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "project" ALTER COLUMN "startOfProject" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "project" ALTER COLUMN "status" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "project" ALTER COLUMN "status" DROP NOT NULL`);
    }

}
