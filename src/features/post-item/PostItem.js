import React from "react";
import "./PostItem.css";

/**
 * The PostItem component will be used to render each individual post in the PostList component.
 * 
 * Author: Aaron Mathews
 * Date: 111/4/2020
 */
export const PostItem = (props) => {
    return (
        <h1>{props.title}</h1>
    )
};
