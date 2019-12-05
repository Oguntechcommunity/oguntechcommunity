import React from "react";
import Dropzone from "react-dropzone";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import bgImage from "../../../public/images/bg-image.svg";
import Cloud from "../../../public/images/cloud.png";

class Hero extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			name: "",
			portfolio: "",
			job: "",
			email: ""
		};
	}

	handleSubmit = event => {
		event.preventDefault();
	};

	handleChange = event => {
		const { value, name } = event.target;

		this.setState({ [name]: value });
	};

	render() {
		return (
			<section className="header">
				<div className="container">
					<div className="row">
						<div className="col-md-6">
							<div className="rc">
								<h2 className="rc-heading">
									Connecting the tech professionals in Ogun state
								</h2>
								<p className="rc-paragraph">
									Ogun Tech Community is a circle of technology enthusiasts
									passionate about solving problems in thier immedaite
									workplace.
								</p>
								<button
									type="button"
									className="rc-button btn"
									data-toggle="modal"
									data-target="#exampleModal"
								>
									Request Invite
								</button>
							</div>

							<div
								className="modal fade"
								id="exampleModal"
								tabIndex="-1"
								role="dialog"
								aria-labelledby="exampleModalLabel"
								aria-hidden="true"
							>
								<div className="modal-dialog" role="document">
									<div className="modal-content">
										<div className="modal-header">
											<h5 className="modal-title" id="exampleModalLabel">
												Request an invite
											</h5>
											<button
												type="button"
												className="close"
												data-dismiss="modal"
												aria-label="Close"
											>
												<span aria-hidden="true">&times;</span>
											</button>
										</div>
										<div className="modal-body">
											<p>
												Feel free to join the community of tech professionals in
												Ogun State today!
											</p>
											<p>
												Please fill out all fields and upload your profile photo
												so that we know you’ve got what it takes.
											</p>
											<div className="content">
												<div className="col-md-6 p-0 order-1">
													<form onSubmit={this.handleSubmit}>
														<label htmlFor="email">Name</label>
														<FormInput
															name="name"
															value={this.state.name}
															handleChange={this.handleChange}
															type="text"
															className="form-control"
															placeholder="John Doe"
														/>
														<label htmlFor="email">Portfolio</label>
														<FormInput
															name="portfolio"
															value={this.state.portfolio}
															handleChange={this.handleChange}
															type="url"
															className="form-control"
															placeholder="https://"
														/>
														<label htmlFor="email">Job Title</label>
														<FormInput
															name="job"
															type="text"
															value={this.state.job}
															handleChange={this.handleChange}
															className="form-control"
															placeholder="UI Designer"
														/>
														<label htmlFor="email">Email</label>
														<FormInput
															name="email"
															type="email"
															value={this.state.email}
															handleChange={this.handleChange}
															className="form-control"
															placeholder="john@mail.com"
														/>
														<CustomButton
															type="submit"
															className="btn custom-button"
														>
															Request Invite
														</CustomButton>
													</form>
												</div>
												<div className="col-md-6 p-0 order-2">
													<div className="dropzone-area">
														<Dropzone>
															{({ getRootProps, getInputProps }) => (
																<div {...getRootProps()}>
																	<div className="outline">
																		<div className="outline-content">
																			<input {...getInputProps()} />
																			<img src={Cloud} alt="Cloud Icon" />
																			<br />
																			Drag and drop here <br />
																			or
																			<br /> <span>browse</span>
																		</div>
																	</div>
																</div>
															)}
														</Dropzone>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="col-md-6">
							<div className="lc">
								<img src={bgImage} className="lc-bg-image" alt="image" />
								<div className="lc-image-container"></div>
							</div>
						</div>
					</div>
				</div>
			</section>
		);
	}
}

export default Hero;
