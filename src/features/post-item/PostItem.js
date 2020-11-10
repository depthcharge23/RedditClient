import React from "react";
import "./PostItem.css";

// Bootstrap Components
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

/**
 * The PostItem component will be used to render each individual post in the PostList component.
 * 
 * Author: Aaron Mathews
 * Date: 11/04/2020
 */
export const PostItem = (props) => {
    console.log(props);

    return (
        <Row className="post-item">
            <Col>
                <h2>{props.post.title}</h2>
                <p>{props.post.subreddit}</p>
                <Image src={props.post.src} alt={props.post.alt} fluid />
            </Col>            
        </Row>        
    )
};
