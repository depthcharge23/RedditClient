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
    let image = null;

    if (props.post.src) {
        image = <Image src={props.post.src} alt={props.post.alt} width={"40%"} />;
    }

    return (
        <Row className="post-item">
            <Col>
                <h2>{props.post.title}</h2>
                <p>
                    <a href={`https://www.reddit.com/${props.post.subreddit}`} target="_blank" rel="noreferrer">{props.post.subreddit}</a>&nbsp;
                    by&nbsp;
                    <a href={`https://www.reddit.com/u/${props.post.author}`} target="_blank" rel="noreferrer">{props.post.author}</a>
                </p>
                {image}
            </Col>            
        </Row>        
    )
};
