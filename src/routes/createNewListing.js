import { v4 as uuid } from 'uuid';
import { Boom } from "@hapi/boom";
import { notFound } from '@hapi/boom';
import { db } from '../database.js'

export const createNewListingRoute = {
    method: 'POST',
    path: '/api/listing',
    handler: async (req, h) => {
        const id = uuid();

        const { name = '', description = '', price = 0, } = req.payload;
        const userId = 1234;
        const view = 0;
        console.log(name)

        await db.query(
            `INSERT INTO listings(id, name, description, price, user_id, views) 
             VALUES (?, ?, ?, ?, ?, ?);`,
            [id, name, description, price, userId, view],
        );

        return { id, name, description, price, userId, view };
    }
}