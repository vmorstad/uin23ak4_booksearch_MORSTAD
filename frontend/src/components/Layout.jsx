import React from "react";
import Search from "./Search";
import BookCard from "./Bookcard"; 
import SearchResults from "./searchresults";

export default function Layout() {
    return (
        <>
        <Search />
        <BookCard />
        <SearchResults />

        </>
    )
}
