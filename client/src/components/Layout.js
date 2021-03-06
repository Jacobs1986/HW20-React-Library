import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";

function Layout(props) {
    return (
        <Row id={props.id}>
            <Col md={3}>
                <Image src={props.image} fluid/>
            </Col>
            <Col md={7}>
                <h4>Title: {props.title}</h4>
                <h4>Author: {props.author}</h4>
                <h6>Summary: {props.summary}</h6>
                <a href={props.previewLink}>Click here to see more!</a>
            </Col>
            <Col md={2}>
                <button onClick={props.delete} id={props.buttonId}>Delete Book</button>
            </Col>
        </Row>
    )
}

export default Layout;