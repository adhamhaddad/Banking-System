import { Request, Response, NextFunction } from 'express';
import Customer from '../models/Customers';

const customer = new Customer();
// Create
export const createCustomer = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const response = await customer.createCustomer(req.body);
        res.status(201).json({
            status: true,
            data: {...response},
            message: "User created successfully!"
        });
    } catch (err) {
        next(err);
    }
}

// Read All
export const getAllCustomers = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const response = await customer.getAllCustomers();
        res.status(200).json({
            status: true,
            data: {response},
            message: "Retrieved all users successfully!"
        });
    } catch (err) {
        next(err);
    }
}

// Get By Id
export const getCurrentBalance = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const response = await customer.getCurrentBalance(req.body.id);
        res.status(200).json({
            status: true,
            data: {response},
            message: "Retrieved user successfully!"
        });
    } catch (err) {
        next(err);
    }
}

// Delete By Id
export const deleteCustomer = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const response = await customer.deleteCustomer(req.params.id);
        res.status(200).json({
            status: true,
            data: {...response},
            message: "User deleted successfully!"
        });
    } catch (err) {
        next(err);
    }
}