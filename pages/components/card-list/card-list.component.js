import React from "react";

import Card from "../card/card.component";

import resources from "../../../public/images/resources.svg";
import mentorship from "../../../public/images/mentorship.svg";
import workshop from "../../../public/images/workshop.svg";

class CardList extends React.Component {
	constructor() {
		super();

		this.state = {
			cardContent: [
				{
					id: 1,
					title: "Access to Resources",
					image: `${resources}`,
					description:
						"Get access to quality resources to progress in your career and also receive regular job updates"
				},
				{
					id: 2,
					title: "Mentorship Opportunity",
					image: `${mentorship}`,
					description:
						"Get access to quality resources to progress in your career and also receive regular job updates"
				},
				{
					id: 3,
					title: "Free Workshop & Training",
					image: `${workshop}`,
					description:
						"Get access to quality resources to progress in your career and also receive regular job updates"
				}
			]
		};
	}

	render() {
		const { cardContent } = this.state;
		return (
			<div className="card-list">
				{cardContent.map(({ id, ...otherProps }) => (
					<Card key={id} {...otherProps} />
				))}
			</div>
		);
	}
}

export default CardList;
