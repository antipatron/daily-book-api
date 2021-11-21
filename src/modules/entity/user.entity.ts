import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm/index';
import { CompanyEntity } from './company.entity';
import { RoleEntity } from './role.entity';

@Entity('user')
export class UserEntity {
  @PrimaryGeneratedColumn({ name: 'id', type: 'int' })
  id: number;

  @Column({ length: 150, name: 'email', type: 'varchar', nullable: false })
  email: string;

  @Column({ length: 100, name: 'first_name', type: 'varchar', nullable: false })
  firstName: string;

  @Column({ length: 100, name: 'last_name', type: 'varchar', nullable: false })
  lastName: string;

  @Column({ name: 'password', type: 'text', nullable: false })
  password: string;

  @Column({name: 'role_id',  nullable: false})
  roleId: number;

  @ManyToOne(() => RoleEntity, entity => entity.id, {lazy: true, nullable: false})
  @JoinColumn({name: 'role_id'})
  role: RoleEntity;

  @Column({name: 'company_id',  nullable: true})
  companyId: number;

  @ManyToOne(() => CompanyEntity, entity => entity.id, {lazy: true, nullable: true})
  @JoinColumn({name: 'company_id'})
  company: CompanyEntity;
}