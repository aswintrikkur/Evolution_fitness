import React from "react";
import "./Services.scss";
import { Container } from "../../components/containers/Container";

export const Services = () => {
	return (
		<Container>
			<div className="service-container">
				<div className="view-port-2">
					<div className="title">
						<h3>what we offer</h3>
						<hr />
					</div>

					<div className="services">
						{/* Calisthenics  */}
						<div className="service">
							<div className="card">
								<img src="picture/group_training 1-3.png" alt="group_training" />
							</div>
							<div className="content">
								<h4>Calisthenics </h4>
								<p>
									Calisthenics are exercises that don't rely on anything but body weight. They allow for the
									development of strength, endurance, flexibility, and coordination
								</p>
							</div>
						</div>

						{/* Weight Training Sessions */}
						<div className="service">
							<div className="card">
								<img src="picture/group_training 1-1.png" alt="group_training" />
							</div>
							<div className="content">
								<h4>Weight Training Sessions</h4>
								<p>
									If your fitness goal is to burning down the fat and building muscles, then you better choose
									weight training
								</p>
							</div>
						</div>

						{/* Personal Training  */}
						<div className="service">
							<div className="card">
								<img src="picture/group_training 1-2.png" alt="group_training" />
							</div>
							<div className="content">
								<h4>Personal Training </h4>
								<p>
									When it comes to achieving your fitness goals, sometimes a little personalized guidance can make
									a world of difference
								</p>
							</div>
						</div>

						{/* group-fitness-classed */}
						<div className="service">
							<div className="card">
								<img src="picture/group_training 1.png" alt="group_training" />
							</div>
							<div className="content">
								<h4>Group Fitness Classes</h4>
								<p>
									If you're looking for a fun and motivating way to achieve your fitness goals, look no further
									than the group fitness classes
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Container>
	);
};
