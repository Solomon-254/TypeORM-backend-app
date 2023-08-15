import { Logger } from "@nestjs/common"
import { MigrationInterface, QueryRunner } from "typeorm"

export class  $npmConfigName1692107477968 implements MigrationInterface {
  private readonly logger= new Logger($npmConfigName1692107477968.name)
    public async up(queryRunner: QueryRunner): Promise<void> {
        this.logger.log('Up')
       
    } //called to execute migration

    public async down( ): Promise<void> {
        this.logger.log('Down')
    } //called to revert migration

}
