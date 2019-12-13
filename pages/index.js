import React from "react";
import Zoom from 'react-reveal/Zoom';

import Hero from "./components/hero/hero-component";
import CardList from "./components/card-list/card-list.component";
import Layout from "./components/layout/layout.component";

const Index = () => (
	<Layout>
		<Hero />
		<section className="cards">
			<div className="section-title">
				<div className="container">
					<div className="row">
						<div className="col">
							<Zoom>
								<div className="cards-content">
									<div className="card-bh-container">
										<div className="cards-bh-under"></div>
										<div className="cards-bh">
											<h2 className="text-center">Why Join us?</h2>
										</div>
									</div>
								</div>
							</Zoom>
						</div>
					</div>
				</div>
			</div>
			<div className="section-card">
				<div className="container">
					<div className="row">
						<div className="col">
							<Zoom>
								<CardList />
							</Zoom>
						</div>
					</div>
				</div>
			</div>
		</section>

		<section className="community">
			<div className="section-title">
				<div className="container">
					<div className="row">
						<div className="col">
							<Zoom>
								<div className="cards-content">
									<div className="card-bh-container">
										<div className="cards-bh-under"></div>
										<div className="cards-bh">
											<h2 className="text-center">Community Overview</h2>
										</div>
									</div>
								</div>
							</Zoom>
						</div>
					</div>
				</div>
			</div>
			<div className="section-community">
				<div className="container">
					<div className="row">
						<div className="col-md-3 offset-lg-1">
							<Zoom>
								<div
									className="nav flex-column nav-pills"
									id="v-pills-tab"
									role="tablist"
									aria-orientation="vertical"
								>
									<a
										className="nav-link active"
										id="v-pills-se-tab"
										data-toggle="pill"
										href="#v-pills-se"
										role="tab"
										aria-controls="v-pills-se"
										aria-selected="true"
									>
										Software Engineering
									</a>
									<a
										className="nav-link"
										id="v-pills-design-tab"
										data-toggle="pill"
										href="#v-pills-design"
										role="tab"
										aria-controls="v-pills-design"
										aria-selected="false"
									>
										Design
									</a>
									<a
										className="nav-link"
										id="v-pills-dm-tab"
										data-toggle="pill"
										href="#v-pills-dm"
										role="tab"
										aria-controls="v-pills-dm"
										aria-selected="false"
									>
										Digital Marketing
									</a>
									<a
										className="nav-link"
										id="v-pills-cw-tab"
										data-toggle="pill"
										href="#v-pills-cw"
										role="tab"
										aria-controls="v-pills-settings-cw"
										aria-selected="false"
									>
										Content Writing
									</a>
								</div>
							</Zoom>
						</div>
						<div className="col-md-7 offset-lg-1">
							<Zoom>
								<div className="tab-content" id="v-pills-tabContent">
									<div
										className="tab-pane fade show active"
										id="v-pills-se"
										role="tabpanel"
										aria-labelledby="v-pills-se-tab"
									>
										<div className="video-container">
											<div className="video-bg"></div>
											<div className="video">
												<iframe
													width="560"
													height="315"
													src="https://www.youtube.com/embed/IzJzUruMpeE"
													frameBorder="0"
													allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
													allowFullScreen
												></iframe>
											</div>
											<div className="video-info">
												<h3 className="video-title">
													Introduction to Software Engineering
												</h3>
												<p className="video-description">Google</p>
											</div>
										</div>
									</div>
									<div
										className="tab-pane fade"
										id="v-pills-design"
										role="tabpanel"
										aria-labelledby="v-pills-design-tab"
									>
										<div className="video-container">
											<div className="video-bg"></div>
											<div className="video">
												<iframe
													width="560"
													height="315"
													src="https://www.youtube.com/embed/IzJzUruMpeE"
													frameBorder="0"
													allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
													allowFullScreen
												></iframe>
											</div>
											<div className="video-info">
												<h3 className="video-title">
													Introduction to Software Engineering
												</h3>
												<p className="video-description">Google</p>
											</div>
										</div>
									</div>
									<div
										className="tab-pane fade"
										id="v-pills-dm"
										role="tabpanel"
										aria-labelledby="v-pills-dm-tab"
									>
										<div className="video-container">
											<div className="video-bg"></div>
											<div className="video">
												<iframe
													width="560"
													height="315"
													src="https://www.youtube.com/embed/IzJzUruMpeE"
													frameBorder="0"
													allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
													allowFullScreen
												></iframe>
											</div>
											<div className="video-info">
												<h3 className="video-title">
													Introduction to Software Engineering
												</h3>
												<p className="video-description">Google</p>
											</div>
										</div>
									</div>
									<div
										className="tab-pane fade"
										id="v-pills-cw"
										role="tabpanel"
										aria-labelledby="v-pills-cw-tab"
									>
										<div className="video-container">
											<div className="video-bg"></div>
											<div className="video">
												<iframe
													width="560"
													height="315"
													src="https://www.youtube.com/embed/IzJzUruMpeE"
													frameBorder="0"
													allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
													allowFullScreen
												></iframe>
											</div>
											<div className="video-info">
												<h3 className="video-title">
													Introduction to Software Engineering
												</h3>
												<p className="video-description">Google</p>
											</div>
										</div>
									</div>
								</div>
							</Zoom>
						</div>
					</div>
				</div>
			</div>
		</section>
	</Layout>
);

export default Index;
