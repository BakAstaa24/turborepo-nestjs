import { Injectable } from '@nestjs/common';
import { CreateProductRequest, Product } from '@repo/types';

@Injectable()
export class ProductsService {
  private readonly products: Product[] = [];

  createProduct(createProductRequest: CreateProductRequest) {
    const product: Product = {
      ...createProductRequest,
      id: Math.random().toString(36).substring(7),
    };
    this.products.push(product);
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return product;
  }

  getProducts() {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return this.products;
  }
}
