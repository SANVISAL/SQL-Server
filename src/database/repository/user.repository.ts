import { User } from "../entities/user-entity";
export class UseRepository {
  constructor() {}
  public async createUser(userDetail: any) {
    try {
      const user = await User.create(userDetail);
      // const newUser = await save(user)

      return user;
    } catch (error) {
      throw error;
    }
  }
}
