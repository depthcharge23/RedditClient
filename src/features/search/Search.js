import React from "react";
import "./Search.css";

// Bootstrap components
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";

export const Search = () => {
    return (
        <Container>
            <Row className="search">
                <Col className="no-padding">
                    <Form inline>
                        <FormControl className="search-bar" type="text" placeholder="Search" />
                    </Form>
                </Col>
            </Row>
        </Container>
    );                
};
