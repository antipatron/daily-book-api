import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm/index';
import { PermissionEntity } from './permission.entity';
import { RoleEntity } from './role.entity';

@Entity('role_permission')
export class RolePermissionEntity {
  @PrimaryGeneratedColumn({ name: 'id', type: 'int' })
  id: number;

  @Column({name: 'permission_id',  nullable: false})
  permissionId: number;

  @ManyToOne(() => PermissionEntity, entity => entity.id, {lazy: true, nullable: false})
  @JoinColumn({name: 'permission_id'})
  permission: PermissionEntity;

  @Column({name: 'role_id',  nullable: false})
  roleId: number;

  @ManyToOne(() => RoleEntity, entity => entity.id, {lazy: true, nullable: false})
  @JoinColumn({name: 'role_id'})
  role: RoleEntity;
}