import React from "react";
import Zoom from "react-reveal/Zoom";

import Mail from "../../../public/images/mail.png";
import Globe from "../../../public/images/globe.png";
import Avatar from "../../../public/images/avatar.png";

const Portfolio = ({
	full_name,
	job_title,
	avatar,
	portfolio,
	email_address
}) => {
	const image = avatar == "" ? Avatar : avatar;
	return (
		<div
			className="portfolio"
			style={{
				objectFit: "cover",
				backgroundSize: "contain",
				backgroundImage: `url(${Avatar})`
			}}
		>
			<Zoom>
				<div className="overlay">
					<h3 className="portfolio-name">{full_name}</h3>
					<p className="portfolio-title">{job_title}</p>
					<div className="icons">
						<a href={portfolio}>
							<img src={Globe} alt="Personal Website or Git" />
						</a>
						<a href={`mailto:${email_address}`}>
							<img src={Mail} alt="email" />
						</a>
					</div>
				</div>
			</Zoom>
		</div>
	);
};

export default Portfolio;
