import { client } from '../config';
import Transfer from '../types/Transfer.Types';
import { v4 as uuidv4 } from 'uuid'
class Transfers {
    async setTransfers(transfer: Transfer): Promise<Transfer> {
        try {
            const connection = await client.connect();
            const sql = 'INSERT INTO transfers (id, sender, receiver, balance) VALUES ($1, $2, $3, $4) RETURNING *';
            const result = await connection.query(sql, [
                uuidv4(),
                transfer.sender,
                transfer.receiver,
                transfer.balance
            ]);
            connection.release();
            return result.rows[0];
        } catch (err) {
            throw new Error(`Could not insert trasnfers . Error ${(err as Error).message}`);
        }
    }
    async getTrasnfers(): Promise<Transfer[]> {
        try {
            const connection = await client.connect();
            const sql = 'SELECT * FROM transfers';
            const result = await connection.query(sql);
            connection.release();
            return result.rows;
        } catch (err) {
            throw new Error(`Could not get trasnfers . Error ${(err as Error).message}`);
        }
    }
    async deleteTransfers(id: string): Promise<Transfer[]> {
        try {
            const connection = await client.connect();
            const sql = 'DELETE FROM transfers WHERE id=$1';
            const result = await connection.query(sql, [id]);
            connection.release();
            return result.rows[0];
        } catch (err) {
            throw new Error(`Could not delete trasnfers row . Error ${(err as Error).message}`);
        }
    }
}

export default Transfers;