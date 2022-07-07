import { Request, Response, NextFunction } from "express";
import Mail from "nodemailer/lib/mailer";

export const checkPayment = (req: Request, res: Response, next: NextFunction) => {
    // Payment Checks
    try {
        /*
        if () {
            
            next();
        } else {
            return res.status(500).json({
                status: true,
                message: `Error.`
            });
        }
        */
       next();
    } catch (err) {
        throw new Error(`Could not check on payment Error. ${(err as Error).message}`);
    }
}