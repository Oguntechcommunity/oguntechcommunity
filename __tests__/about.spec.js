import * as React from "react";
import { mount } from "enzyme";
import About from "../pages/about.js";

describe("Pages", () => {
	describe("About", () => {
		it("should match snapshot", () => {
			const wrap = mount(<About />);
			expect(wrap).toMatchSnapshot();
		});

	});
});