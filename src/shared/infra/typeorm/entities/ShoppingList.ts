import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { ConsumerUser } from './ConsumerUser';
import { Product } from './Product';

@Entity('shoppinglist')
export class ShoppingList {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  owner_id: number;

  @ManyToMany(() => Product)
  @JoinTable({ name: 'shoppinglist_product' })
  products: Product[];

  @ManyToMany(() => ConsumerUser)
  @JoinTable({ name: 'shoppinglist_shared' })
  consumer_users: ConsumerUser[];
}
