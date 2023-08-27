import { Column, Entity, OneToOne } from 'typeorm';

import { ConsumerUser } from './ConsumerUser';
import { SupermarketUser } from './SupermarketUser';

@Entity('User', { schema: 'comprebem_db' })
export class User {
  @Column('int', { primary: true, name: 'id' })
  id: number;

  @Column('varchar', { name: 'name', nullable: true, length: 255 })
  name: string | null;

  @Column('varchar', { name: 'email', nullable: true, length: 255 })
  email: string | null;

  @Column('varchar', { name: 'city', nullable: true, length: 255 })
  city: string | null;

  @Column('varchar', { name: 'password', nullable: true, length: 255 })
  password: string | null;

  @OneToOne(() => ConsumerUser, (consumerUser) => consumerUser.userId)
  consumerUser: ConsumerUser;

  @OneToOne(() => SupermarketUser, (supermarketUser) => supermarketUser.user)
  supermarketUser: SupermarketUser;
}
