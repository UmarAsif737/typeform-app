import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration1681825207848 implements MigrationInterface {
    name = 'Migration1681825207848'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "project" ADD "status" character varying`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "project" DROP COLUMN "status"`);
    }

}
