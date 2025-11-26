import userModel from "../models/users";
import { User } from "../io/types";

class UserDAO {
  async create(userData: User) {
    const newUser = new userModel(userData);
    return await newUser.save();
  }

  async getById(id: string) {
    return await userModel.findById(id);
  }

  async getAll() {
    return await userModel.find();
  }
}

export default UserDAO;
