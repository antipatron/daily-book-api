import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm/index';
import { CompanyEntity } from './company.entity';

@Entity('provider')
export class ProviderEntity {
  @PrimaryGeneratedColumn({ name: 'id', type: 'int' })
  id: number;

  @Column({ length: 20, name: 'identifier', type: 'varchar', nullable: true })
  identifier: string;

  @Column({ length: 100, name: 'provider_name', type: 'varchar', nullable: false })
  providerName: string;

  @Column({ length: 100, name: 'seller_name', type: 'varchar', nullable: false })
  sellerName: string;

  @Column({ length: 100, name: 'address', type: 'varchar', nullable: true })
  address: string;

  @Column({ length: 150, name: 'email', type: 'varchar', nullable: true })
  email: string;

  @Column({ length: 15, name: 'phone_1', type: 'varchar', nullable: true })
  phone1: string;

  @Column({ length: 15, name: 'phone_2', type: 'varchar', nullable: true })
  phone2: string;

  @Column({ length: 15, name: 'phone_3', type: 'varchar', nullable: true })
  phone3: string;

  @Column({name: 'company_id',  nullable: false})
  companyId: number;

  @ManyToOne(() => CompanyEntity, entity => entity.id, {lazy: true, nullable: false})
  @JoinColumn({name: 'company_id'})
  company: CompanyEntity;
}