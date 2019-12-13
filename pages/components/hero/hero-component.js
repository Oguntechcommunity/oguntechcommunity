import React from "react";
import Dropzone from "react-dropzone";
import Zoom from 'react-reveal/Zoom';

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import bgImage from "../../../public/images/bg-image.svg";
import cloud from "../../../public/images/cloud.png";

const emailRegex = RegExp(
	/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
);

const formValid = (formErrors, ...rest) => {
	let valid = true;

	// Validate form errors when empty
	Object.values(formErrors).forEach(val => {
		val.length > 0 && (valid = false);
	});

	Object.values(rest).forEach(val => {
		val == null && (valid = false);
	});

	return valid;
};

class Hero extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			name: "",
			portfolio: "",
			job: "",
			email: "",
			formErrors: {
				name: "",
				portfolio: "",
				job: "",
				email: ""
			}
		};
	}

	handleSubmit = event => {
		event.preventDefault();

		if (formValid(this.state.formErrors)) {
			//Submission condition goes here
		} else {
			// console.error("FORM INVALID - DISPLAY ERROR MESSAGE")
		}
	};

	handleChange = event => {
		event.preventDefault();
		const { value, name } = event.target;

		let formErrors = this.state.formErrors;

		switch (name) {
			case "name":
				formErrors.name =
					value.length < 3 ? " minimum of 3 characters required" : "";
				break;
			case "portfolio":
				formErrors.portfolio =
					value.length < 3 ? "Portfolio link or Github link is required" : "";
				break;
			case "job":
				formErrors.job = value.length < 2 ? "Put a valid job title" : "";
				break;
			case "email":
				formErrors.email = emailRegex.test(value)
					? ""
					: "Invalid email address";
				break;
			default:
				break;
		}
		this.setState({ formErrors, [name]: value });
	};

	render() {
		const { formErrors, name, portfolio, job, email } = this.state;
		return (
			<section className="header">
				<div className="container">
					<div className="row">
						<div className="col-md-6">
							<Zoom>
								<div className="rc">
									<h2 className="rc-heading">
										Connecting the tech professionals in Ogun state
									</h2>
									<p className="rc-paragraph">
										Ogun Tech Community is a circle of technology enthusiasts
										passionate about solving problems in their immedaite
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

							</Zoom>

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
											<form onSubmit={this.handleSubmit}>
												<div className="content">
													<div className="col-md-6 p-0 order-1">
														<label htmlFor="email">Name</label>
														<FormInput
															name="name"
															value={name}
															onChange={this.handleChange}
															type="text"
															className="form-control"
															placeholder="John Doe"
														/>
														{formErrors.name.length > 0 && (
															<span className="text-danger">
																{formErrors.name}
															</span>
														)}
														<br />
														<label htmlFor="email">Portfolio</label>
														<FormInput
															name="portfolio"
															value={portfolio}
															onChange={this.handleChange}
															type="url"
															className="form-control"
															placeholder="https://"
														/>
														{formErrors.portfolio.length > 0 && (
															<span className="text-danger">
																{formErrors.portfolio}
															</span>
														)}
														<br />
														<label htmlFor="email">Job Title</label>
														<FormInput
															name="job"
															type="text"
															value={job}
															onChange={this.handleChange}
															className="form-control"
															placeholder="UI Designer"
														/>
														{formErrors.job.length > 0 && (
															<span className="text-danger">
																{formErrors.job}
															</span>
														)}
														<br />
														<label htmlFor="email">Email</label>
														<FormInput
															name="email"
															type="email"
															value={email}
															onChange={this.handleChange}
															className="form-control"
															placeholder="john@mail.com"
														/>
														{formErrors.email.length > 0 && (
															<span className="text-danger">
																{formErrors.email}
															</span>
														)}
														<br />
														<CustomButton
															type="submit"
															className="btn custom-button"
														>
															Request Invite
														</CustomButton>
													</div>
													<div className="col-md-6 p-0 order-2">
														<div className="dropzone-area">
															<Dropzone>
																{({ getRootProps, getInputProps }) => (
																	<div {...getRootProps()}>
																		<div className="outline">
																			<div className="outline-content">
																				<input {...getInputProps()} />
																				<img src={cloud} alt="Cloud Icon" />
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
											</form>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="col-md-6">
							<Zoom>
								<div className="lc">
									<img src={bgImage} className="lc-bg-image" alt="image" />
									<div className="lc-image-container"></div>
								</div>
							</Zoom>
						</div>
					</div>
				</div>
			</section>
		);
	}
}

export default Hero;
