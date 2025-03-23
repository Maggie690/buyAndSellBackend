import { Boom } from "@hapi/boom";
import { fakeListings } from "./fake-date";
import { notFound } from '@hapi/boom';

export const getListingRoute = {
    method: 'GET',
    path: '/api/listing/{id}',
    handler: (req, h) => {
        const id = req.params.id;
        console.log(id)
        const listing = fakeListings.find(listing => listing.id === id);

        if (!listing) throw notFound(`Listing does not exist with id: ${id}`);

        return listing;
    }
}