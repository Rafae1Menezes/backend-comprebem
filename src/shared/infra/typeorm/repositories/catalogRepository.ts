import { ICatalogRepository } from '@modules/catalogs/repositories/ICatalogRepository';

import { AppDataSource } from '../connection';
import { Catalog } from '../entities/Catalog';

class CatalogRepository implements ICatalogRepository {
  private repository;

  constructor() {
    this.repository = AppDataSource.getRepository(Catalog);
  }

  async getAllActiveProdutcs() {
    const currentDate = new Date();

    const catalogs = await this.repository
      .createQueryBuilder('catalog')
      .innerJoinAndSelect('catalog.products', 'product')
      .where('catalog.start_date <= :currentDate', { currentDate })
      .andWhere('catalog.end_date >= :currentDate', { currentDate })
      .andWhere('catalog.is_active = true')
      .orderBy('product.category')
      .getMany();

    const products = catalogs.map((c) => c.products).flat();

    const groupedProducts = {};

    products.forEach((produto) => {
      const categoria = produto.category;
      if (!groupedProducts[categoria]) {
        groupedProducts[categoria] = [];
      }
      groupedProducts[categoria].push(produto);
    });

    return groupedProducts;
  }
}

export { CatalogRepository };
