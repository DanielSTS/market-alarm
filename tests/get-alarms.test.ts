import GetAlarms from "../src/application/use-cases/get-alarms";
import Alarm from "../src/domain/entities/alarm";
import AlarmRepositoryInMemory from "../src/infra/database/alarm-repository-in-memory";

test('Deve retornar uma lista vazia quando não houver alarmes', async () => {
    const alarmRepository = new AlarmRepositoryInMemory();
    const getAlarms = new GetAlarms(alarmRepository);
    const alarms: Alarm[] = await getAlarms.execute({ email: "daniel@email.com" });
    expect(alarms).toHaveLength(0);
});

test('deve retornar a lista de alarmes existentes', async () => {
    const alarmRepository = new AlarmRepositoryInMemory();
    const email = "daniel@email.com";
    const alarm1 = new Alarm(email, "btc", 15000);
    const alarm2 = new Alarm(email, "xrp", 5000);
    await alarmRepository.save(alarm1);
    await alarmRepository.save(alarm2);

    const getAlarms = new GetAlarms(alarmRepository);
    const output: Alarm[] = await getAlarms.execute({ email });

    expect(output).toHaveLength(2);
    expect(output).toContainEqual(alarm1);
    expect(output).toContainEqual(alarm2);
});

