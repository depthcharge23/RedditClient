import React from "react";
import "./Loader.css";

// Bootstrap Components
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Spinner from "react-bootstrap/Spinner";

export const Loader = (props) => {
    return (
        <Container  hidden={props.hideLoader}>
            <Row className="loader">
                <Col>
                    <Spinner animation="border" />
                    <p>Loading...</p>
                </Col>
            </Row>
        </Container>
    )
};
