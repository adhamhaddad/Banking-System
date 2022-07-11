import { Request, Response, NextFunction } from "express";

export const checkPayment = async (_req: Request, res: Response, next: NextFunction) => {
    // Payment Checks
    try {
        
        next();
    } catch (err) {
        throw new Error(`Could not check on payment Error. ${(err as Error).message}`);
    }
}