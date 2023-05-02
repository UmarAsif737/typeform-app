import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration1683016921485 implements MigrationInterface {
    name = 'Migration1683016921485'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "role" SET DEFAULT 'projectManager'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "role" DROP DEFAULT`);
    }

}
