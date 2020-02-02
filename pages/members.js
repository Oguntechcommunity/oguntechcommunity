import React from "react";
import { connect } from "react-redux";
import Zoom from "react-reveal/Zoom";
import { getMembers } from "../store/actions/memberActions";
import MemberComponent from "./components/members/members.component";
import Layout from "./components/layout/layout.component";

const Members = props => {
	const { members } = props;
	return (
		<Layout>
			<section className="member">
				<div className="container">
					<div className="row">
						<div className="col">
							<Zoom>
								<h2 className="text-center font-weight-bold my-5">
									Ogun Tech Community Members
								</h2>
							</Zoom>
							<MemberComponent members={members} />
						</div>
					</div>
				</div>
			</section>
		</Layout>
	);
};
Members.getInitialProps = async ctx => {
	const { members } = await ctx.store.dispatch(getMembers());
	return { members };
};

const mapStateToProps = state => ({
	users: state.teamsReducer.members
});

export default connect(mapStateToProps)(Members);
