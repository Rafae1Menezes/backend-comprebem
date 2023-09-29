import { ICatalogRepository } from '../../../../modules/catalogs/repositories/ICatalogRepository';
import { AppDataSource } from '../connection';
import { Catalog } from '../entities/Catalog';
import { Category } from '../entities/Category';
import { Product } from '../entities/Product';

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
      .innerJoinAndSelect('product.owner', 'owner') // Remova o ponto após 'owner'
      .innerJoinAndSelect('owner.user', 'user')
      .where('catalog.start_date <= :currentDate', { currentDate })
      .andWhere('catalog.end_date >= :currentDate', { currentDate })
      .andWhere('catalog.is_active = true')
      .getMany();

    console.log(catalogs[0].products[0]);

    const products = catalogs.map((c) => c.products).flat();

    const groupedCategories: Category[] = products.reduce(
      (categories: Category[], product: Product) => {
        const existingCategory = categories.find(
          (category) => category.name === product.category,
        );

        if (existingCategory) {
          existingCategory.products.push(product);
        } else {
          const newCategory: Category = {
            name: product.category,
            products: [product],
          };
          categories.push(newCategory);
        }

        return categories;
      },
      [],
    );

    return groupedCategories;
  }
}

export { CatalogRepository };
