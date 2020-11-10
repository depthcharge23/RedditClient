import React from "react";
import "./PostList.css";
import { PostItem } from "../post-item/PostItem";

// Bootstrap Components
import Container from "react-bootstrap/Container";

/**
 * The PostList component will handle rendering the list of Reddit posts.
 * 
 * Author: Aaron Mathews
 * Date: 11/5/2020
 */
export const PostList = (props) => {
    let posts = null;
    
    // If the props.posts value exists and has a length > 0 render the list.
    // Else display an error message saying that no posts could be found.
    if (props.posts && props.posts.length > 0) {
        posts = props.posts.map((post, index) => {
            return <PostItem post={post} key={index} />
        });
    } else {
        posts = <p>No posts could be found...</p>;
    }

    return (
        <Container>
            {posts}
        </Container>
    );
};
