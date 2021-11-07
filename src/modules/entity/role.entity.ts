import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm/index';

@Entity('role')
export class RoleEntity {
  @PrimaryGeneratedColumn({ name: 'id', type: 'int' })
  id: number;

  @Column({ length: 100, name: 'name', type: 'varchar', nullable: false })
  name: string;

  @Column({ length: 100, name: 'description', type: 'varchar', nullable: false })
  description: string;
}