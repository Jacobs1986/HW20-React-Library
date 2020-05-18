import React, { Component } from 'react';
import API from "../utils/API";
import Layout from "../components/Layout";

// styling
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

class BookList extends Component {
    state = {
        books: []
    }

    componentDidMount() {
        this.loadBooks();
    }

    loadBooks = () => {
        API.getBooks()
            .then(res => {
                console.log(res.data);
                this.setState({ books: res.data })
            });
    }

    deleteBook = (event) => {
        event.preventDefault()
        let bookID = this.state.books[event.target.id]._id;
        console.log("The books id is", bookID);
        API.deleteBook(bookID);
        this.loadBooks();
    }

    render() {
        return (
            <Container>
                <Row>
                    <h1>Book List</h1>
                </Row>
                <Row>
                    <p>Below you can view the books that you've added to your book list.</p>
                </Row>
                {this.state.books.map((books, index) => {
                    return (
                        <Layout 
                            key={books._id}
                            id={books._id}
                            image={books.image}
                            title={books.title}
                            author={books.authors[0]}
                            summary={books.synopsis}
                            previewLink={books.link}
                            delete={this.deleteBook}
                            buttonId = {index}
                        />
                    )
                })}
            </Container>
        )
    }
}

export default BookList;