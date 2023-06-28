import express from 'express';
import ExpressAdapter from './adapter/express-adapter';
import AlarmController from './controller/alarm-controller';
const app = express();
app.use(express.json())
app.get('alarms', ExpressAdapter.create(AlarmController.getAlarms))
app.listen(3000)