import React from "react";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';

// Bootstrap Components
import Container from "react-bootstrap/Container";

// Custom Components
import { PostList } from "./features/post-list/PostList";
import { Search } from "./features/search/Search";

// Helpers
import RedditHelper from "./helpers/reddit-helper/RedditHelper";

/**
 * The App component is home to the other components PostList and Search. It will also handle all of the fetching from
 * the Reddit JSON API.
 * 
 * Author: Aaron Mathews
 * Date: 11/5/2020
 */
export class App extends React.Component {
    constructor() {
        super();

        this.state = {
            "posts": []
        };
    }

    async componentDidMount() {
        const posts = await RedditHelper.popular();

        this.setState({
            "posts": posts
        });
    }

    render() {
        return (
            <Container fluid>
                <Search />
                <PostList posts={this.state.posts} />
            </Container>
        );
    }
}
