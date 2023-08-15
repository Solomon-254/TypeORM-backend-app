import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigService } from '@nestjs/config';

@Module({
    imports: [
        TypeOrmModule.forRootAsync({
            useFactory: (configService: ConfigService) => ({
                type: 'mysql',
                host: configService.get('MYSQL_HOST'),
                port:  configService.get('MYSQL_PORT'),
                database: configService.getOrThrow('MYSQL_DATABASE'),
                username: configService.getOrThrow('MYSQL_USERNAME'),
                password:  configService.getOrThrow('MYSQL_PASSWORD'),
                autoLoadEntities: true,
                synchronize: configService.getOrThrow('MYSQL_SYNCHRONIZE')
            }),
            inject: [ConfigService]
        }),
        
    ]
})
export class DatabaseModule {}
