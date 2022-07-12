import Router, { Application } from 'express';
import * as customer from '../../controllers/Customers.Controller';
import * as transfer from '../../controllers/Transfers.Controller';
import { updateBalance } from '../../middlewares/transfers';

// App Routes
const routes: Application = Router();

// Routes Requests
routes.post('/customer', customer.createCustomer);
routes.get('/customer', customer.getAllCustomers);
routes.get('/customer/:id', customer.getCurrentBalance);
routes.delete('/customer/:id', customer.deleteCustomer);

routes.post('/transfer', updateBalance, transfer.setTransfers, transfer.transactions);
routes.get('/transfer', transfer.getAllTrasnfers);
routes.delete('/transfer/:id', transfer.deleteTransfers);

export default routes;