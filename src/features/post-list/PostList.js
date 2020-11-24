import React from "react";
import "./PostList.css";
import { PostItem } from "../post-item/PostItem";

// Bootstrap Components
import Container from "react-bootstrap/Container";

// Custom Components
import { Post } from "../post/Post";

// React Router
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

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
    } else if (props.posts) {
        posts = (
            <div className="no-posts">
                <i className="fab fa-reddit icon"></i>
                <p>No posts could be found...</p>
            </div>
        );
    }

    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <Container className="scrollbar p-0" fluid>
                        {posts}
                    </Container>
                </Route>
                <Route path="/:title">
                    <Post />
                </Route>
            </Switch>
        </Router>
        
    );
};
