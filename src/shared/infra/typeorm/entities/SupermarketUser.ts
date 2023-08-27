import { Column, Entity, JoinColumn, OneToMany, OneToOne } from 'typeorm';

import { Catalog } from './Catalog';
import { Product } from './Product';
import { User } from './User';

@Entity('SupermarketUser', { schema: 'comprebem_db' })
export class SupermarketUser {
  @Column('int', { primary: true, name: 'user_id' })
  userId: number;

  @OneToMany(() => Catalog, (catalog) => catalog.creatorUser)
  catalogs: Catalog[];

  @OneToMany(() => Product, (product) => product.creatorUser)
  products: Product[];

  @OneToOne(() => User, (user) => user.supermarketUser, {
    onDelete: 'NO ACTION',
    onUpdate: 'NO ACTION',
  })
  @JoinColumn([{ name: 'user_id', referencedColumnName: 'id' }])
  user: User;
}
