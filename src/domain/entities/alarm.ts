export default class Alarm {
  constructor(
    readonly email: string,
    private readonly asset: string,
    private readonly price: number
  ) {}
}
