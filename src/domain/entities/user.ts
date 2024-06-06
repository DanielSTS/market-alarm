import BcryptPassword from './bcrypt-password';
import Email from './email';

export default class User {
  private constructor(
    private readonly name: string,
    readonly email: Email,
    private readonly password: BcryptPassword
  ) {}

  static async create(name: string, email: string, password: string) {
    return new User(
      name,
      new Email(email),
      await BcryptPassword.create(password)
    );
  }

  validatePassword(password: string) {
    return this.password.validate(password);
  }
}
