import { inject, injectable } from 'tsyringe';

import { ICatalogRepository } from '../../catalogs/repositories/ICatalogRepository';

@injectable()
class GetAllActiveProductsUseCase {
  constructor(
    @inject('CatalogRepository')
    private catalogRepository: ICatalogRepository,
  ) {}

  async execute() {
    try {
      const productsWithinActiveCatalogs =
        await this.catalogRepository.getAllActiveProdutcs();

      return productsWithinActiveCatalogs;
    } catch (error) {
      throw new Error(error);
    }
  }
}

export { GetAllActiveProductsUseCase };
