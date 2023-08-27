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

@Entity()
export class ShoppingList {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToOne(() => ConsumerUser)
  @JoinColumn({ name: 'consumer_user_id' })
  consumer_user: ConsumerUser;

  @ManyToMany(() => Product)
  @JoinTable({ name: 'ShoppingListProduct' })
  products: Product[];

  @ManyToMany(() => ConsumerUser)
  @JoinTable({ name: 'SharedList' })
  shared_with: ConsumerUser[];
}
