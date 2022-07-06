import express, { Application } from 'express';
import helmet from 'helmet';
import cors from 'cors';
import router from './router/index';
import { config } from './config';

// Express App
const app: Application = express();
export const port: (string | number) = config.port || 3000;

// App Middlewares
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(express.static('public'));

// Requests
app.use('/', router);

// App Server
app.listen(port, (): void => console.log(`Server Listening on http://localhost:${port}`))

export default app;