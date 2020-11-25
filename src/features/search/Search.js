import React, { useState } from "react";
import "./Search.css";

// Bootstrap components
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";

// React Router
import { Link, useHistory } from "react-router-dom"; 

export const Search = (props) => {
    const [keyword, setKeyword] = useState("");
    const history = useHistory();

    const handleUserInput = (e) => {
        setKeyword(e.target.value);
    };

    const handlePopular = () => {
        props.popular();
    };

    const handleSearch = (e) => {
        e.preventDefault();
        
        props.search(keyword);
        history.push("/");
    };

    return (
        <Container className="sticky-top" fluid>
            <Row className="search">
                <Col className="" xl={3}>
                    <p><Link className="title" to="/"><span onClick={handlePopular}><i className="fab fa-reddit"></i> RedditClient</span></Link></p>
                </Col>
                <Col xl={9}>
                    <Form inline onSubmit={handleSearch}>
                        <FormControl className="search-bar" type="text" placeholder="Search" onChange={handleUserInput} />
                    </Form>
                </Col>
            </Row>
        </Container>
    );                
};
