import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration1681675947585 implements MigrationInterface {
    name = 'Migration1681675947585'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "document" ("id" SERIAL NOT NULL, "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "fileName" character varying NOT NULL, "filePath" character varying NOT NULL, "fileType" character varying NOT NULL, "deletedAt" TIMESTAMP, "uploadUserId" integer, "projectId" integer, CONSTRAINT "PK_e57d3357f83f3cdc0acffc3d777" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "document" ADD CONSTRAINT "FK_0cf85a3358caca23410afc2edde" FOREIGN KEY ("uploadUserId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "document" ADD CONSTRAINT "FK_1609339df21e7616eb9ce3dec47" FOREIGN KEY ("projectId") REFERENCES "project"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "document" DROP CONSTRAINT "FK_1609339df21e7616eb9ce3dec47"`);
        await queryRunner.query(`ALTER TABLE "document" DROP CONSTRAINT "FK_0cf85a3358caca23410afc2edde"`);
        await queryRunner.query(`DROP TABLE "document"`);
    }

}
