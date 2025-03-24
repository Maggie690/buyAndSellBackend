import { Boom } from "@hapi/boom";
import { notFound } from '@hapi/boom';
import { db } from '../database.js'

export const addViewToListingsRoute ={
      method: 'POST',
        path: '/api/listing/{id}/add-view',
        handler: async (req, h) => {
            const id = req.params.id;
            console.log(id)
            await db.query(
                "UPDATE listings SET views=views+1 where id=?",[id]
            );

            const results = await db.query(
                "select * from listings where id=?",[id]
            );
            const listing = results;//fakeListings.find(listing => listing.id === id);
    
            if (!listing) throw notFound(`Listing does not exist with id: ${id}`);
    
            return listing;
        }
}