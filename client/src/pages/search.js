import React, { Component } from 'react';
import API from "../utils/API";

class Search extends Component {
    state = {
        searchTitle: "",
        results: []
    }

    handleChange = event => {
        this.setState({ searchTitle: event.target.value})
    };

    searchBook = () => {
        API.searchBook()
        .then(res => {
            console.log(res.data);
        })
    }

    handleButtonClick = event => {
        event.preventDefault()
        console.log("you clicked the button")
        this.searchBook()
    }

    render() {
        return (
            <div>
                <h1>You are in the search page.</h1>
                <input 
                    type="text"
                    placeholder="Enter title"
                    value={this.state.searchTitle}
                    onChange={this.handleChange}
                />
                <button onClick={this.handleButtonClick}>Search</button>
            </div>
        )
    }
}

export default Search;