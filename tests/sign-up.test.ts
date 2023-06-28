import SignUp from "../src/application/use-cases/sign-up";
import UserRepositoryInMemory from "../src/infra/database/user-repository-in-memory";

test("Deve criar um usuário", async function () {
    const userRepository = new UserRepositoryInMemory();
    const signUp = new SignUp(userRepository);
    await signUp.execute({
        name: "Daniel",
        email: "daniel@email.com",
        password: "senha123"
    });
    const output = await userRepository.list();
    expect(output).toHaveLength(1);
})