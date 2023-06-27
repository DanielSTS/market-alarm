import Email from "./email";

export default class User {
    constructor(readonly name: string,
        readonly email: Email,
        readonly phone: string,
        readonly cpf: string,
        readonly password: string) { }
}