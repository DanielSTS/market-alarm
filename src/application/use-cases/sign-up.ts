import User from "../../domain/entities/user";
import UserRepository from "../../domain/repositories/user-repository"

export default class SignUp {
    constructor(private readonly userRepository: UserRepository) { }

    async execute(input: Input) {
        await this.userRepository.save(await User.create(input.name, input.email, input.password));
    }
}

type Input = {
    name: string,
    email: string,
    password: string
}