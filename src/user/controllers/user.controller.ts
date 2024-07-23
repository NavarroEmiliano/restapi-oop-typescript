import { Request, Response } from 'express';
import { UserService } from '../services/user.service';

export class UserController {
  constructor(private readonly userService: UserService = new UserService()) {}

  async getUsers(req: Request, res: Response) {
    try {
      const data = await this.userService.findAllUsers();
      res.status(200).json(data);
    } catch (error) {
      console.error(error);
    }
  }

  async getUserById(req: Request, res: Response) {
    try {
      const data = await this.userService.findUserById(req.params.id);
      res.status(200).json(data);
    } catch (error) {
      console.error(error);
    }
  }

  async createUser(req: Request, res: Response) {
    try {
      const data = await this.userService.createUser(req.body);
      res.status(200).json(data);
    } catch (error) {
      console.error(error);
    }
  }

  async updateUser(req: Request, res: Response) {
    try {
      const data = await this.userService.updateUser(req.params.id, req.body);
      res.status(200).json(data);
    } catch (error) {
      console.error(error);
    }
  }

  async deleteUser(req: Request, res: Response) {
    try {
      const data = await this.userService.deleteUser(req.params.id);
      res.status(200).json(data);
    } catch (error) {
      console.error(error);
    }
  }
}
