import AlarmRepository from "../../domain/repositories/alarm-repository";
import RepositoryFactory from "../../domain/repositories/repository-factory";
import UserRepository from "../../domain/repositories/user-repository";
import AlarmRepositoryInMemory from "./alarm-repository-in-memory";
import UserRepositoryInMemory from "./user-repository-in-memory";

export default class RepositoryFactoryInMemory implements RepositoryFactory {

    createUserRepository(): UserRepository {
        return new UserRepositoryInMemory();
    }

    createAlarmRepository(): AlarmRepository {
        return new AlarmRepositoryInMemory();
    }
}