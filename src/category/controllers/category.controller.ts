import { Request, Response } from 'express';
import { CategoryService } from '../services/category.service';

export class CategoryController {
  constructor(private readonly categoryService: CategoryService = new CategoryService()) {}

  async getCategories(req: Request, res: Response) {
    try {
      const data = await this.categoryService.findAllCategories();
      res.status(200).json(data);
    } catch (error) {
      console.error(error);
    }
  }

  async getCategoryById(req: Request, res: Response) {
    try {
      const data = await this.categoryService.findCategoryById(req.params.id);
      res.status(200).json(data);
    } catch (error) {
      console.error(error);
    }
  }

  async createCategory(req: Request, res: Response) {
    try {
      const data = await this.categoryService.createCategory(req.body);
      res.status(200).json(data);
    } catch (error) {
      console.error(error);
    }
  }

  async updateCategory(req: Request, res: Response) {
    try {
      const data = await this.categoryService.updateCategory(req.params.id, req.body);
      res.status(200).json(data);
    } catch (error) {
      console.error(error);
    }
  }

  async deleteCategory(req: Request, res: Response) {
    try {
      const data = await this.categoryService.deleteCategory(req.params.id);
      res.status(200).json(data);
    } catch (error) {
      console.error(error);
    }
  }
}
