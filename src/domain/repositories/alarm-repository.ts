import Alarm from "../entities/alarm";
import Email from "../entities/email";

export default interface AlarmRepository {
    save(alarm: Alarm): Promise<void>;
    list(email: string): Promise<Alarm[]>;
}