import Router, { Application } from 'express';
import * as customer from '../../controllers/Customers.Controller';
import * as transfer from '../../controllers/Transfers.Controller';
import { checkPayment } from '../../middlewares/mailer';
// App Routes
const routes: Application = Router();

// Routes Requests
routes.post('/customer', customer.createCustomer);
routes.get('/customer', customer.getAllCustomers);
routes.get('/customer/:id', customer.getCustomer);
routes.patch('/customer/:id', customer.updateCustomer);
routes.delete('/customer/:id', customer.deleteCustomer);

routes.post('/transfer', checkPayment, transfer.setTransfers);
routes.get('/transfer', transfer.getAllTrasnfers);
routes.delete('/transfer/:id', transfer.deleteTransfers);


export default routes;