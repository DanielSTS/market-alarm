import Alarm from "../../domain/entities/alarm";
import Email from "../../domain/entities/email";
import AlarmRepository from "../../domain/repositories/alarm-repository";
import UserRepository from "../../domain/repositories/user-repository";

export default class CreateAlarm {
    constructor(private readonly alarmRepository: AlarmRepository, private readonly userRepository: UserRepository) { }

    async execute(input: Input) {
        const user = await this.userRepository.getByEmail(input.email);
        if (!user) {
            throw new Error('User not found');
        }
        const alarm = new Alarm(input.email, input.asset, input.price);
        await this.alarmRepository.save(alarm);
    }
}

type Input = {
    email: string;
    asset: string;
    price: number
}