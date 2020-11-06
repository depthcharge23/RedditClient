import React from "react";
import { shallow } from "enzyme";
import { PostList } from "./PostList";

/**
 * Tests to make sure the PostList component behaves correctly.
 * 
 * Author: Aaron Mathews
 * Date: 11/5/2020
 */
describe("PostList component", () => {
    it("renders a list of posts", () => {
        // Setup
        const mockPosts = [
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
        const wrapper = shallow(<PostList posts={mockPosts} />);

        // Verify
        expect(wrapper).toMatchSnapshot();
    }); 

    it("doesn't render a list when not given one", () => {
        // Exercise
        const wrapper = shallow(<PostList />);

        // Verify
        expect(wrapper).toMatchSnapshot();
    });

    it("doesn't break when given an empty list of posts", () => {
        // Setup
        const posts = [];
        const element = "li";
        const count = 0;        

        // Exercise
        const wrapper = shallow(<PostList posts={posts} />);
        const li = wrapper.find(element);

        // Verify
        expect(li).toHaveLength(count);
    });

    it("renders an error message when given an empty list", () => {
        // Setup
        const posts = [];
        const element = "p";
        const error = "No posts could be found...";   

        // Exercise
        const wrapper = shallow(<PostList posts={posts} />);
        const text = wrapper.find(element).text();

        // Verify
        expect(text).toEqual(error);
    });

    it("renders an error message when given no list", () => {
        // Setup
        const element = "p";
        const error = "No posts could be found...";   

        // Exercise
        const wrapper = shallow(<PostList />);
        const text = wrapper.find(element).text();

        // Verify
        expect(text).toEqual(error);
    });
});
