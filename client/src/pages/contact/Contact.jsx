import React, { useState } from "react";
import "./Contact.scss";
import { Container } from "../../components/containers/Container";
import { Input } from "../../components/input/Input";
import axios from "axios";
import 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from "react-toastify";
import { API } from "../../api";

export const Contact = () => {
	const [temp, setTemp] = useState({});

	const handleChange = (event) => {
		// console.log(event.target.name,'====',event.target.value);
		setTemp((prev) => ({ ...prev, [event.target.name]: event.target.value }));
	};
	console.log(temp);

	const handleSubmit = async () => {
		try {
			console.log(API);
			const response = await axios(`${API}/api/customer`, {
				method: "POST",
				data: temp,
			});
			toast.success( response.data.message, {
				position: "top-center",
				});
			setTemp({});
			console.log(response.data.message);
		} catch (error) {
			// console.log(error.response.data.message);
			toast.error('something went wrong!',{
				position:'top-center'
			})
		}
	};

	return (
		<Container>
			<div className="contact-container">
			<ToastContainer/>
				<div className="col1">
					<div className="form">
						<h4>For any queries</h4>
						<Input type="text" placeholder="Name" name="name" value={temp.name} onChange={handleChange} />
						<Input type="text" placeholder="Email" name="email" value={temp.email} onChange={handleChange} />
						<select name="service" id="service" value={temp.service} onChange={handleChange}>
							<option value="select">Service</option>
							<option value="group fitness classes">Group Fitnes Classes</option>
							<option value="weight training sessions">Weight Training sessions</option>
							<option value="personal training">Personal Training</option>
							<option value="calisthenics">Calisthenics</option>
						</select>
						<Input
							type="text"
							placeholder="Message"
							name="message"
							value={temp.message}
							height="80"
							onChange={handleChange}
						/>

						<button className="submit" onClick={handleSubmit}>
							SUBMIT
						</button>
					</div>
				</div>
				<div className="col2">
					<h4>Get Directions</h4>
					<iframe
						src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1961.7456698953079!2d76.27242632589285!3d10.461878466230623!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba7fa8243d5e6eb%3A0x9496e1214ccaebb5!2sEVOLUTION%20UNISEX%20FITNESS!5e0!3m2!1sen!2sin!4v1698411259611!5m2!1sen!2sin"
						style={{
							width: "600px",
							height: "300px",
							border: "0",
							allowFullScreen: "",
							loading: "lazy",
							color: "black",
							referrerPolicy: "no-referrer-when-downgrade",
						}}
					></iframe>
				</div>
			</div>
		</Container>
	);
};
