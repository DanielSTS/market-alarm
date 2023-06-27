import UserRepository from "../domain/repositories/user-repository";
import User from "../domain/entities/user";
import Email from "../domain/entities/email";

export default class UserRepositoryInMemory implements UserRepository {
    private users: User[] = []

    async save(user: User): Promise<void> {
        this.users.push(user);
    }

    async list(): Promise<User[]> {
        return this.users;
    }

    async getByEmail(email: Email): Promise<User | undefined> {
        return this.users.find((user) => user.email.isEqual(email));
    }
}