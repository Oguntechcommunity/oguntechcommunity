import React from "react";
import { Button } from "reactstrap";
import "../../public/scss/style.scss";

class Home extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			email: " "
		};
	}
	test = () => {
		this.setState({ email: "abiodun" });
	};
	render() {
		const { email } = this.state;
		return (
			<div>
				<h1 className="title">Welcome to Next.js!</h1>
				<p>This is my email: {email}</p>
				<Button color="danger" onClick={this.test}>
					Danger!
				</Button>
				<p className="description">
					To get started, edit <code>pages/index.js</code> and save to reload.
				</p>
				<p className="example">Hello world</p>

				<div className="row">
					<a href="https://nextjs.org/docs" className="card">
						<h3>Documentation &rarr;</h3>
						<p>Learn more about Next.js in the documentation.</p>
					</a>
					<a href="https://nextjs.org/learn" className="card">
						<h3>Next.js Learn &rarr;</h3>
						<p>Learn about Next.js by following an interactive tutorial!</p>
					</a>
					<a
						href="https://github.com/zeit/next.js/tree/master/examples"
						className="card"
					>
						<h3>Examples &rarr;</h3>
						<p>Find other example boilerplates on the Next.js GitHub.</p>
					</a>
				</div>
			</div>
		);
	}
}

export default Home;
