import { client } from '../config';
import Customer from '../types/Customer.Types';
import { v4 as uuidv4 } from 'uuid';

const generateID = async (id: number): Promise<number> => {
    try {
        const connection = await client.connect();
        const sql = 'SELECT * FROM customers ORDER BY id DESC LIMIT 1';
        const result = await connection.query(sql, [id]);
        connection.release();
        console.log(result.rows)
        let newId = Number(result.rows) +1;
        return newId;
    } catch (err) {
        throw new Error(`ID Generation failed! Error. ${(err as Error).message}`);
    }
}

class Customers {
    // Create
    async createCustomer(u: Customer): Promise<Customer> {
        try {
            const connection = await client.connect();
            const sql = 'INSERT INTO customers (id, username, email, current_balance) VALUES($1, $2, $3, $4) RETURNING *';
            const result = await connection.query(sql, [
                // uuidv4(),
                u.id,
                u.username,
                u.email,
                u.current_balance
            ]);
            connection.release();
            return result.rows[0];
        } catch (err) {
            throw new Error(`Could not create user. Error: ${(err as Error).message}`);
        }
    }

    // Read All
    async getAllCustomers(): Promise<Customer[]> {
        try {
            const connection = await client.connect();
            const sql = 'SELECT * FROM customers';
            const result = await connection.query(sql)
            connection.release();
            return result.rows;
        } catch (err) {
            throw new Error(`Could not get users. Error: ${(err as Error).message}`);
        }
    }

    // Get By Id
    async getCustomer(id: string): Promise<Customer[]> {
        try {
            const connection = await client.connect();
            const sql = 'SELECT * FROM customers WHERE id=($1)';
            const result = await connection.query(sql, [id]);
            connection.release();
            return result.rows[0];
        } catch (err) {
            throw new Error(`Could not get user. Error: ${(err as Error).message}`);
        }
    }

    // Update By Id
    async updateCustomer(id: string, u: Customer): Promise<Customer[]> {
        try {
            const connection = await client.connect();
            const sql = `UPDATE customers SET id=$1, username=$2, email=$3, current_balance=$4 WHERE id=${id} RETURNING *`;
            const result = await connection.query(sql, [
                u.id,
                u.username,
                u.email,
                u.current_balance,
            ]);
            connection.release();
            return result.rows[0];
        } catch (err) {
            throw new Error(`Could not update user. Error: ${(err as Error).message}`);
        }
    }

    // Delete By Id
    async deleteCustomer(id: string): Promise<Customer[]> {
        try {
            const connection = await client.connect();
            const sql = 'DELETE FROM customers * WHERE id=($1) RETURNING *';
            const result = await connection.query(sql, [id]);
            connection.release();
            return result.rows[0];
        } catch (err) {
            throw new Error(`Could not delete user. Error: ${(err as Error).message}`);
        }
    }
}

export default Customers;