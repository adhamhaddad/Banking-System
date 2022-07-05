import express, { Application } from 'express';
import helmet from 'helmet';
import router from './router/index';

// Express App
const app: Application = express();
export const port: (string | number) = process.env.port || 3000;

// App Middlewares
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(express.static('public'));

// Requests
app.use('/', router);

// App Server
app.listen(port, (): void => console.log(`Server Listening on http://localhost:${port}`))

export default app;