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
export const getCustomer = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const response = await customer.getCustomer(req.params.id);
        res.status(200).json({
            status: true,
            data: {...response},
            message: "Retrieved user successfully!"
        });
    } catch (err) {
        next(err);
    }
}

// Update By Id
export const updateCustomer = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const response = await customer.updateCustomer(req.params.id, req.body);
        res.status(200).json({
            status: true,
            data: {...response},
            message: "User updated successfully!"
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