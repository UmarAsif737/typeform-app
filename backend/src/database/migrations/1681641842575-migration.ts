import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration1681641842575 implements MigrationInterface {
    name = 'Migration1681641842575'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "project" ADD "companyId" integer`);
        await queryRunner.query(`ALTER TABLE "project" ADD CONSTRAINT "FK_17c18aa92afa5fa328e9e181fe8" FOREIGN KEY ("companyId") REFERENCES "company"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "project" DROP CONSTRAINT "FK_17c18aa92afa5fa328e9e181fe8"`);
        await queryRunner.query(`ALTER TABLE "project" DROP COLUMN "companyId"`);
    }

}
