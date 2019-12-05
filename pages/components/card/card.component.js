import React from "react";

const Card = ({ image, title, description }) => (
	<div className="card">
		<div className="card-body">
			<img src={image} className="card-image" alt="why join us" />
			<h3 className="title">{title}</h3>
			<p className="description">{description}</p>
		</div>
	</div>
);

export default Card;
