import React from "react";
import "./About.scss";
import { Container } from "../../components/containers/Container";

export const About = () => {
	return (
		<Container>
			<div className="about-container">
				<div className="body">
					<div className="item">
						<h4 className="title">About Evolution Fitness</h4>
						<p className="description">
							At Evolution Fitness, we believe in the transformative power of fitness. Our mission is to help you
							evolve into the healthiest, happiest, and strongest version of yourself.
						</p>
					</div>

					<div className="item">
						<h4 className="title">Who We Are</h4>
						<p className="description">
							We are not just a gym; we are a community of individuals committed to wellness and personal growth.
							With a team of certified trainers and a state-of-the-art facility, we provide the tools and support you
							need to reach your fitness goals.
						</p>
					</div>

					<div className="item">
						<h4 className="title">Join Our Evolution</h4>
						<p className="description">
							Whether you're just starting your fitness journey or looking for a new home for your workouts,
							Evolution Fitness welcomes you with open arms. We are committed to your well-being, and we can't wait
							to help you write your own success story.
						</p>
					</div>
				</div>
			</div>
		</Container>
	);
};
