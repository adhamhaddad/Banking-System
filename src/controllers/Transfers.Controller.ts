import { Request, Response, NextFunction } from "express";
import Transfers from "../models/Transfers";

const transfer = new Transfers();

export const setTransfers = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const response = await transfer.setTransfers(req.body);
        res.status(201).json({
            status: true,
            data: {...response},
            message: 'Set transfers successfully!'
        });
    } catch (err) {
        next(err);
    }
}

export const getTrasnfers = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const response = await transfer.getTrasnfers();
        res.status(200).json({
            status: true,
            data: {...response},
            message: 'Get transfers successfully!'
        });
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