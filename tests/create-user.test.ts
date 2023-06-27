import CreateUser from "../src/application/use-cases/create-user";
import UserRepositoryInMemory from "../src/infra/user-repository-in-memory";

test("Deve criar um usuário", async function () {
    const userRepository = new UserRepositoryInMemory();
    const createUser = new CreateUser(userRepository);
    await createUser.execute({
        name: "Daniel",
        email: "daniel@email.com",
        phone: "888888888",
        cpf: "111.111.111-11",
        password: "senha123"
    });
    const output = await userRepository.list();
    expect(output).toHaveLength(1);
})