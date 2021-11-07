import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm/index';

@Entity('brand')
export class BrandEntity {
  @PrimaryGeneratedColumn({ name: 'id', type: 'int' })
  id: number;

  @Column({ length: 50, name: 'name', type: 'varchar', nullable: false })
  name: string;
}