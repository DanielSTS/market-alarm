import Email from "../../domain/entities/email";
import User from "../../domain/entities/user";
import UserRepository from "../../domain/repositories/user-repository"

export default class CreateUser {
    constructor(private readonly userRepository: UserRepository) { }

    async execute(input: Input) {
        await this.userRepository.save(new User(input.name, new Email(input.email), input.phone, input.cpf, input.password));
    }
}

type Input = {
    name: string,
    email: string,
    phone: string,
    cpf: string,
    password: string
}