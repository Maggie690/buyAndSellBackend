import { fakeListings } from "./fake-date";

export const getListingRoute = {
    method: 'GET',
    path: '/api/listings/{id}',
    handler: (req, h) => {
        const id = req.param.id;
        return fakeListings.find(listing => listing.id === id);
    }
}