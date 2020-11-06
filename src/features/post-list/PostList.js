import React from "react";
import "./PostList.css";
import { PostItem } from "../post-item/PostItem";

/**
 * The PostList component will handle rendering the list of Reddit posts. It will also call the Reddit JSON API to retrieve the data.
 * 
 * Author: Aaron Mathews
 * Date: 11/5/2020
 */
export const PostList = (props) => {
    let posts = null;
    
    if (props.posts && props.posts.length > 0) {
        posts = props.posts.map((post, index) => {
            return <PostItem title={post.title} src={post.src} alt={post.alt} key={index} />
        });
    } else {
        posts = <p>No posts could be found...</p>;
    }


    return (
        <div>
            {posts}
        </div>
    );
};
