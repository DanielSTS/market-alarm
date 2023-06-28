import TokenGenerator from "../../domain/entities/token-generator";
import UserRepository from "../../domain/repositories/user-repository";

export default class Login {
    constructor(private readonly userRepository: UserRepository) { }

    async execute(input: Input): Promise<Output> {
        const user = await this.userRepository.getByEmail(input.email);
        if (!user) {
            throw new Error("User not found.");
        }
        if (await user.validatePassword(input.password)) {
            const tokenGenerator = new TokenGenerator("secret");
            return {
                token: tokenGenerator.sign(user, new Date())
            };
        } else {
            throw new Error("Invalid password.");
        }
    }

}

type Input = {
    email: string,
    password: string;
}

type Output = {
    token: string;
}