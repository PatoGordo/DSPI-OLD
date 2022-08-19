import bcrypt from 'bcryptjs'

import User, { UserInput } from "../models/User";

export class UserRepository {
  public async store(payload: UserInput): Promise<User> {
    const user = await User.create({
      ...payload,
      password: bcrypt.hashSync(payload.password, 8)
    })

    return user
  }
}