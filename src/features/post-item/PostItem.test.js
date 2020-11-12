import React from "react";
import { shallow } from "enzyme";
import { PostItem } from "./PostItem";
import RedditHelper from "../../helpers/reddit-helper/RedditHelper";

/**
 * Test to make sure the PostItem component displays the correct component properties.
 * 
 * Author: Aaron Mathews
 * Date: 11/4/2020
 */
describe("PostItem component", () => {
    it("has title of the reddit post as the title", async () => {
        // Setup
        const element = "h2";

        const posts = await RedditHelper.popular();

        // Exercise
        const wrapper = shallow(<PostItem post={posts[0]} />);
        const text = wrapper.find(element).text();

        // Verify
        expect(text).toEqual(posts[0].title);
    });
});
