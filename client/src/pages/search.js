import React, { Component } from 'react';
import API from "../utils/API";

class Search extends Component {

    componentDidMount() {
        API.searchBook()
        .then(res => {
            console.log(res.data);
        })
    }

    render() {
        return (
            <div>
                <h1>You are in the search page.</h1>
            </div>
        )
    }
}

export default Search;