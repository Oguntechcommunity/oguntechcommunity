import React from "react";

import Card from "../card/card.component";

class CardList extends React.Component {
	constructor() {
		super();

		this.state = {
			cardContent: [
				{
					id: 1,
					title: "Access to Resources",
					image:
						"https://res.cloudinary.com/trapintrovert/image/upload/v1578574040/resources.svg",
					description:
						"Get access to quality resources to progress in your career and also receive regular job updates"
				},
				{
					id: 2,
					title: "Mentorship Opportunity",
					image:
						"https://res.cloudinary.com/trapintrovert/image/upload/v1578574040/mentorship.svg",
					description:
						"Get access to quality resources to progress in your career and also receive regular job updates"
				},
				{
					id: 3,
					title: "Free Workshop & Training",
					image:
						"https://res.cloudinary.com/trapintrovert/image/upload/v1578574041/workshop.svg",
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
