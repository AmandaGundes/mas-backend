import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateCourseUnits1619904095309 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "course_units",
                columns: [
                    {
                        name: "id",
                        type: "varchar"
                    },
                    {
                        name: "name",
                        type: "varchar"
                    },
                    {
                        name: "description",
                        type: "varchar"
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()"
                    }
                ]
            })
        );
    };

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("course_units");
    }

}
