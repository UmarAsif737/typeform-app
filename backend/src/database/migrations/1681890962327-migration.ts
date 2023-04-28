import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration1681890962327 implements MigrationInterface {
    name = 'Migration1681890962327'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "project" ADD "calculatedTaxCredit" integer`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "project" DROP COLUMN "calculatedTaxCredit"`);
    }

}
