import React from "react";
import "./Footer.scss";

export const Footer = () => {
	return (
		<div className="footer-container">
			<div className="col1">
				<h5>© EVOLUTION FITNESS</h5>
				<h6>ALL RIGHTS RESERVED</h6>
			</div>
			<div className="col2">
					<img src="/icons/icon1.png" alt="icon" />
					<img src="/icons/icon2.png" alt="icon" />
					<img src="/icons/icon3.png" alt="icon" />
					<img src="/icons/icon4.png" alt="icon" />
			</div>
		</div>
	);
};
