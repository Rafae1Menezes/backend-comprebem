import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { SupermarketUser } from './SupermarketUser';

@Entity('product')
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column('decimal', { precision: 10, scale: 2 })
  price: number;

  @Column()
  description: string;

  @Column()
  category: string;

  @Column()
  photo: string;

  @ManyToOne(() => SupermarketUser)
  @JoinColumn({ name: 'owner_id' })
  owner: SupermarketUser;
}
