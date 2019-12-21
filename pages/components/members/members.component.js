import React from "react";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import PortfolioCardList from "../portfolio-card-list/portfolio-card-list.component";

class MemberComponent extends React.Component {
	constructor() {
		super();

		this.state = {
			search: ""
		};
	}

	handleSubmit = event => {
		event.preventDefault();
	};

	handleChange = event => {
		const { value, name } = event.target;

		this.setState({ [name]: value });
	};

	render() {
		const { search } = this.state;
		return (
			<React.Fragment>
				<div className="member-search">
					<form className="form-inline" onSubmit={this.handleSubmit}>
						<FormInput
							name="search"
							className="search"
							placeholder="Search Members"
							value={search}
							onChange={this.handleChange}
							type="search"
						/>
						<CustomButton className="btn search-button">Search</CustomButton>
					</form>
				</div>
				<PortfolioCardList />
			</React.Fragment>
		);
	}
}

export default MemberComponent;
