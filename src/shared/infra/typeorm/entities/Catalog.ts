import {
  Column,
  Entity,
  Index,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
} from 'typeorm';

import { Product } from './Product';
import { SupermarketUser } from './SupermarketUser';

@Index('creator_user_id', ['creatorUserId'], {})
@Entity('Catalog', { schema: 'comprebem_db' })
export class Catalog {
  @Column('int', { primary: true, name: 'id' })
  id: number;

  @Column('varchar', { name: 'name', nullable: true, length: 255 })
  name: string | null;

  @Column('varchar', { name: 'description', nullable: true, length: 255 })
  description: string | null;

  @Column('date', { name: 'start_date', nullable: true })
  startDate: string | null;

  @Column('date', { name: 'end_date', nullable: true })
  endDate: string | null;

  @Column('tinyint', { name: 'is_active', nullable: true, width: 1 })
  isActive: boolean | null;

  @Column('int', { name: 'creator_user_id', nullable: true })
  creatorUserId: number | null;

  @ManyToOne(
    () => SupermarketUser,
    (supermarketUser) => supermarketUser.catalogs,
    { onDelete: 'NO ACTION', onUpdate: 'NO ACTION' },
  )
  @JoinColumn([{ name: 'creator_user_id', referencedColumnName: 'userId' }])
  creatorUser: SupermarketUser;

  @ManyToMany(() => Product, (product) => product.catalogs)
  @JoinTable({
    name: 'CatalogProduct',
    joinColumns: [{ name: 'catalog_id', referencedColumnName: 'id' }],
    inverseJoinColumns: [{ name: 'product_id', referencedColumnName: 'id' }],
    schema: 'comprebem_db',
  })
  products: Product[];
}
