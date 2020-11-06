import React from "react";
import { shallow } from "enzyme";
import { PostList } from "./PostList";

describe("PostList component", () => {
    it("renders a PostList h1", () => {
        const wrapper = shallow(<PostList />);
        const text = wrapper.find("h1").text();

        expect(text).toEqual("PostList");
    }); 
});
