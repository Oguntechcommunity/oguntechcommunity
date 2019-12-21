import * as React from "react";
import { shallow } from "enzyme";
import Hero from "../pages/components/hero/hero-component";

describe("Pages", () => {
	describe("Hero Component", () => {
		const wrapper = shallow(<Hero />);

		it("should match snapshot", () => {
			expect(wrapper).toMatchSnapshot();
		});

		it("Should have an empty name, portfolio, email, job", () => {
			//Optionally test to check if name, portfolio, email, job are empty strings on

			expect(wrapper.state({ name: " " }));
			expect(wrapper.state({ portfolio: " " }));
			expect(wrapper.state({ email: " " }));
			expect(wrapper.state({ job: " " }));

			wrapper.setState({ name: "Niyi" });
			wrapper.setState({ portfolio: "https://www.google.com/" });
			wrapper.setState({ email: "john@gmail.com" });
			wrapper.setState({ job: "developer" });
		});

		it("Should have an value (setState)", () => {
			//Optionally test to check if name, portfolio, email, job are empty strings on
		});
	});
});
