import { UserInput } from '../../../database/models/User';
import { UserRepository } from '../../../database/repositories/UserRepository'

let userRepository!: UserRepository

export class RegisterUseCase {

  constructor(_userRepository: UserRepository) {
    userRepository = _userRepository
  }

  public async execute(payload: UserInput) {
    return await userRepository.store(payload);
  }
}