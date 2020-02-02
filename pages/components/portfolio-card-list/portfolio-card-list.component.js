import React from "react";
import Portfolio from "../../components/portfolio/portfolio.component";

const PortfolioCardList = ({ members }) => {
	return (
		<div className="portfolio-list">
			{members.message.map(({ id, ...data }) => (
				<Portfolio key={id} {...data} />
			))}
		</div>
	);
};

export default PortfolioCardList;
