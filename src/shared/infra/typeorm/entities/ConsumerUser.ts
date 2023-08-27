import {
  Column,
  Entity,
  JoinColumn,
  ManyToMany,
  OneToMany,
  OneToOne,
} from 'typeorm';

import { Friendship } from './Friendship';
import { FriendshipRequest } from './FriendshipRequest';
import { ShoppingList } from './ShoppingList';
import { User } from './User';

@Entity('ConsumerUser', { schema: 'comprebem_db' })
export class ConsumerUser {
  @Column('int', { primary: true, name: 'user_id' })
  userId: number;

  @OneToOne(() => User, (user) => user.consumerUser, {
    onDelete: 'NO ACTION',
    onUpdate: 'NO ACTION',
  })
  @JoinColumn([{ name: 'user_id', referencedColumnName: 'id' }])
  userId: User;

  @OneToMany(() => Friendship, (friendship) => friendship.userId)
  friendships: Friendship[];

  @OneToMany(() => Friendship, (friendship) => friendship.userId3)
  friendships2: Friendship[];

  @OneToMany(
    () => FriendshipRequest,
    (friendshipRequest) => friendshipRequest.senderUser,
  )
  friendshipRequests: FriendshipRequest[];

  @OneToMany(
    () => FriendshipRequest,
    (friendshipRequest) => friendshipRequest.receiverUser,
  )
  friendshipRequests2: FriendshipRequest[];

  @ManyToMany(() => ShoppingList, (shoppingList) => shoppingList.consumerUsers)
  shoppingLists: ShoppingList[];

  @OneToMany(() => ShoppingList, (shoppingList) => shoppingList.consumerUser)
  shoppingLists2: ShoppingList[];
}
