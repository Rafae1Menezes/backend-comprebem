import { Product } from '@shared/infra/typeorm/entities/Product';

interface IProductRepository {
  findOne(id: number): Promise<Product>;
}

export { IProductRepository };
