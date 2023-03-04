import { MigrationInterface, QueryRunner } from "typeorm";

export class migrations1677964975879 implements MigrationInterface {
    name = 'migrations1677964975879';

    public async up(queryRunner: QueryRunner): Promise<void> {
    	// eslint-disable-next-line max-len
    	await queryRunner.query(`CREATE TABLE "location" ("id" SERIAL NOT NULL, "name" text NOT NULL, "latitude" text NOT NULL, "longitude" text NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_876d7bdba03c72251ec4c2dc827" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    	await queryRunner.query(`DROP TABLE "location"`);
    }

}
