import { Request, Response } from 'express';
import { ProductService } from '../services/product.service';

export class ProductController {
  constructor(private readonly productService: ProductService = new ProductService()) {}

  async getProducts(req: Request, res: Response) {
    try {
      const data = await this.productService.findAllProducts();
      res.status(200).json(data);
    } catch (error) {
      console.error(error);
    }
  }

  async getProductById(req: Request, res: Response) {
    try {
      const data = await this.productService.findProductById(req.params.id);
      res.status(200).json(data);
    } catch (error) {
      console.error(error);
    }
  }

  async createProduct(req: Request, res: Response) {
    try {
      const data = await this.productService.createProduct(req.body);
      res.status(200).json(data);
    } catch (error) {
      console.error(error);
    }
  }

  async updateProduct(req: Request, res: Response) {
    try {
      const data = await this.productService.updateProduct(req.params.id, req.body);
      res.status(200).json(data);
    } catch (error) {
      console.error(error);
    }
  }

  async deleteProduct(req: Request, res: Response) {
    try {
      const data = await this.productService.deleteProduct(req.params.id);
      res.status(200).json(data);
    } catch (error) {
      console.error(error);
    }
  }
}
