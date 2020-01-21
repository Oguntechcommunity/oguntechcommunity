import React from "react";
import { connect } from "react-redux";
import axios from 'axios';

import { fetchAllMembers } from '../../../redux/member/member.actions'

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import PortfolioCardList from "../portfolio-card-list/portfolio-card-list.component";


class MemberComponent extends React.Component {
	constructor() {
		super();

		this.state = {
			search: "",
			loading: false
		};
	}

	fetchMembers(){
		axios({
			method:'GET',
			url:`${process.env.REACT_APP_API_URL}/user/abiodun`,
			headers: {
				Authorization: 'Bearer 2d662d4d3b86df2697c87a5a88764627A+CvuYJLmEHSWmE1cG/q3p8b47zf/2jAD8udUUzpQy6ewahZEzE1b0ZQnw9q06is',
				'Content-Type':'application/json'
			},

		})
		.then((res)=>{
				// this.setState({loading: true})
			console.log(res.data.message)
			this.props.fetchAllMembers(res.data.message)
			

		})
		.catch((err) => {
			console.log(err)
		})
	}

	UNSAFE_componentWillMount(){
		this.fetchMembers()
	}

	handleSubmit = event => {
		event.preventDefault();
		console.log(members)
	};

	handleChange = event => {
		const { value, name } = event.target;

		this.setState({ [name]: value });
	};

	searchForm = (search) => (
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
	)
	
	render() {
		const { search, loading } = this.state;
		return (
			<React.Fragment>
			{
				loading ? (
					<div className="jumbotron text-center">
						<h2>loading...</h2>
					</div>
				)
				: 
				( " ")
			}
				<div className="member-search">
					{this.searchForm(search)}
				</div>
				<PortfolioCardList />
			</React.Fragment>
		);
	}
}

const mapDispatchToProps = dispatch => ({
	fetchAllMembers: allMembers => dispatch(fetchAllMembers(allMembers))
})

export default connect(
null,
mapDispatchToProps
)( MemberComponent);

