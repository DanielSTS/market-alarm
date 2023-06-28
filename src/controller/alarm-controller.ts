import GetAlarms from "../application/use-cases/get-alarms";
import AlarmRepositoryInMemory from "../infra/alarm-repository-in-memory";

export default class AlarmController {
    static getAlarms(params: any, body: any) {
        const alarmRepository = new AlarmRepositoryInMemory();
        const getAlarms = new GetAlarms(alarmRepository);
        return getAlarms.execute({ email: params.email });
    }
}