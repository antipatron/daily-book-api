import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm/index';
import { ProviderEntity } from './provider.entity';
import { ProductEntity } from './product.entity';

@Entity('provider_products')
export class ProviderProductsEntity {
  @PrimaryGeneratedColumn({ name: 'id', type: 'int' })
  id: number;

  @Column({name: 'provider_id',  nullable: false})
  providerId: number;

  @ManyToOne(() => ProviderEntity, entity => entity.id, {lazy: true, nullable: false})
  @JoinColumn({name: 'provider_id'})
  provider: ProviderEntity;

  @Column({name: 'product_id',  nullable: false})
  productId: number;

  @ManyToOne(() => ProductEntity, entity => entity.id, {lazy: true, nullable: false})
  @JoinColumn({name: 'product_id'})
  product: ProductEntity;

  @Column({ name: 'net_price', type: 'double', nullable: true })
  netPrice: number;

  @Column({ name: 'sell_price', type: 'double', nullable: true })
  sellPrice: number;

  @Column({ name: 'timestamp', type: 'timestamp', nullable: false })
  timestamp: Date;
}