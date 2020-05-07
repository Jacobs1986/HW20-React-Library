import React, { Component } from 'react';
import API from "../utils/API";
import Container from "react-bootstrap/Container"
import SearchLayout from "../components/SearchLayout";
import Row from "react-bootstrap/Row"

class Search extends Component {
    state = {
        searchTitle: "",
        results: []
    }

    handleChange = event => {
        this.setState({ searchTitle: event.target.value})
    };

    searchBook = () => {
        let urlTitle = this.state.searchTitle.replace(' ', '+');
        console.log(urlTitle)
        API.searchBook(urlTitle)
        .then(res => {
            console.log(res.data.items);
            this.setState({
                results: res.data.items
            })
        })
    }

    handleButtonClick = event => {
        event.preventDefault()
        console.log(this.state.searchTitle)
    }

    render() {
        return (
            <Container>
                <h1>You are in the search page.</h1>
                <input 
                    type="text"
                    placeholder="Enter title"
                    value={this.state.searchTitle}
                    onChange={this.handleChange}
                />
                <button onClick={this.searchBook}>Search</button>
                {this.state.results.map((data, index) =>
                    <SearchLayout 
                        key={index}
                        id={index}
                        image={data.volumeInfo.imageLinks.thumbnail}
                        title={data.volumeInfo.title}
                        author={data.volumeInfo.authors[0]}
                        summary={data.volumeInfo.description}
                        previewLink={data.volumeInfo.previewLink}
                    />

                )}
            </Container>
        )
    }
}

export default Search;