import React from "react";
import Link from "next/link";

import Instagram from "../../../public/images/instagram.png";
import Twitter from "../../../public/images/twitter.png";

import "./footer.styles.scss";

const Year = new Date();

const Footer = () => (
	<section className="footer shadow-footer">
		<nav className="navbar">
			<div className="container">
				<Link href="/">
					<a className="navbar-brand">Ogun Tech Community</a>
				</Link>
				<ul className="navbar-nav">
					<li className="nav-item">
						<Link href="/components/about/about.component" as="/about">
							<a className="nav-link">About Us </a>
						</Link>
					</li>
					<li className="nav-item">
						<Link href="/components/team/team.component" as="/team">
							<a className="nav-link">The Team </a>
						</Link>
					</li>
					<li className="nav-item">
						<Link href="/components/members/members.component" as="/members">
							<a className="nav-link">Members </a>
						</Link>
					</li>
				</ul>
			</div>
		</nav>
		<div className="container">
			<div className="row">
				<div className="col-md-6 order-1">
					<p className="copyright">
						{" "}
						© {Year.getFullYear()} Ogun Tech Community. All rights reserved.
					</p>
				</div>
				<div className="col-md-6 order-2">
					<div className="icon">
						<Link href="/">
							<img src={Twitter} className="icon-img" alt="Twitter Icon" />
						</Link>
						<Link href="/">
							<img src={Instagram} className="icon-img" alt="Instagram Icon" />
						</Link>
					</div>
				</div>
			</div>
		</div>
	</section>
);

export default Footer;
