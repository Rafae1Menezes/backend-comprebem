import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { ConsumerUser } from './ConsumerUser';

@Entity('friendship_request')
export class FriendshipRequest {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  status: string;

  @ManyToOne(() => ConsumerUser)
  @JoinColumn({ name: 'sender_user_id' })
  sender_user: ConsumerUser;

  @ManyToOne(() => ConsumerUser)
  @JoinColumn({ name: 'receiver_user_id' })
  receiver_user: ConsumerUser;
}
