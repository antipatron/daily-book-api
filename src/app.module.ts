import { Logger, Module } from '@nestjs/common';
import configuration from '../config/configuration';
import { ScheduleModule } from '@nestjs/schedule';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HttpModule } from '@nestjs/axios';
import { BrandService } from './modules/service/brand.service';
import { BrandFacadeService } from './modules/facade/brand.facade.service';
import { BrandEntity } from './modules/entity/brand.entity';
import { BrandRepository } from './modules/repository/brand.repository';
import { CompanyEntity } from './modules/entity/company.entity';
import { IvaEntity } from './modules/entity/iva.entity';
import { PermissionEntity } from './modules/entity/permission.entity';
import { ProductEntity } from './modules/entity/product.entity';
import { ProviderEntity } from './modules/entity/provider.entity';
import { ProviderProductsEntity } from './modules/entity/provider-products.entity';
import { RoleEntity } from './modules/entity/role.entity';
import { RolePermissionEntity } from './modules/entity/role-permission.entity';
import { UserEntity } from './modules/entity/user.entity';
import { CompanyRepository } from './modules/repository/company.repository';
import { IvaRepository } from './modules/repository/iva.repository';
import { PermissionRepository } from './modules/repository/permission.repository';
import { ProductRepository } from './modules/repository/product.repository';
import { ProviderRepository } from './modules/repository/provider.repository';
import { ProviderProductsRepository } from './modules/repository/provider-products.repository';
import { RoleRepository } from './modules/repository/role.repository';
import { RolePermissionRepository } from './modules/repository/role-permission.repository';
import { UserRepository } from './modules/repository/user.repository';
import { CompanyService } from './modules/service/company.service';
import { IvaService } from './modules/service/iva.service';
import { PermissionService } from './modules/service/permission.service';
import { ProductService } from './modules/service/product.service';
import { ProviderService } from './modules/service/provider.service';
import { ProviderProductsService } from './modules/service/provider-products.service';
import { RoleService } from './modules/service/role.service';
import { RolePermissionService } from './modules/service/role-permission.service';
import { UserService } from './modules/service/user.service';
import { CompanyFacadeService } from './modules/facade/company.facade.service';
import { IvaFacadeService } from './modules/facade/iva.facade.service';
import { PermissionFacadeService } from './modules/facade/permission.facade.service';
import { ProductFacadeService } from './modules/facade/product.facade.service';
import { ProviderFacadeService } from './modules/facade/provider.facade.service';
import { ProviderProductsFacadeService } from './modules/facade/provider-products.facade.service';
import { RoleFacadeService } from './modules/facade/role.facade.service';
import { RolePermissionFacadeService } from './modules/facade/role-permission.facade.service';
import { UserFacadeService } from './modules/facade/user.facade.service';
import { BrandController } from './modules/controller/brand.controller';
import { CompanyController } from './modules/controller/company.controller';
import { IvaController } from './modules/controller/iva.controller';
import { ProductController } from './modules/controller/product.controller';
import { ProviderController } from './modules/controller/provider.controller';
import { UserController } from './modules/controller/user.controller';

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
        BrandEntity, CompanyEntity, IvaEntity, PermissionEntity, ProductEntity, ProviderEntity, ProviderProductsEntity,
        RoleEntity, RolePermissionEntity, UserEntity
      ],
      synchronize: false,
    }),
    TypeOrmModule.forFeature([
      BrandEntity, BrandRepository,
      CompanyEntity, CompanyRepository,
      IvaEntity, IvaRepository,
      PermissionEntity, PermissionRepository,
      ProductEntity, ProductRepository,
      ProviderEntity, ProviderRepository,
      ProviderProductsEntity, ProviderProductsRepository,
      RoleEntity, RoleRepository,
      RolePermissionEntity, RolePermissionRepository,
      UserEntity, UserRepository
    ])
  ],
  controllers: [BrandController, CompanyController, IvaController, ProductController, ProviderController, UserController],
  providers: [
    BrandService, BrandFacadeService,
    CompanyService, CompanyFacadeService,
    IvaService, IvaFacadeService,
    PermissionService, PermissionFacadeService,
    ProductService, ProductFacadeService,
    ProviderService, ProviderFacadeService,
    ProviderProductsService, ProviderProductsFacadeService,
    RoleService, RoleFacadeService,
    RolePermissionService, RolePermissionFacadeService,
    UserService, UserFacadeService,
    Logger
  ],
})
export class AppModule {}
