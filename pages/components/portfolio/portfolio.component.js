import React from "react";

import Mail from "../../../public/images/mail.png";
import Globe from "../../../public/images/globe.png";

const Portfolio = ({ name, title, image, websiteUrl, email }) => (
	<div
		className="portfolio"
		style={{
			backgroundImage: `url(${image})`
		}}
	>
		<div className="overlay">
			<h3 className="portfolio-name">{name}</h3>
			<p className="portfolio-title">{title}</p>
			<div className="icons">
				<a href={websiteUrl}>
					<img src={Globe} alt="Personal Website or Git" />
				</a>
				<a href={`mailto:${email}`}>
					<img src={Mail} alt="email" />
				</a>
			</div>
		</div>
	</div>
);

export default Portfolio;
