import React, { useState } from "react";
import Link from "next/link";

import {
	Collapse,
	Navbar,
	NavbarToggler,
	NavbarBrand,
	Nav,
	NavItem,
	NavLink
} from "reactstrap";

const NavBar = props => {
	const [isOpen, setIsOpen] = useState(false);
	const toggle = () => setIsOpen(!isOpen);

	return (
		<Navbar className="shadow" light expand="sm">
			<div className="navbar-brand">
				<Link href="/">
					<a className="navbar-brand">Ogun Tech Community</a>
				</Link>
			</div>
			<NavbarToggler onClick={toggle} />
			<Collapse isOpen={isOpen} navbar>
				<Nav className="ml-auto mt-2 mt-lg-0" navbar>
					<NavItem className="nav-item">
						<Link href="/about">
							<a className="nav-link">About Us</a>
						</Link>
					</NavItem>
					<NavItem className="nav-item">
						<Link href="/team">
							<a className="nav-link">The Team</a>
						</Link>
					</NavItem>
					<NavItem className="nav-item">
						<Link href="/members">
							<a className="nav-link">Members</a>
						</Link>
					</NavItem>
				</Nav>
			</Collapse>
		</Navbar>
	);
};

export default NavBar;
