import React from "react";
import { shallow } from "enzyme";
import { PostItem } from "./PostItem";

/**
 * Test to make sure the PostItem component displays the correct component properties.
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

    it("has the post picture displayed", () => {
        // Setup
        const src = "test.jpg";
        const element = "img";
        const prop = "src";

        // Exercise
        const wrapper = shallow(<PostItem src={src} />);
        const img = wrapper.find(element).prop(prop);

        // Verify
        expect(img).toEqual(src);
    });

    it("has alt text for the image", () => {
        // Setup
        const alt = "This is a test";
        const element = "img";
        const prop = "alt";

        // Exercise
        const wrapper = shallow(<PostItem alt={alt} />);
        const img = wrapper.find(element).prop(prop);

        // Verify
        expect(img).toEqual(alt);
    });
});
