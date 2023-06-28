import GetAlarms from "../../application/use-cases/get-alarms";
import SignUp from "../../application/use-cases/sign-up";
import RepositoryFactory from "../../domain/repositories/repository-factory";
import HttpServer from "./http-server";

export default class Router {

    constructor(http: HttpServer, repositoryFactory: RepositoryFactory) {

        http.on("post", "/signUp", function (params: any, body: any) {
            const userRepository = repositoryFactory.createUserRepository();
            const getAlarms = new SignUp(userRepository);
            return getAlarms.execute({ ...body });
        });


        http.on("get", "/alarms", function (params: any, body: any) {
            const alarmRepository = repositoryFactory.createAlarmRepository();
            const getAlarms = new GetAlarms(alarmRepository);
            return getAlarms.execute({ email: params.email });
        });
    }
}