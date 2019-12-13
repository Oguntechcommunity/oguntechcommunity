import React from "react";
import Zoom from 'react-reveal/Zoom';

import MemberComponent from "./components/members/members.component";
import Layout from "./components/layout/layout.component";

const Members = () => (
	<Layout>
		<section className="member">
			<div className="container">
				<div className="row">
					<div className="col">
						<Zoom>
							<h2 className="text-center font-weight-bold my-5">
								Ogun Tech Community Members
							</h2>
						</Zoom>
						<MemberComponent />
					</div>
				</div>
			</div>
		</section>
	</Layout>
);

export default Members;
