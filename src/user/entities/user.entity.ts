import { Column, Entity, OneToOne } from 'typeorm';
import { CustomerEntity } from '../../customer/entities/customer.entity';
import { Exclude } from 'class-transformer';
import { BaseEntity } from '../../config/base.entity';

@Entity({ name: 'user' })
export class UserEntity extends BaseEntity {
  @Column()
  name!: string;

  @Column()
  lastname!: string;

  @Column()
  username!: string;

  @Column()
  email!: string;

  @Exclude()
  @Column()
  password!: string;

  @Column()
  city?: string;

  @Column({ nullable: true })
  province!: string;

  @OneToOne(() => CustomerEntity, (customer) => customer.user)
  customer!: CustomerEntity;
}
