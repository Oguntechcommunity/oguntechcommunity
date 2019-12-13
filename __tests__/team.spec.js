import * as React from "react";
import { mount } from "enzyme";
import Team from "../pages/team.js";

describe("Pages", () => {
	describe("Team", () => {
		it("should match snapshot", () => {
			const wrap = mount(<Team />);
			expect(wrap).toMatchSnapshot();
		});
	});
});
