import React from "react";
import Link from "next/link";

const Nav = () => (
	<nav className="navbar navbar-expand-sm shadow">
		<div className="container">
			<Link href="/">
				<a className="navbar-brand">Ogun Tech Community</a>
			</Link>
			<button
				className="navbar-toggler "
				data-toggle="collapse"
				data-target="#collapsibleNavId"
			>
				<span className="navbar-toggler-icon"></span>
			</button>
			<div className="collapse navbar-collapse" id="collapsibleNavId">
				<ul className="navbar-nav ml-auto mt-2 mt-lg-0">
					<li className="nav-item">
						<Link href="/about">
							<a className="nav-link">About Us </a>
						</Link>
					</li>
					<li className="nav-item">
						<Link href="/team">
							<a className="nav-link">The Team </a>
						</Link>
					</li>
					<li className="nav-item">
						<Link href="/members">
							<a className="nav-link">Members </a>
						</Link>
					</li>
				</ul>
			</div>
		</div>
	</nav>
);

export default Nav;
