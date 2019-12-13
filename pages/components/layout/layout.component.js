import React from "react";
import Head from "next/head";
import NavBar from "../navbar/navBar.component";
import Newsletter from "../newsletter/newsletter.component";
import Footer from "../footer/footer.component";
import "../../../public/scss/style.scss";

import "./layout.styles.scss";

const Layout = props => (
	<div>
		<Head>
			<title>Home</title>
			<link rel="icon" href="/favicon.ico" />
			<link
				rel="stylesheet"
				href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
			/>
			<link
				href="https://fonts.googleapis.com/css?family=Poppins&display=swap"
				rel="stylesheet"
			></link>
			<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
			<script
				src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"
				integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1"
				crossOrigin="anonymous"
			></script>
			<script
				src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"
				integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM"
				crossOrigin="anonymous"
			></script>
		</Head>
		<NavBar />
		{props.children}
		<Newsletter />
		<Footer />
	</div>
);

export default Layout;
