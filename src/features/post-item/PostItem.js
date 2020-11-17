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
    let thumbnail = null;

    if (props.post.hasThumbnail) {
        thumbnail = (
            <Col xl={2}>
                <Image src={props.post.thumbnail} rounded />
            </Col>   
        );
    }

    return (
        <Row className="post-item m-0">
            <Col xl={10}>
                <h2>{props.post.title}</h2>
                <Row>
                    <Col>
                        <p><strong>Date Posted:</strong> {props.post.datePosted.getMonth() + 1 + "/" + props.post.datePosted.getDate() + "/" + props.post.datePosted.getFullYear()}</p>
                        <p>
                            <a className="link" href={`https://www.reddit.com/${props.post.subreddit}`} target="_blank" rel="noreferrer">{props.post.subreddit}</a>&nbsp;
                            by&nbsp;
                            <a className="link" href={`https://www.reddit.com/u/${props.post.author}`} target="_blank" rel="noreferrer">{props.post.author}</a>
                        </p>
                    </Col>
                </Row>
            </Col>
            {thumbnail}       
        </Row>        
    )
};
