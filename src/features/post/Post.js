import React from "react";
import "./Post.css";

// Bootstrap Components
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// React Router
import { useParams } from "react-router-dom";

export const Post = () => {
    const { title } = useParams();

    return (
        <Container fluid>
            <Row className="post">
                <Col>
                    <h1>{title}</h1>
                </Col>
            </Row>            
        </Container>        
    );
};
