import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';

import { ConsumerUser } from './ConsumerUser';

@Index('receiver_user_id', ['receiverUserId'], {})
@Index('sender_user_id', ['senderUserId'], {})
@Entity('FriendshipRequest', { schema: 'comprebem_db' })
export class FriendshipRequest {
  @Column('int', { primary: true, name: 'id' })
  id: number;

  @Column('int', { name: 'sender_user_id', nullable: true })
  senderUserId: number | null;

  @Column('int', { name: 'receiver_user_id', nullable: true })
  receiverUserId: number | null;

  @Column('varchar', { name: 'status', nullable: true, length: 255 })
  status: string | null;

  @ManyToOne(
    () => ConsumerUser,
    (consumerUser) => consumerUser.friendshipRequests,
    { onDelete: 'NO ACTION', onUpdate: 'NO ACTION' },
  )
  @JoinColumn([{ name: 'sender_user_id', referencedColumnName: 'userId' }])
  senderUser: ConsumerUser;

  @ManyToOne(
    () => ConsumerUser,
    (consumerUser) => consumerUser.friendshipRequests2,
    { onDelete: 'NO ACTION', onUpdate: 'NO ACTION' },
  )
  @JoinColumn([{ name: 'receiver_user_id', referencedColumnName: 'userId' }])
  receiverUser: ConsumerUser;
}
