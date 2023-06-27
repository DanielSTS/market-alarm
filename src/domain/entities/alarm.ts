export default class Alarm {
    constructor(private readonly email: string,
        private readonly asset: string,
        private readonly price: number) { }
}