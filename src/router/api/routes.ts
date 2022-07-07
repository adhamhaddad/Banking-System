import Router, { Application } from 'express';
import * as customer from '../../controllers/Customers.Controller';
import * as transfer from '../../controllers/Transfers.Controller';
import * as server from '../../controllers/Server.Controllers';
import { checkPayment } from '../../middlewares/transfer';
// App Routes
const routes: Application = Router();

// Routes Requests
routes.post('/users', customer.createCustomer);
routes.get('/users', customer.getAllCustomers);
routes.get('/users/:id', customer.getCustomer);
routes.patch('/users/:id', customer.updateCustomer);
routes.delete('/users/:id', customer.deleteCustomer);

routes.get('/home', server.home);
routes.get('/payment', server.payment);

routes.post('/transfer', checkPayment, transfer.setTransfers);
routes.get('/transfer', transfer.getTrasnfers);

export default routes;