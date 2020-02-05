import React from "react";
import { connect } from "react-redux";
import Zoom from "react-reveal/Zoom";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import { newsletterSub } from "../../../store/actions/newletterActions";

import "./newsletter.styles.scss";

class Newsletter extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			email: "",
			error: ""
		};
	}

	isValid = () => {
		const { email } = this.state;
		const regex = /\S+@\S+\.\S+/;
		if (!regex.test(email)) {
			this.setState({ error: "A Valid Email is required" });
			return false;
		}
	};

	handleSubmit = event => {
		event.preventDefault();
		const { email } = this.state;

		if (this.isValid()) {
			this.props.newsletterSub({ email });
			this.setState({ email: "" });
		}
	};

	handleChange = event => {
		const { value, name } = event.target;

		this.setState({ [name]: value });
	};

	render() {
		const { email } = this.state;
		return (
			<section className="newsletter">
				<div className="container">
					<div className="row">
						<Zoom>
							<div className="newsletter-container">
								<div className="col-md-6">
									<div className="newsletter-left">
										<h3 className="title">Subscribe to our Newsletter</h3>
										<p className="description">
											Receive update on events and resources directly into your
											inbox
										</p>
									</div>
								</div>
								<div className="col-md-6">
									<div className="newsletter-right">
										<form onSubmit={this.handleSubmit}>
											<div className="input-bg"></div>
											<FormInput
												name="email"
												type="email"
												className="form-control"
												onChange={this.handleChange}
												value={email}
												placeholder="Enter your email"
												required
											/>
											<CustomButton type="submit" className="btn custom-button">
												Subscribe
											</CustomButton>
										</form>
									</div>
								</div>
							</div>
						</Zoom>
					</div>
				</div>
			</section>
		);
	}
}

export default connect(null, { newsletterSub })(Newsletter);
