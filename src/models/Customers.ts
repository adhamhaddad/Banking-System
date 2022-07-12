import { client } from '../config';
import Customer from '../types/Customer.Types';
import { v4 as uuidv4 } from 'uuid';

const generateID = (id: number) => {
        let newId = uuidv4();
        console.log(newId)
        return newId;
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
    async getCurrentBalance(e: string): Promise<Customer[]> {
        try {
            const connection = await client.connect();
            const sql = 'SELECT current_balance FROM customers WHERE email=($1)';
            const result = await connection.query(sql, [e]);
            connection.release();
            return result.rows[0];
        } catch (err) {
            throw new Error(`Could not get user. Error: ${(err as Error).message}`);
        }
    }

    // Update By Id
    async updateCustomer(e: string, b: string): Promise<Customer[]> {
        try {
            const connection = await client.connect();
            const sql = `UPDATE customers SET current_balance=$2 WHERE email=($1) RETURNING *`;
            const result = await connection.query(sql, [e, b]);
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