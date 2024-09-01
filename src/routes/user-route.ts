import express, { Request, Response, NextFunction } from "express";
import routePath from ".";
import { UserController } from "@AUTH/controller/user-controller";
const route = express.Router();

const userController = new UserController();
route.post(
  routePath.CREATE,
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const response = await userController.createUser(req.body);
      res.status(200).json({
        message: "User created successfully",
        data: response,
      });
    } catch (error) {
      next(error);
    }
  }
);

export default route;