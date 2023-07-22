import { MigrationInterface, QueryRunner } from 'typeorm';

export class addFields1689985239230 implements MigrationInterface {
  name = 'addFields1689985239230';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "brand" ADD "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP`,
    );
    await queryRunner.query(
      `ALTER TABLE "brand" ADD "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP`,
    );
    await queryRunner.query(
      `ALTER TABLE "category" ADD "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP`,
    );
    await queryRunner.query(
      `ALTER TABLE "category" ADD "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP`,
    );
    await queryRunner.query(
      `ALTER TABLE "product" ADD "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP`,
    );
    await queryRunner.query(
      `ALTER TABLE "product" ADD "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP`,
    );
    await queryRunner.query(
      `ALTER TABLE "customer" ADD "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP`,
    );
    await queryRunner.query(
      `ALTER TABLE "customer" ADD "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP`,
    );
    await queryRunner.query(
      `ALTER TABLE "user" ADD "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP`,
    );
    await queryRunner.query(
      `ALTER TABLE "user" ADD "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "updatedAt"`);
    await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "createdAt"`);
    await queryRunner.query(`ALTER TABLE "customer" DROP COLUMN "updatedAt"`);
    await queryRunner.query(`ALTER TABLE "customer" DROP COLUMN "createdAt"`);
    await queryRunner.query(`ALTER TABLE "product" DROP COLUMN "updatedAt"`);
    await queryRunner.query(`ALTER TABLE "product" DROP COLUMN "createdAt"`);
    await queryRunner.query(`ALTER TABLE "category" DROP COLUMN "updatedAt"`);
    await queryRunner.query(`ALTER TABLE "category" DROP COLUMN "createdAt"`);
    await queryRunner.query(`ALTER TABLE "brand" DROP COLUMN "updatedAt"`);
    await queryRunner.query(`ALTER TABLE "brand" DROP COLUMN "createdAt"`);
  }
}
