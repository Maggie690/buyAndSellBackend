import { addViewToListingsRoute } from "./addViewToListings";
import { createNewListingRoute } from "./createNewListing";
import { getAllListingsRoute } from "./getAllListings";
import { getListingRoute } from "./getListing";
import { getUserListingRoute } from "./getUserListings";

export default [
    getAllListingsRoute,
    getListingRoute,
    addViewToListingsRoute,
    getUserListingRoute,
    createNewListingRoute,
];
