import React, { Component } from 'react';
import API from "../utils/API";

// styling
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

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

    render() {
        return (
            <Container>
                <Row>
                    <h1>Book List</h1>
                </Row>
                <Row>
                    <p>Below you can view the books that you've added to your book list.</p>
                </Row>
                {this.state.books.map(books => {
                    return (
                        <Row key={books._id}>
                            <Col md={3}>
                                <img src={books.image} alt="book cover" />
                            </Col>
                            <Col md={9}>
                                <h4>{books.title}</h4>
                                <h4>{books.authors}</h4>
                                <h4>{books.synopsis}</h4>
                                <a href={books.link}>Click here for more info</a>
                            </Col>
                        </Row>
                    )
                })}
            </Container>
        )
    }
}

export default BookList;