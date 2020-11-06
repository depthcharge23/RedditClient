import React from "react";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';

// Custom Components
import { PostList } from "./features/post-list/PostList";

/**
 * The App component is home to the other components PostList and Search. It will also handle all of the fetching from
 * the Reddit JSON API.
 * 
 * Author: Aaron Mathews
 * Date: 11/5/2020
 */
export const App = () => {
    return (
        <div>
            <h1>Reddit Client</h1>
            <PostList />
        </div>
        
    );
};
