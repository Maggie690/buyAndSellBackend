import { fakeListings } from "./fake-date";

export const getAllListingsRoute = {
    method: 'GET',
    path: '/api/listings',
    handler: (req, h) => {
        return fakeListings;
    }
}