import { UseRepository } from "@AUTH/database/repository/user.repository";
import User from "@AUTH/database/entities/user-entity";

export class UserService {
  private userRepository: UseRepository;

  constructor() {
    this.userRepository = new UseRepository();
  }

  public async createUser(userData: User): Promise<User> {
    try {
      const newUser = await this.userRepository.createUser(userData);
      return newUser;
    } catch (error) {
      throw new Error(`Failed to create user: ${error}`);
    }
  }

  // Additional service methods (e.g., getUserById, updateUser, deleteUser) would go here.
}
