import { client } from '../config';
import Transfer from '../types/Transfer.Types';

class Transfers {
    async setTransfers(transfer: Transfer): Promise<Transfer> {
        try {
            const connection = await client.connect();
            const sql = 'INSERT INTO transfers (id, email, money, credit) VALUES ($1, $2, $3, $4) RETURNING *';
            const result = await connection.query(sql, [
                transfer.id,
                transfer.email,
                transfer.money,
                transfer.credit
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
}

export default Transfers;