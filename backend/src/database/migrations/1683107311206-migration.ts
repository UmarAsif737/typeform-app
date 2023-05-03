import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration1683107311206 implements MigrationInterface {
    name = 'Migration1683107311206'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "document" ADD "filePath" character varying`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "document" DROP COLUMN "filePath"`);
    }

}
