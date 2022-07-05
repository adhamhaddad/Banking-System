import dotenv from 'dotenv';
import { Pool } from 'pg';

dotenv.config();

const {
    ENV,
    PORT,
    HOST,
    DATABASE,
    DATABASE_TEST,
    USER,
    PASSWORD
} = process.env;

export const client = new Pool({
    database: ENV === 'dev' ? DATABASE : DATABASE_TEST,
    host: HOST,
    user: USER,
    password: PASSWORD
});