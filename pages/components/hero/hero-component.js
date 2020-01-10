import React, { useState, useEffect, useCallback } from 'react'
import { connect } from "react-redux";

import useForm from "./useForm";
import validate from "./validate";
import { withPreviews, clearPreviews } from './withPreview'


import Dropzone from "react-dropzone";
import Zoom from "react-reveal/Zoom";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import bgImage from "../../../public/images/bg-image.svg";
import cloud from "../../../public/images/cloud.png";

import { registrationSuccess } from "../../../redux/registration/reg.actions";


const INITIAL_STATE = {
		name: "",
		portfolio: "",
		image: "",
		job: "",
		email: ""
}


const Hero = ({ registrationSuccess }) => {

	const {
		handleSubmit,
		handleChange,
		handleBlur,
		values,
		errors,
		isSubmitting
	  } = useForm(INITIAL_STATE, submit, validate); 
	  const [files, setFiles] = useState([])
	  const { name, portfolio, image, job, email } = values;


	  useEffect(() => () => clearPreviews(files), [files])
	
	  const handleDrop = useCallback(accepted =>
		setFiles(files => [...files, ...accepted])
	  )




	function submit() {

		registrationSuccess({ name, portfolio, files, image, job, email });

	}

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
									passionate about solving problems in their immediate
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
										<form onSubmit={handleSubmit} noValidate>
											<div className="content">
												<div className="col-md-6 p-0 order-1">
													<label htmlFor="name">Name</label>
													<FormInput
														name="name"
														value={name}
														onChange={handleChange}
														onBlur={handleBlur}
														type="text"
														className="form-control"
														placeholder="John Doe"
													/>
													{errors.name && <p className="text-danger">{errors.name}</p>}
													<br />
													<label htmlFor="portfolio">Portfolio</label>
													<FormInput
														name="portfolio"
														value={portfolio}
														onChange={handleChange}
														onBlur={handleBlur}
														type="url"
														className="form-control"
														placeholder="https://"
														required
													/>
													{errors.portfolio &&
														<p className="text-danger">{errors.portfolio}</p>
													}
													<br />
													<label htmlFor="image">image</label>
													<FormInput
														name="image"
														value={image}
														onChange={handleChange}
														onBlur={handleBlur}
														type="file"
														className="form-control"
														placeholder="image"
													/>
													{errors.image && 
														<p className="text-danger">{errors.image}</p>
													}
													<br />
													<label htmlFor="job">Job Title</label>
													<FormInput
														name="job"
														type="text"
														value={job}
														onChange={handleChange}
														onBlur={handleBlur}
														className="form-control"
														placeholder="UI Designer"
													/>
													{errors.job && 
														<p className="text-danger">{errors.job}</p>
													}
													<br />
													<label htmlFor="email">Email</label>
													<FormInput
														name="email"
														type="email"
														value={email}
														onChange={handleChange}
														onBlur={handleBlur}
														className="form-control"
														placeholder="john@mail.com"
													/>
													{errors.email &&
														<p className="text-danger">{errors.email}</p>
													}
													<br />
													<CustomButton
														type="submit"
														className="btn custom-button"
														disabled={isSubmitting}
													>
														Request Invite
													</CustomButton>
												</div>
												<div className="col-md-6 p-0 order-2">
													<div className="dropzone-area">
														<Dropzone onDrop={withPreviews(handleDrop)}>
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
														<div className="image-preview">
															{files.map(file => (
																<img
																	key={file.name}
																	src={file.preview}
																	alt=""
																	className="dropped-image"
																/>
															))}
														</div>
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
								<div className="lc-image-container">
									<img
										src="https://res.cloudinary.com/trapintrovert/image/upload/v1576764038/community.jpg"
										alt="community illustration"
										className="community-illustration"
									/>
								</div>
							</div>
						</Zoom>
					</div>
				</div>
			</div>
		</section>
	);
};

const mapDispatchToProps = dispatch => ({
	registrationSuccess: regCredentials =>
		dispatch(registrationSuccess(regCredentials))
});

export default connect(null, mapDispatchToProps)(Hero);
