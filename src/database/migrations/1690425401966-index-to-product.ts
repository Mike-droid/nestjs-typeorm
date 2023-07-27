import {MigrationInterface, QueryRunner} from "typeorm";

export class indexToProduct1690425401966 implements MigrationInterface {
    name = 'indexToProduct1690425401966'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`COMMENT ON COLUMN "category"."createdAt" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "category"."updatedAt" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "product"."createdAt" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "product"."updatedAt" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "brand"."createdAt" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "brand"."updatedAt" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "user"."createdAt" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "user"."updatedAt" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "order_item"."createdAt" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "order_item"."updateAt" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "order"."createdAt" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "order"."updateAt" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "customer"."createdAt" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "customer"."updatedAt" IS NULL`);
        await queryRunner.query(`CREATE INDEX "IDX_b3234b06e4d16f52b384dfa4dd" ON "product" ("price") `);
        await queryRunner.query(`CREATE INDEX "IDX_0decfc62b4e4834e2024a9d9c4" ON "product" ("price", "stock") `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP INDEX "IDX_0decfc62b4e4834e2024a9d9c4"`);
        await queryRunner.query(`DROP INDEX "IDX_b3234b06e4d16f52b384dfa4dd"`);
        await queryRunner.query(`COMMENT ON COLUMN "customer"."updatedAt" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "customer"."createdAt" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "order"."updateAt" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "order"."createdAt" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "order_item"."updateAt" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "order_item"."createdAt" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "user"."updatedAt" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "user"."createdAt" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "brand"."updatedAt" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "brand"."createdAt" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "product"."updatedAt" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "product"."createdAt" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "category"."updatedAt" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "category"."createdAt" IS NULL`);
    }

}
