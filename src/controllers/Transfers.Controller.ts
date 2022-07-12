import { Request, Response, NextFunction } from "express";
import Transfers from "../models/Transfers";

const transfer = new Transfers();

export const setTransfers = async (req: Request, res: Response, next: NextFunction) => {
    try {
        await transfer.setTransfers(req.body);
        next();
    } catch (err) {
        next(err);
    }
}

export const getAllTrasnfers = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const response = await transfer.getTrasnfers();
        res.status(200).json({
            status: true,
            data: {response},
            message: 'Get transfers successfully!'
        });
        next();
    } catch (err) {
        next(err);
    }
}

export const deleteTransfers = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const response = await transfer.deleteTransfers(req.params.id);
        res.status(200).json({
            status: true,
            data: {...response},
            message: 'Delete transfers successfully!'
        });
    } catch (err) {
        next(err);
    }
}

export const transactions =  (_req: Request, res: Response) => {
    res.status(200).redirect('http://localhost:8000/transfer');
}