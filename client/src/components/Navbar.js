import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
    return <>
        <Link to="/">Book List</Link> | <Link to="/search">Search for Books</Link>
    </>
}