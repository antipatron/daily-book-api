import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm/index';

@Entity('company')
export class CompanyEntity {
  @PrimaryGeneratedColumn({ name: 'id', type: 'int' })
  id: number;

  @Column({ length: 100, name: 'name', type: 'varchar', nullable: false })
  name: string;

  @Column({ length: 20, name: 'identifier', type: 'varchar', nullable: true })
  identifier: string;

  @Column({ length: 100, name: 'description', type: 'varchar', nullable: true })
  description: string;
}