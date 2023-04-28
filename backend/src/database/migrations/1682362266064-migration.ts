import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration1682362266064 implements MigrationInterface {
    name = 'Migration1682362266064'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "project_journal" RENAME COLUMN "buget" TO "budget"`);
        await queryRunner.query(`ALTER TABLE "cooperate_research_partner" ADD "cost" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "project_journal" DROP COLUMN "budget"`);
        await queryRunner.query(`ALTER TABLE "project_journal" ADD "budget" integer NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "project_journal" DROP COLUMN "budget"`);
        await queryRunner.query(`ALTER TABLE "project_journal" ADD "budget" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "cooperate_research_partner" DROP COLUMN "cost"`);
        await queryRunner.query(`ALTER TABLE "project_journal" RENAME COLUMN "budget" TO "buget"`);
    }

}
