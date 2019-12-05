import React from "react";

import Devfest from "../../../public/images/devfest.jpg";

const AboutComponent = () => (
	<section className="about">
		<div className="container">
			<div className="row">
				<div className="col-12">
					<h2 className="about-title">About The Community</h2>
					<p>
						A community is a social unit with commonality such as norms,
						religion, values, customs, or identity. Communities may share a
						sense of place situated in a given geographical area or in virtual
						space through communication platforms.
					</p>

					<p>
						A 'tech hub' is a physical space – a city, a suburb or just a suite
						of offices – which has developed to help technology startup
						companies succeed and, they hope, become the next tech titan like
						Facebook or Microsoft.
					</p>

					<p>
						Ogun State is a state in southwestern Nigeria. Created in 1976, it
						borders Lagos State to the south, Oyo and Osun states to the north,
						Ondo to the east and the Republic of Benin to the west. Abeokuta is
						the capital and largest city in the state. The state's appellation
						is "Gateway to Nigeria".
					</p>
					<div className="about-image">
						<img src={Devfest} className="img-top" alt="Image" />
					</div>
					<h1>
						Want to be part of the growing community of tech professionals in
						Abeokuta?
					</h1>
				</div>
			</div>
		</div>
	</section>
);

export default AboutComponent;
