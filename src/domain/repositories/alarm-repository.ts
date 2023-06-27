import Alarm from "../entities/alarm";

export default interface AlarmRepository {
    save(alarm: Alarm): Promise<void>;
    list(): Promise<Alarm[]>;
}