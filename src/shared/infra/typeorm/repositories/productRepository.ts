import { IProductRepository } from '@modules/products/repositories/IProductRepository';

import { AppDataSource } from '../connection';
import { Product } from '../entities/Product';

class ProductRepository implements IProductRepository {
  private repository;

  constructor() {
    this.repository = AppDataSource.getRepository(Product);
  }

  async findOne(id: number): Promise<Product> {
    const product = this.repository.findOne({
      where: {
        id,
      },
    });

    return product;
  }
}

export { ProductRepository };
