import express from 'express';
import ExpressAdapter from './infra/http/express-adapter';
import AlarmController from './infra/controller/alarm-controller';
const app = express();
app.use(express.json())
app.get('alarms', ExpressAdapter.create(AlarmController.getAlarms))
app.listen(3000)