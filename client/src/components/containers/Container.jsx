import React from "react";
import "./Container.scss";
import { Header } from "../header/Header";
import { Footer } from "../footer/Footer";

export const Container = ({ children }) => {
	return (
		<div className="container-container">
			<Header />

			{children}

			<div className="footer">
				<Footer />
			</div>
		</div>
	);
};
