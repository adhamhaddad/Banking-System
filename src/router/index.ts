import Router, { Application } from 'express';
import logger from '../middlewares/logger';
import routes from './api/routes';

// App Router
const router: Application = Router();

// Router Requests
router.use('/api', logger, routes);

export default router;