import React from "react";
import "./Header.scss";

export const Header = () => {
	return (
		<div className="header-container">
			<div className="logo-container" >
				<img src="/logo/logo1.png" className="logo"  alt="logo" />
				<p>
					Evolution <span>Fitness</span>
				</p>
			</div>
			<ul className="nav-bar">
				<li className="home item">Home</li>
				<li className="services item">Services</li>
				<li className="about item">About</li>
				<li className="contact item">Contact</li>
			</ul>
		</div>
	);
};
