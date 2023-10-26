import React from "react";
import "./Header.scss";
import { useNavigate } from "react-router-dom";

export const Header = () => {

	const navigate = useNavigate();

	return (
		<div className="header-container">
			<div className="logo-container" onClick={()=>{navigate('/')}} >
				<img src="/logo/logo1.png" className="logo"  alt="logo" />
				<p>
					Evolution <span>Fitness</span>
				</p>
			</div>
			<ul className="nav-bar">
				<li className="home item" onClick={()=>{navigate('/')}}>Home</li>
				<li className="services item" onClick={()=>{navigate('/services')}}>Services</li>
				<li className="about item"  onClick={()=>{navigate('/about')}}>About</li>
				<li className="contact item" onClick={()=>{navigate('/contact')}}>Contact</li>
			</ul>
		</div>
	);
};
