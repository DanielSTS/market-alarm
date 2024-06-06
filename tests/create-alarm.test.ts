import CreateAlarm from '../src/application/use-cases/create-alarm';
import User from '../src/domain/entities/user';
import AlarmRepositoryInMemory from '../src/infra/database/alarm-repository-in-memory';
import UserRepositoryInMemory from '../src/infra/database/user-repository-in-memory';

test('Criação de alarme de mercado quando usuário existe', async function () {
  const alarmRepository = new AlarmRepositoryInMemory();
  const userRepository = new UserRepositoryInMemory();
  const user = {
    name: 'Daniel',
    email: 'daniel@email.com',
    password: 'senha123'
  };
  await userRepository.save(
    await User.create(user.name, user.email, user.password)
  );
  const createAlarm = new CreateAlarm(alarmRepository, userRepository);
  await createAlarm.execute({ email: user.email, asset: 'btc', price: 1200 });
  const alarms = await alarmRepository.list(user.email);
  expect(alarms).toHaveLength(1);
});

test('Criação de alarme de mercado quando usuário não existe', async function () {
  const alarmRepository = new AlarmRepositoryInMemory();
  const userRepository = new UserRepositoryInMemory();
  const createAlarm = new CreateAlarm(alarmRepository, userRepository);
  expect(
    async () =>
      await createAlarm.execute({
        email: 'daniel@email.com',
        asset: 'btc',
        price: 1200
      })
  ).rejects.toThrow('User not found.');
});
