import { Request, Response } from 'express';
import path from 'path';

const publicDir: string = path.join(`${__dirname}/../../public`);

export const home = (_req: Request, res: Response): void => {
    res.status(200).sendFile(`${publicDir}/index.html`, (err): void => {
        if (err) console.log(err.message);
    });
}

export const customers = (req: Request, res: Response) => {
    res.status(200).sendFile(`${publicDir}/customers.html`, (err): void => {
        if (err) console.log(err.message);
    })
}

export const transfers = (req: Request, res: Response) => {
    res.status(200).sendFile(`${publicDir}/transfers.html`, (err): void => {
        if (err) console.log(err.message);
    })
}

export const transactions = (_req: Request, res: Response) => {
    res.status(200).sendFile(`${publicDir}/transactions.html`, (err): void => {
        if (err) console.log(err.message);
    })
}