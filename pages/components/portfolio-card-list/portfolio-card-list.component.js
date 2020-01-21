import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectCurrentMember } from "../../../redux/member/member.selectors";

import Portfolio from "../../components/portfolio/portfolio.component";

const PortfolioCardList = ({ members }) => {
		
	return (
		<div className="portfolio-list">
			{members.map(({ id, ...otherProps }) => (
				<Portfolio key={id} {...otherProps} />
			))}
		</div>
	);
};
const mapStateToProps = createStructuredSelector({
	members: selectCurrentMember
});

export default connect(mapStateToProps)(PortfolioCardList);
