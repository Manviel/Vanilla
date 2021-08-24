import React from "react";
import { shallow } from "enzyme";
import { Link } from "react-router-dom";

import Popup from "../components/Popup";

describe("Popup page", () => {
  const setup = (props) => shallow(<Popup {...props} />);

  let component;

  beforeEach(() => {
    const props = {
      id: 1,
      name: "Foo",
      email: "Bar",
    };

    component = setup({ item: props });
  });

  it("should contain link", () => {
    expect(component.find(Link).length).toBe(1);
  });

  it("should contain tables", () => {
    expect(component.find("table").length).toBe(2);
  });
});
