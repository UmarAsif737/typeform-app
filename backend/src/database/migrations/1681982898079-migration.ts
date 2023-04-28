import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration1681982898079 implements MigrationInterface {
    name = 'Migration1681982898079'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "project" ADD "mainContact" character varying`);
        await queryRunner.query(`ALTER TABLE "project" ADD "keywords" character varying`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "project" DROP COLUMN "keywords"`);
        await queryRunner.query(`ALTER TABLE "project" DROP COLUMN "mainContact"`);
    }

}
