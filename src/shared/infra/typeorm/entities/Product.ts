import { Column, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

import { SupermarketUser } from './SupermarketUser';

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

  @ManyToOne(() => SupermarketUser)
  @JoinColumn({ name: 'creator_user_id' })
  creator_user: SupermarketUser;
}
