import { db } from '../database.js'

export const getAllListingsRoute = {
    method: 'GET',
    path: '/api/listings',
    handler: async (req, h) => {
        const result = await db.query("select * from listings");
        return result;
    }
}