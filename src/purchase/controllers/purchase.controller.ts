import { Request, Response } from 'express';
import { PurchaseService } from '../services/purchase.service';

export class PurchaseController {
  constructor(private readonly purchaseService: PurchaseService = new PurchaseService()) {}

  async getPurchases(req: Request, res: Response) {
    try {
      const data = await this.purchaseService.findAllPurchases();
      res.status(200).json(data);
    } catch (error) {
      console.error(error);
    }
  }

  async getPurchaseById(req: Request, res: Response) {
    try {
      const data = await this.purchaseService.findPurchaseById(req.params.id);
      res.status(200).json(data);
    } catch (error) {
      console.error(error);
    }
  }

  async createPurchase(req: Request, res: Response) {
    try {
      const data = await this.purchaseService.createPurchase(req.body);
      res.status(200).json(data);
    } catch (error) {
      console.error(error);
    }
  }

  async updatePurchase(req: Request, res: Response) {
    try {
      const data = await this.purchaseService.updatePurchase(req.params.id, req.body);
      res.status(200).json(data);
    } catch (error) {
      console.error(error);
    }
  }

  async deletePurchase(req: Request, res: Response) {
    try {
      const data = await this.purchaseService.deletePurchase(req.params.id);
      res.status(200).json(data);
    } catch (error) {
      console.error(error);
    }
  }
}
