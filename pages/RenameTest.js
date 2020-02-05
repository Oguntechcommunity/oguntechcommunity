import Link from "next/link";
import { connect } from "react-redux";
import React from "react";
// import axios from 'axios';

// import Layout from "../components/MyLayout";

import { getUsers } from "../store/actions/teamActions";

const User = ({ user }) => (
	<li>
		{/* <Link as={`/u/${user.id}`} href={`/user?id=${user.id}`}> */}
		<a>{user.full_name}</a>
		{/* </Link> */}
	</li>
);

const Test = props => {
	const { users } = props;
	console.log(users);
	return (
		<div>
			<h1>Users</h1>
			<ul>
				{users && users.message.map(user => <User key={user.id} user={user} />)}
			</ul>
		</div>
	);
};

// export default Test;

Test.getInitialProps = async ctx => {
	const { users } = await ctx.store.dispatch(getUsers());
	return { users };
};

const mapStateToProps = state => ({
	users: state.teamsReducer.users
});

export default connect(mapStateToProps)(Test);
