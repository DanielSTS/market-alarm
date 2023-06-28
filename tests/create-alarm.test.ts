import CreateAlarm from '../src/application/use-cases/create-alarm';
import CreateUser from '../src/application/use-cases/create-user';
import Email from '../src/domain/entities/email';
import AlarmRepositoryInMemory from '../src/infra/alarm-repository-in-memory';
import UserRepositoryInMemory from '../src/infra/user-repository-in-memory';

test("Criação de alarme de mercado quando usuário existe", async function () {
    const alarmRepository = new AlarmRepositoryInMemory();
    const userRepository = new UserRepositoryInMemory();
    const user = {
        name: "Daniel",
        email: new Email("daniel@email.com"),
        phone: "888888888",
        cpf: "111.111.111-11",
        password: "senha123"
    };
    await userRepository.save(user);
    const createAlarm = new CreateAlarm(alarmRepository, userRepository);
    await createAlarm.execute({ email: user.email.address, asset: 'btc', price: 1200 });
    const alarms = await alarmRepository.list(user.email.address);
    expect(alarms).toHaveLength(1);
})

test("Criação de alarme de mercado quando usuário não existe", async function () {
    const alarmRepository = new AlarmRepositoryInMemory();
    const userRepository = new UserRepositoryInMemory();
    const createAlarm = new CreateAlarm(alarmRepository, userRepository);
    expect(async () => await createAlarm.execute({ email: "daniel@email.com", asset: 'btc', price: 1200 }))
        .rejects.toThrow('User not found');
})