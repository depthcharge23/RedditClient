import React from "react";
import { shallow } from "enzyme";
import { App } from "./App";
import { PostList } from "./features/post-list/PostList";
import RedditHelper from "./helpers/reddit-helper/RedditHelper";

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

    it("retrieves data from the Reddit JSON API and loads the data into its state", async () => {
        // Setup
        const posts = await RedditHelper.popular();

        // Exercise
        const wrapper = shallow(<App />);
        const componentInstance = wrapper.instance();

        await componentInstance.componentDidMount();

        const state = wrapper.state("posts");

        // Verify
        expect(state).toEqual(posts);
    });
});
