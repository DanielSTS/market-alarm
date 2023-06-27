import AlarmRepository from "../domain/repositories/alarm-repository";
import Alarm from "../domain/entities/alarm";

export default class AlarmRepositoryInMemory implements AlarmRepository {
    private alarms: Alarm[] = []

    async save(alarm: Alarm): Promise<void> {
        this.alarms.push(alarm);
    }

    async list(): Promise<Alarm[]> {
        return this.alarms;
    }
}