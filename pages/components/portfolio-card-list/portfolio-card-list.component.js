import React from "react";

import Portfolio from "../../components/portfolio/portfolio.component";

import Image1 from "../../../public/images/image1.png";
import Image2 from "../../../public/images/image2.png";
import Image3 from "../../../public/images/image3.png";
import Image4 from "../../../public/images/image4.png";
import Image5 from "../../../public/images/image5.png";
import Image6 from "../../../public/images/image6.png";

class PortfolioCardList extends React.Component {
	constructor() {
		super();

		this.state = {
			portfolioContent: [
				{
					id: 1,
					name: "Soliudeen Ogunsola",
					title: "Product Designer",
					image: `${Image1}`,
					websiteUrl: "https://github.com/Trapintrovert",
					email: "email@mail.com"
				},
				{
					id: 2,
					name: "Soliudeen Ogunsola",
					title: "Product Designer",
					image: `${Image2}`,
					websiteUrl: "https://github.com/Trapintrovert",
					email: "email@mail.com"
				},
				{
					id: 3,
					name: "Soliudeen Ogunsola",
					title: "Product Designer",
					image: `${Image3}`,
					websiteUrl: "https://github.com/Trapintrovert",
					email: "email@mail.com"
				},
				{
					id: 4,
					name: "Soliudeen Ogunsola",
					title: "Product Designer",
					image: `${Image4}`,
					websiteUrl: "https://github.com/Trapintrovert",
					email: "email@mail.com"
				},
				{
					id: 5,
					name: "Soliudeen Ogunsola",
					title: "Product Designer",
					image: `${Image5}`,
					websiteUrl: "https://github.com/Trapintrovert",
					email: "email@mail.com"
				},
				{
					id: 6,
					name: "Soliudeen Ogunsola",
					title: "Product Designer",
					image: `${Image6}`,
					websiteUrl: "https://github.com/Trapintrovert",
					email: "email@mail.com"
				}
			]
		};
	}

	render() {
		const { portfolioContent } = this.state;
		return (
			<div className="portfolio-list">
				{portfolioContent.map(({ id, ...otherProps }) => (
					<Portfolio key={id} {...otherProps} />
				))}
			</div>
		);
	}
}

export default PortfolioCardList;
