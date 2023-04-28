import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration1681641582433 implements MigrationInterface {
    name = 'Migration1681641582433'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "project" DROP COLUMN "startOfPeriod"`);
        await queryRunner.query(`ALTER TABLE "project" ADD "startOfPeriod" TIMESTAMP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "project" DROP COLUMN "endOfPeriod"`);
        await queryRunner.query(`ALTER TABLE "project" ADD "endOfPeriod" TIMESTAMP NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "project" DROP COLUMN "endOfPeriod"`);
        await queryRunner.query(`ALTER TABLE "project" ADD "endOfPeriod" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "project" DROP COLUMN "startOfPeriod"`);
        await queryRunner.query(`ALTER TABLE "project" ADD "startOfPeriod" character varying NOT NULL`);
    }

}
