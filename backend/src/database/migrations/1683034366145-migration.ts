import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration1683034366145 implements MigrationInterface {
    name = 'Migration1683034366145'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "document" DROP COLUMN "filePath"`);
        await queryRunner.query(`ALTER TABLE "document" ADD "data" bytea NOT NULL`);
        await queryRunner.query(`ALTER TABLE "document" ALTER COLUMN "fileType" DROP NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "document" ALTER COLUMN "fileType" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "document" DROP COLUMN "data"`);
        await queryRunner.query(`ALTER TABLE "document" ADD "filePath" character varying NOT NULL`);
    }

}
