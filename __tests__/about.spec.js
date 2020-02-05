import * as React from "react";
import { shallow } from "enzyme";
import About from "../pages/about.js";

describe("Pages", () => {
	describe("About", () => {
		it("should match snapshot", () => {
			const wrap = shallow(<About />);
			expect(wrap).toMatchSnapshot();
		});
	});
});