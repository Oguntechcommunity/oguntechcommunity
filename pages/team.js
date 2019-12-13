import React from "react";
import Zoom from 'react-reveal/Zoom';

import PortfolioCardList from "./components/portfolio-card-list/portfolio-card-list.component";
import Layout from "./components/layout/layout.component";

const Team = () => (
	<Layout>
		<section className="team">
			<div className="container">
				<div className="row">
					<div className="col">
						<Zoom>
							<h2 className="text-center font-weight-bold my-5">
								Ogun Tech Community Team
							</h2>
						</Zoom>
						<PortfolioCardList />
					</div>
				</div>
			</div>
		</section>
	</Layout>
);

export default Team;
