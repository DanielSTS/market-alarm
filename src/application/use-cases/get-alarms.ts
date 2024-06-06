import Alarm from '../../domain/entities/alarm';
import AlarmRepository from '../../domain/repositories/alarm-repository';

export default class GetAlarms {
  constructor(private readonly alarmRepository: AlarmRepository) {}

  async execute(input: Input): Promise<Alarm[]> {
    return this.alarmRepository.list(input.email);
  }
}

type Input = {
  email: string;
};
