import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';

import { ConsumerUser } from './ConsumerUser';

@Index('user_id2', ['userId2'], {})
@Entity('Friendship', { schema: 'comprebem_db' })
export class Friendship {
  @Column('int', { primary: true, name: 'user_id1' })
  userId1: number;

  @Column('int', { primary: true, name: 'user_id2' })
  userId2: number;

  @Column('varchar', { name: 'status', nullable: true, length: 255 })
  status: string | null;

  @ManyToOne(() => ConsumerUser, (consumerUser) => consumerUser.friendships, {
    onDelete: 'NO ACTION',
    onUpdate: 'NO ACTION',
  })
  @JoinColumn([{ name: 'user_id1', referencedColumnName: 'userId' }])
  userId: ConsumerUser;

  @ManyToOne(() => ConsumerUser, (consumerUser) => consumerUser.friendships2, {
    onDelete: 'NO ACTION',
    onUpdate: 'NO ACTION',
  })
  @JoinColumn([{ name: 'user_id2', referencedColumnName: 'userId' }])
  userId3: ConsumerUser;
}
