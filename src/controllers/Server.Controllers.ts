import { Request, Response } from 'express';
import path from 'path';

const publicDir: string = path.join(`${__dirname}/../../public`);

export const home = (_req: Request, res: Response): void => {
    res.status(200).sendFile(`${publicDir}/html/index.html`, (err): void => {
        if (err) console.log(err.message);
    });
}