import {
  Column,
  Entity,
  Index,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
} from 'typeorm';

import { ConsumerUser } from './ConsumerUser';
import { Product } from './Product';

@Index('consumer_user_id', ['consumerUserId'], {})
@Entity('ShoppingList', { schema: 'comprebem_db' })
export class ShoppingList {
  @Column('int', { primary: true, name: 'id' })
  id: number;

  @Column('varchar', { name: 'name', nullable: true, length: 255 })
  name: string | null;

  @Column('int', { name: 'consumer_user_id', nullable: true })
  consumerUserId: number | null;

  @ManyToMany(() => ConsumerUser, (consumerUser) => consumerUser.shoppingLists)
  @JoinTable({
    name: 'SharedList',
    joinColumns: [{ name: 'shopping_list_id', referencedColumnName: 'id' }],
    inverseJoinColumns: [
      { name: 'friend_user_id', referencedColumnName: 'userId' },
    ],
    schema: 'comprebem_db',
  })
  consumerUsers: ConsumerUser[];

  @ManyToOne(
    () => ConsumerUser,
    (consumerUser) => consumerUser.shoppingLists2,
    { onDelete: 'NO ACTION', onUpdate: 'NO ACTION' },
  )
  @JoinColumn([{ name: 'consumer_user_id', referencedColumnName: 'userId' }])
  consumerUser: ConsumerUser;

  @ManyToMany(() => Product, (product) => product.shoppingLists)
  @JoinTable({
    name: 'ShoppingListProduct',
    joinColumns: [{ name: 'shopping_list_id', referencedColumnName: 'id' }],
    inverseJoinColumns: [{ name: 'product_id', referencedColumnName: 'id' }],
    schema: 'comprebem_db',
  })
  products: Product[];
}
