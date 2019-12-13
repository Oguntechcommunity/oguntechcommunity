import * as React from "react";
import { mount } from "enzyme";
import Index from "../pages/index.js";

describe("Pages", () => {
	describe("Index", () => {
		it("should match snapshot", () => {
			const wrap = mount(<Index />);
			expect(wrap).toMatchSnapshot();
		});
	});
});
