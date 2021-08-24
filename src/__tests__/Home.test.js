import React from "react";
import { shallow } from "enzyme";

import Home from "../pages/Home";

describe("Home page", () => {
  it("should have a header tag", () => {
    const wrapper = shallow(<Home />);
    expect(wrapper.find("h1").text()).toEqual("Welcome back");
  });
});
