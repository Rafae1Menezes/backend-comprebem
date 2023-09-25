import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
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

  @ManyToOne(() => ConsumerUser)
  @JoinColumn({ name: 'user_id' })
  owner_id: ConsumerUser;

  @ManyToMany(() => Product)
  @JoinTable({ name: 'shoppinglist_product' })
  products: Product[];

  @ManyToMany(() => ConsumerUser)
  @JoinTable({ name: 'shoppinglist_user' })
  shared_with: ConsumerUser[];
}
