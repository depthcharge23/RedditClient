import React from "react";
import { shallow } from "enzyme";
import { Post } from "./Post";

describe("Post component", () => {
    it("has the Post header", async () => {
        const wrapper = shallow(<Post />);
        const text = wrapper.find("h1").text();
        expect(text).toEqual("Post");
    });
});
