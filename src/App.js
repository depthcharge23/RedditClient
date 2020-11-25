import React from "react";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';

// Bootstrap Components
import Container from "react-bootstrap/Container";

// Custom Components
import { PostList } from "./features/post-list/PostList";
import { Search } from "./features/search/Search";
import { Loader } from "./features/loader/Loader";
import { Post } from "./features/post/Post";

// Helpers
import RedditHelper from "./helpers/reddit-helper/RedditHelper";

// React Router
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

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
            "posts": null,
            "hideLoader": false
        };

        this.popular = this.popular.bind(this);
        this.search = this.search.bind(this);
    }

    async componentDidMount() {
        const posts = await RedditHelper.popular();

        this.setState({
            "posts": posts,
            "hideLoader": true
        });
    }

    async popular() {
        this.setState({
            "posts": null,
            "hideLoader": false
        });

        const posts = await RedditHelper.popular();

        this.setState({
            "posts": posts,
            "hideLoader": true
        });
    }

    async search(keywords) {
        this.setState({
            "posts": null,
            "hideLoader": false
        });

        const posts = await RedditHelper.search(keywords);

        this.setState({
            "posts": posts,
            "hideLoader": true
        });
    }

    render() {
        return (
            <Router>
                <Container className="p-0" fluid>
                    <Search popular={this.popular} search={this.search} />
                    <Loader hideLoader={this.state.hideLoader} />

                    <Switch>
                        <Route exact path="/">
                            <PostList posts={this.state.posts} />  
                        </Route>
                        <Route path="/:title">
                            <Post />
                        </Route>
                    </Switch>
                    
                    <p className="spacer"></p>
                    <footer className="footer fixed-bottom">
                        <p>Created by Aaron Mathews</p>
                    </footer>
                </Container>
            </Router>
        );
    }
}
