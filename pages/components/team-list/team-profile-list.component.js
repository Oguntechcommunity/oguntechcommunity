import React from "react";
import { connect } from "react-redux";

import { createStructuredSelector } from "reselect";

import { selectCurrentTeam } from "../../../redux/team/team.selectors";

import TeamPortfolio from "../team/team-profile.component";

const TeamProfileList = ({ teams }) => (
	<div className="portfolio-list">
		{teams.map(({ id, ...otherProps }) => (
			<TeamPortfolio key={id} {...otherProps} />
		))}
	</div>
);

const mapStateToProps = createStructuredSelector({
	teams: selectCurrentTeam
});

export default connect(mapStateToProps)(TeamProfileList);
