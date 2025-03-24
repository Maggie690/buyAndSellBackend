import { Boom } from "@hapi/boom";
import { notFound } from '@hapi/boom';
import { db } from '../database.js'

export const getUserListingRoute = {
    method: 'GET',
    path: '/api/users/{userId}/listings',
    handler: async (req, h) => {
        const id = req.params.userId;
       
       // console.log(id)
        const results = await db.query(
            "select * from listings where user_id=?",[id]
        );
        const listing = results;//fakeListings.find(listing => listing.id === id);

        if (!listing) throw notFound(`Listing does not exist with id: ${id}`);

        return listing;
    }
}