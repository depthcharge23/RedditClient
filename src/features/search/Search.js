import React, { useState } from "react";
import "./Search.css";

// Bootstrap components
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";

export const Search = (props) => {
    const [keyword, setKeyword] = useState("");

    const handleUserInput = (e) => {
        setKeyword(e.target.value);
    }

    const handleSearch = (e) => {
        e.preventDefault();
        props.search(keyword);
    };

    return (
        <Container>
            <Row className="search">
                <Col className="no-padding">
                    <Form inline onSubmit={handleSearch}>
                        <FormControl className="search-bar" type="text" placeholder="Search" onChange={handleUserInput} />
                    </Form>
                </Col>
            </Row>
        </Container>
    );                
};
