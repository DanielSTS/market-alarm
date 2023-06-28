import AlarmRepository from "../../domain/repositories/alarm-repository";
import UserRepository from "../../domain/repositories/user-repository";

export default interface RepositoryFactory {
    createUserRepository(): UserRepository;
    createAlarmRepository(): AlarmRepository;
}