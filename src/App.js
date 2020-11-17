import React from "react";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';

// Bootstrap Components
import Container from "react-bootstrap/Container";

// Custom Components
import { PostList } from "./features/post-list/PostList";
import { Search } from "./features/search/Search";
import { Loader } from "./features/loader/Loader";

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
            "posts": [],
            "showLoader": false
        };

        this.search = this.search.bind(this);
    }

    async componentDidMount() {
        const posts = await RedditHelper.popular();

        this.setState({
            "posts": posts,
            "showLoader": true
        });
    }

    async search(keywords) {
        this.setState({
            "posts": [],
            "showLoader": false
        });

        const posts = await RedditHelper.search(keywords);

        this.setState({
            "posts": posts,
            "showLoader": true
        });
    }

    render() {
        return (
            <Container className="p-0" fluid>
                <Search search={this.search} />

                <Loader showLoader={this.state.showLoader} />

                <PostList posts={this.state.posts} />

                <p className="spacer"></p>
                <footer className="footer fixed-bottom">
                    <p>Created by Aaron Mathews</p>
                </footer>
            </Container>
        );
    }
}
