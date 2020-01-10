import React from "react";
import Zoom from "react-reveal/Zoom";

import Mail from "../../../public/images/mail.png";
import Globe from "../../../public/images/globe.png";

const TeamPortfolio = ({ name, title, image, websiteUrl, email }) => (
	<div
		className="portfolio"
		style={{
			backgroundImage: `url(${image})`
		}}
	>
		<Zoom>
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
		</Zoom>
	</div>
);

export default TeamPortfolio;
