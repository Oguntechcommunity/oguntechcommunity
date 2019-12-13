import * as React from "react";
import { mount } from "enzyme";
import Members from "../pages/members.js";

describe("Pages", () => {
	describe("Members", () => {
		it("should match snapshot", () => {
			const wrap = mount(<Members />);
			expect(wrap).toMatchSnapshot();
		});
	});
});
