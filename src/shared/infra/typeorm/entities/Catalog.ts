import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { Product } from './Product';
import { SupermarketUser } from './SupermarketUser';

@Entity('catalog')
export class Catalog {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  start_date: Date;

  @Column()
  end_date: Date;

  @Column()
  is_active: boolean;

  @ManyToOne(() => SupermarketUser)
  @JoinColumn({ name: 'owner_id' })
  owner: SupermarketUser;

  @ManyToMany(() => Product)
  @JoinTable({ name: 'catalog_product' })
  products: Product[];
}
