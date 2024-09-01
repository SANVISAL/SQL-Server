import User from "@AUTH/database/entities/user-entity";
import { UserService } from "@AUTH/service/user-service";
import { Body } from "tsoa";

export class UserController {
  private user_Service: UserService;
  constructor() {
    this.user_Service = new UserService();
  }
  public async createUser(@Body() userDetails: User) {
    try {
      const user = await this.user_Service.createUser(userDetails);
      return user;
    } catch (error) {}
  }
}
