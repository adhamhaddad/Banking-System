import Router, { Application } from 'express';
import * as customer from '../../controllers/Customer.Controllers';
import * as server from '../../controllers/Server.Controllers';

// App Routes
const routes: Application = Router();

// Routes Requests
routes.post('/users', customer.createCustomer);
routes.get('/users', customer.getAllCustomers);
routes.get('/users/:id', customer.getCustomer);
routes.patch('/users/:id', customer.updateCustomer);
routes.delete('/users/:id', customer.deleteCustomer);


routes.get('/home', server.home)

export default routes;