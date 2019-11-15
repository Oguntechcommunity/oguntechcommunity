import * as React from "react";
import { mount } from "enzyme";
import Home from "../pages/components/Home";

describe("Pages", () => {
	describe("Home Component", () => {
		it("should match snapshot", () => {
			const wrap = mount(<Home />);
			expect(wrap).toMatchSnapshot();
		});
	});
});
