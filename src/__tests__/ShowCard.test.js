import React from "react";
import { shallow, render } from "enzyme";

import ShowCard from "../components/ShowCard";
import Tags from "../components/Tags";

describe("ShowCard page", () => {
  it("should have a wrapper", () => {
    const wrapper = shallow(<ShowCard />);
    expect(wrapper.find(".album").length).toBe(1);
  });

  it("should render empty tags", () => {
    const wrapper = shallow(<Tags />);
    expect(wrapper.find("span").length).toBe(0);
  });

  it("should render tags", () => {
    const wrapper = render(<Tags tags={["Samurai"]} />);
    expect(wrapper).toMatchSnapshot();
  });
});
