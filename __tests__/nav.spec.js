import * as React from "react";
import { mount } from "enzyme";
import Nav from "../pages/components/Nav";

describe("Pages", () => {
	describe("Nav Component", () => {
		it("should match snapshot", () => {
			const wrap = mount(<Nav />);
			expect(wrap).toMatchSnapshot();
		});
	});
});
