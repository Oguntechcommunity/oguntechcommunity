import React from "react";
import Alert from "../errors/alert.component";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import PortfolioCardList from "../portfolio-card-list/portfolio-card-list.component";

class MemberComponent extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			search: "",
			loading: false
		};
	}

	handleSubmit = event => {
		event.preventDefault();
		let q = this.state.search;
		const { members } = this.props;
	};

	handleChange = event => {
		const { value, name } = event.target;

		this.setState({ [name]: value });
	};

	searchForm = search => (
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
	);

	render() {
		const { search, loading } = this.state;
		const { members } = this.props;
		return (
			<React.Fragment>
				{loading ? (
					<div className="jumbotron text-center">
						<h2>loading...</h2>
					</div>
				) : (
					" "
				)}
				<div className="member-search">{this.searchForm(search)}</div>
				{members.message.length > 0 ? (
					<PortfolioCardList members={members} />
				) : (
					<Alert className="alert alert-info">No Members Available</Alert>
				)}
			</React.Fragment>
		);
	}
}

export default MemberComponent;
