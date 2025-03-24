import { Boom } from "@hapi/boom";
import { notFound } from '@hapi/boom';
import { db } from '../database.js'

export const getListingRoute = {
    method: 'GET',
    path: '/api/listing/{id}',
    handler: async (req, h) => {
        const id = req.params.id;
        console.log(id)
        const results = await db.query(
            "select * from listings where id=?",[id]
        );
        const listing = results;//fakeListings.find(listing => listing.id === id);

        if (!listing) throw notFound(`Listing does not exist with id: ${id}`);

        return listing;
    }
}