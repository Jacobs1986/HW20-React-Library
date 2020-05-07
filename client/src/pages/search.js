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
        API.searchBook(urlTitle)
        .then(res => {
            this.setState({
                results: res.data.items
            })
        })
    }

    handleButtonClick = event => {
        event.preventDefault()
        console.log(this.state.searchTitle)
    }

    saveBook = (event) => {
        console.log("You clicked the save button")
        let bookIndex = this.state.results[event.target.id].volumeInfo
        let saveBookInfo = {
            title: bookIndex.title,
            authors: bookIndex.authors[0],
            synopsis: bookIndex.description,
            image: bookIndex.imageLinks.thumbnail,
            link: bookIndex.previewLink
        }
        API.saveBook(saveBookInfo)
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
                        save={this.saveBook}
                        buttonId = {index}
                    />
                )}
            </Container>
        )
    }
}

export default Search;