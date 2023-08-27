import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToMany,
  ManyToOne,
} from 'typeorm';

import { Catalog } from './Catalog';
import { ShoppingList } from './ShoppingList';
import { SupermarketUser } from './SupermarketUser';

@Index('creator_user_id', ['creatorUserId'], {})
@Entity('Product', { schema: 'comprebem_db' })
export class Product {
  @Column('int', { primary: true, name: 'id' })
  id: number;

  @Column('varchar', { name: 'name', nullable: true, length: 255 })
  name: string | null;

  @Column('decimal', { name: 'price', nullable: true, precision: 10, scale: 2 })
  price: string | null;

  @Column('varchar', { name: 'description', nullable: true, length: 255 })
  description: string | null;

  @Column('varchar', { name: 'category', nullable: true, length: 255 })
  category: string | null;

  @Column('int', { name: 'creator_user_id', nullable: true })
  creatorUserId: number | null;

  @ManyToMany(() => Catalog, (catalog) => catalog.products)
  catalogs: Catalog[];

  @ManyToOne(
    () => SupermarketUser,
    (supermarketUser) => supermarketUser.products,
    { onDelete: 'NO ACTION', onUpdate: 'NO ACTION' },
  )
  @JoinColumn([{ name: 'creator_user_id', referencedColumnName: 'userId' }])
  creatorUser: SupermarketUser;

  @ManyToMany(() => ShoppingList, (shoppingList) => shoppingList.products)
  shoppingLists: ShoppingList[];
}
