import React, { Component } from 'react';

// styling
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class BookList extends Component {

    render() {
        return (
            <Container>
                <Row>
                    <h1>Book List</h1>
                </Row>
                <Row>
                    <p>Below you can view the books that you've added to your book list.</p>
                </Row>
            </Container>
        )
    }
}

export default BookList;