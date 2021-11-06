import { Logger, Module } from '@nestjs/common';
import configuration from '../config/configuration';
import { ScheduleModule } from '@nestjs/schedule';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HttpModule } from '@nestjs/axios';
import { BrandControler } from './modules/controller/brand.controler';
import { BrandService } from './modules/service/brand.service';
import { BrandFacadeService } from './modules/facade/brand.facade.service';
import { BrandEntity } from './modules/entity/brand.entity';
import { BrandRepository } from './modules/repository/brand.repository';

@Module({
  imports: [
    HttpModule,
    ConfigModule.forRoot({
      load: [configuration],
      isGlobal: true,
      validationOptions: {
        allowUnknown: false,
        abortEarly: true,
      },
    }),
    ScheduleModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: configuration().database.host,
      port: configuration().database.port,
      username: configuration().database.username,
      password: configuration().database.password,
      database: configuration().database.dbname,
      entities: [
        BrandEntity
      ],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([BrandEntity, BrandRepository])
  ],
  controllers: [BrandControler],
  providers: [
    BrandService, BrandFacadeService,
    Logger
  ],
})
export class AppModule {}
