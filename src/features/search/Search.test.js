import React from "react";
import { shallow } from "enzyme";
import { Search } from "./Search";

describe("Search component", () => {
    it("Contains search header", () => {
        const wrapper = shallow(<Search />);
        const text = wrapper.find("h1").text();

        expect(text).toEqual("Search");
    });
});
