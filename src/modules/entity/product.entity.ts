import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm/index';
import { BrandEntity } from './brand.entity';
import { IvaEntity } from './iva.entity';
import { CompanyEntity } from './company.entity';

@Entity('product')
export class ProductEntity {
  @PrimaryGeneratedColumn({ name: 'id', type: 'int' })
  id: number;

  @Column({ length: 20, name: 'code', type: 'varchar', nullable: true })
  code: string;

  @Column({ length: 100, name: 'name', type: 'varchar', nullable: false })
  name: string;

  @Column({ length: 100, name: 'description', type: 'varchar', nullable: true })
  description: string;

  @Column({name: 'brand_id',  nullable: true})
  brandId: number;

  @ManyToOne(() => BrandEntity, entity => entity.id, {lazy: true, nullable: true})
  @JoinColumn({name: 'brand_id'})
  brand: BrandEntity;

  @Column({name: 'iva_id',  nullable: true})
  ivaId: number;

  @ManyToOne(() => IvaEntity, entity => entity.id, {lazy: true, nullable: true})
  @JoinColumn({name: 'iva_id'})
  iva: IvaEntity;

  @Column({name: 'company_id',  nullable: false})
  companyId: number;

  @ManyToOne(() => CompanyEntity, entity => entity.id, {lazy: true, nullable: false})
  @JoinColumn({name: 'company_id'})
  company: CompanyEntity;
}