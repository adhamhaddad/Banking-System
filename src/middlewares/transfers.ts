import { Request, Response, NextFunction } from "express";
import Customers from "../models/Customers";

const customer = new Customers();

export const updateBalance = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const Data = {
            sender: await req.body.sender,
            receiver: await req.body.receiver,
            balance: await req.body.balance
        }

        const senderLastBalance = await customer.getCurrentBalance(Data.sender);
        const receiverLastBalance = await customer.getCurrentBalance(Data.receiver);
        
        const senderUpdate = String(Number(Object.values(senderLastBalance)[0]) -  Number(Data.balance));
        const receiverUpdate = String(Number(Object.values(receiverLastBalance)[0]) +  Number(Data.balance));

        if (Number(senderUpdate) < 0) {
            console.log('cant send money your value is 0')
            return res.redirect('http://localhost:8000/transfer');
        } else {
            // Update
            customer.updateCustomer(Data.sender, senderUpdate);
            customer.updateCustomer(Data.receiver, receiverUpdate);
        }
        next();
    } catch (err) {
        throw new Error(`Could not check on payment Error. ${(err as Error).message}`);
    }
}