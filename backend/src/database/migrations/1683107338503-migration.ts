import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration1683107338503 implements MigrationInterface {
    name = 'Migration1683107338503'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "document" ALTER COLUMN "data" DROP NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "document" ALTER COLUMN "data" SET NOT NULL`);
    }

}
