import React from "react";
import { shallow } from "enzyme";
import { PostItem } from "./PostItem";

/**
 * Basic test to make sure Enzyme and Jest are configured correctly.
 * 
 * Author: Aaron Mathews
 * Date: 11/4/2020
 */
describe("PostItem component", () => {
    it("has title of the reddit post as the title", () => {
        // Setup
        const title = "Hello, World!";
        const element = "h1";

        // Exercise
        const wrapper = shallow(<PostItem title={title} />);
        const text = wrapper.find(element).text();

        // Verify
        expect(text).toEqual(title);
    });
});
