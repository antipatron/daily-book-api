import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm/index';

@Entity('iva')
export class IvaEntity {
  @PrimaryGeneratedColumn({ name: 'id', type: 'int' })
  id: number;

  @Column({ name: 'value', type: 'float', nullable: false })
  value: number;
}