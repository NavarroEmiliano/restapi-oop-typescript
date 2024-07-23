import { BaseRouter } from '../shared/router/index';
import { ProductController } from './controller/product.controller';

export class UserRouter extends BaseRouter<ProductController> {
  constructor() {
    super(ProductController);
  }

  routes(): void {
    this.router.get('/products', (req, res) => this.controller.getProducts(req, res));
    this.router.get('/products/:id', (req, res) => this.controller.getProductById(req, res));
    this.router.post('/products', (req, res) => this.controller.createProduct(req, res));
    this.router.put('/products/:id', (req, res) => this.controller.updateProduct(req, res));
    this.router.delete('/products/:id', (req, res) => this.controller.deleteProduct(req, res));
  }
}