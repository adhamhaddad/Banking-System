import { Request, Response, NextFunction } from "express";
import nodemailer from "nodemailer";

export const checkPayment = async (_req: Request, res: Response, next: NextFunction) => {
    // Payment Checks
    try {
        // let transporter = nodemailer.createTransport({
        //     host: "smtp.gmail.com",
        //     port: 465,
        //     secure: true,
        //     auth: {
        //         user: "adham",
        //         pass: ""
        //     }
        // });

        // let info = await transporter.sendMail({
        //     from: 'ashrafadham040@gmail.com',
        //     to: "adham.ashraf.haddad@gmail.com",
        //     subject: "Hello Adham",
        //     text: "Hello world?",
        //     html: "<b>Hello world?</b>"
        // });
        // transporter.verify((error, success) => {
        //     if (error) {
        //         console.log(error);
        //     } else {
        //         console.log('Server is ready to take messages!');
        //     }
        // })
        // console.log("Message sent: %s", info.messageId);
        // console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
        next();
    } catch (err) {
        throw new Error(`Could not check on payment Error. ${(err as Error).message}`);
    }
}