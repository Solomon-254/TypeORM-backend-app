import { DataSource } from 'typeorm';
import { config } from 'dotenv';
import { ConfigService } from '@nestjs/config';
import { Tag } from 'src/items/entities/tag.entity';
import { Listing } from 'src/items/entities/listing.entities';
import { Item } from 'src/items/entities/item.entity';

config();

const configService = new ConfigService();
export default new DataSource({
  type: 'mysql',
  host: configService.get('MYSQL_HOST'),
  port: configService.get('MYSQL_PORT'),
  database: configService.getOrThrow('MYSQL_DATABASE'),
  username: configService.getOrThrow('MYSQL_USERNAME'),
  password: configService.getOrThrow('MYSQL_PASSWORD'),
  migrations: ['migration/**'],
  entities: [Item, Tag, Listing, Comment]
});
