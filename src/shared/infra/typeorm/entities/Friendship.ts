import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { ConsumerUser } from './ConsumerUser';

@Entity()
export class Friendship {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  status: string;

  @OneToOne(() => ConsumerUser)
  @JoinColumn({ name: 'user_id1' })
  user1: ConsumerUser;

  @OneToOne(() => ConsumerUser)
  @JoinColumn({ name: 'user_id2' })
  user2: ConsumerUser;
}
