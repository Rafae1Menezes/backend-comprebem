import { IProductRepository } from '@modules/products/repositories/IProductRepository';

import { AppDataSource } from '../connection';
import { Product } from '../entities/Product';

class ProductRepository implements IProductRepository {
  async findOne(id: number): Promise<Product> {
    const product = AppDataSource.getRepository(Product).findOne({
      where: {
        id,
      },
    });

    return product;
  }
}

export { ProductRepository };
