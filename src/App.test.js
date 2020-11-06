import React from "react";
import { shallow } from "enzyme";
import { App } from "./App";
import { PostList } from "./features/post-list/PostList";

/**
 * Tests the behavior of the App component.
 * 
 * Author: Aaron Mathews
 * Date: 11/5/2020
 */
describe("App component", () => {
    it("Contains Reddit Client header", () => {
        const wrapper = shallow(<App />);
        const text = wrapper.find("h1").text();

        expect(text).toEqual("Reddit Client");
    });

    it("renders a PostList component", () => {
        // Setup
        const outcome = true;
        const element = <PostList />

        // Exercise
        const wrapper = shallow(<App />);

        // Verify
        expect(wrapper.containsMatchingElement(element)).toEqual(outcome);
    });

    it("retrieves data from the Reddit JSON API and loads the data into its state", () => {
        // Setup
        const posts = [
            {
                "title": "Post 1",
                "src": "Src1.jpg",
                "alt": "Alt 1"
            },
            {
                "title": "Post 2",
                "src": "Src2.jpg",
                "alt": "Alt 2"
            },
            {
                "title": "Post 2",
                "src": "Src2.jpg",
                "alt": "Alt 2"
            },
        ];

        // Exercise
        const wrapper = shallow(<App />);
        const componentInstance = wrapper.instance();

        componentInstance.componentDidMount();

        const state = wrapper.state("posts");

        // Verify
        expect(state).toEqual(posts);
    });
});
