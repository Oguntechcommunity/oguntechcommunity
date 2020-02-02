import React from "react";
import { connect } from "react-redux";
import axios from "axios";

import useForm from "./useForm";
import validate from "./validate";

import Zoom from "react-reveal/Zoom";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import bgImage from "../../../public/images/bg-image.svg";

// import { registrationSuccess } from "../../../redux/registration/reg.actions";

const INITIAL_STATE = {
	full_name: "",
	job_title: "",
	portfolio: "",
	email_address: "",
	avatar: ""
};

const Hero = ({ registrationSuccess }) => {
	const {
		handleSubmit,
		handleChange,
		handleBlur,
		values,
		errors,
		isSubmitting
	} = useForm(INITIAL_STATE, submit, validate);

	const { full_name, job_title, portfolio, email_address, avatar } = values;

	function submit() {
		const userObject = {
			full_name,
			job_title,
			portfolio,
			email_address,
			avatar
		};
		axios({
			method: "POST",
			url: `${process.env.REACT_APP_API_URL}/user`,
			headers: {
				Authorization:
					"Bearer 2d662d4d3b86df2697c87a5a88764627A+CvuYJLmEHSWmE1cG/q3p8b47zf/2jAD8udUUzpQy6ewahZEzE1b0ZQnw9q06is",
				"Content-Type": "application/json"
			},
			body: JSON.stringify(userObject)
		})
			.then(res => {
				console.log(res.data);
				console.log(userObject);
				registrationSuccess({ userObject });
			})
			.catch(err => {
				console.log();
			});
	}

	const modalContent = (
		full_name,
		job_title,
		portfolio,
		email_address,
		avatar,
		handleSubmit,
		handleChange,
		handleBlur,
		errors,
		isSubmitting
	) => (
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
							Feel free to join the community of tech professionals in Ogun
							State today!
						</p>
						<p>
							Please fill out all fields and upload your profile photo so that
							we know you’ve got what it takes.
						</p>
						<form onSubmit={handleSubmit} noValidate>
							<div className="content">
								<div className="col-md-6 pl-2 order-1">
									<label htmlFor="name">Name</label>
									<FormInput
										name="full_name"
										value={full_name}
										onChange={handleChange}
										onBlur={handleBlur}
										type="text"
										className="form-control"
										placeholder="John Doe"
									/>
									{errors.full_name && (
										<p className="text-danger">{errors.full_name}</p>
									)}
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
									{errors.portfolio && (
										<p className="text-danger">{errors.portfolio}</p>
									)}
									<br />

									<label htmlFor="job">Job Title</label>
									<FormInput
										name="job_title"
										type="text"
										value={job_title}
										onChange={handleChange}
										onBlur={handleBlur}
										className="form-control"
										placeholder="UI Designer"
									/>
									{errors.job_title && (
										<p className="text-danger">{errors.job_title}</p>
									)}

									<br />
								</div>
								<div className="col-md-6 pl-2 order-2">
									<label htmlFor="image">image</label>
									<FormInput
										name="avatar"
										value={avatar}
										onChange={handleChange}
										onBlur={handleBlur}
										type="file"
										className="form-control"
										placeholder="image"
									/>
									{errors.avatar && (
										<p className="text-danger">{errors.avatar}</p>
									)}

									<br />
									<label htmlFor="email">Email</label>
									<FormInput
										name="email_address"
										type="email"
										value={email_address}
										onChange={handleChange}
										onBlur={handleBlur}
										className="form-control"
										placeholder="john@mail.com"
									/>
									{errors.email_address && (
										<p className="text-danger">{errors.email_address}</p>
									)}
								</div>
							</div>
							<CustomButton
								type="submit"
								className="btn custom-button"
								disabled={isSubmitting}
							>
								Request Invite
							</CustomButton>
						</form>
					</div>
				</div>
			</div>
		</div>
	);

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
						{modalContent(
							full_name,
							job_title,
							portfolio,
							email_address,
							avatar,
							handleSubmit,
							handleChange,
							handleBlur,
							errors,
							isSubmitting
						)}
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
