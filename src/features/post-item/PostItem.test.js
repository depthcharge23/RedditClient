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
    it("has PostItem header", () => {
        const wrapper = shallow(<PostItem />);
        const text = wrapper.find("h1").text();

        expect(text).toEqual("PostItem");
    });
});
