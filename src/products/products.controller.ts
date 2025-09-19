import { Body, Controller, Get, Post } from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductRequest } from '@repo/types';

@Controller('products')
export class ProductsController {
  constructor(private readonly productService: ProductsService) {}

  @Post()
  createProduct(@Body() createProductRequest: CreateProductRequest) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return this.productService.createProduct(createProductRequest);
  }

  @Get()
  getProducts() {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return this.productService.getProducts();
  }
}
