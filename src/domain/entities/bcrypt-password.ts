import { compare, hash } from 'bcrypt';

export default class BcryptPassword {

    private constructor(readonly value: string, readonly salt: string) {
    }

    static async create(password: string): Promise<BcryptPassword> {
        const salt = 10;
        const value = await hash(password, salt);
        return new BcryptPassword(value, String(salt));
    }

    validate(password: string) {
        return compare(password, this.value);
    }
}