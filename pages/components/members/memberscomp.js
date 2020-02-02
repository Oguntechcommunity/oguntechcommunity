import React from "react";
import { connect } from "react-redux";
import { getUsers } from "../../../store/actions/teamActions";

const MembersComp = props => {
	console.log(props);
	return (
		<div>
			<h1>Hello world !</h1>
		</div>
	);
};

MembersComp.getInitialProps = async ctx => {
	const { users } = await ctx.store.dispatch(getUsers());
	return { users };
};

const mapStateToProps = state => ({
	users: state
});

export default connect(mapStateToProps)(MembersComp);
