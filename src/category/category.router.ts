import { BaseRouter } from '../shared/router/index';
import { CategoryController } from './controllers/category.controller';

export class CategoryRouter extends BaseRouter<CategoryController> {
  constructor() {
    super(CategoryController);
  }

  routes(): void {
    this.router.get('/categories', (req, res) => this.controller.getCategories(req, res));
    this.router.get('/categories/:id', (req, res) => this.controller.getCategoryById(req, res));
    this.router.post('/categories', (req, res) => this.controller.createCategory(req, res));
    this.router.put('/categories/:id', (req, res) => this.controller.updateCategory(req, res));
    this.router.delete('/categories/:id', (req, res) => this.controller.deleteCategory(req, res));
  }
}
