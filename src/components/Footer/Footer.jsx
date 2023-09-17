import React, { useState } from "react";
import { Facebook, GitHub, Instagram, Linkedin } from "react-feather";
import waves from "../../images/waves.svg";
import laptop from "../../images/laptop.svg";
import "./footer.css";
import Button from "../Button/Button";
import emailjs from "emailjs-com";

const Footer = () => {
	const [user, setUser] = useState({
		name: "",
		email: "",
		message: "",
	});
	const handleChange = (e) => {
		const { name, value } = e.target;
		setUser({
			...user,
			[name]: value,
		});
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(user);
		emailjs
			.sendForm(
				process.env.REACT_APP_SERVICE,
				process.env.REACT_APP_TEMPLATE,
				e.target,
				process.env.REACT_APP_USER
			)
			.then((res) => console.log(res))
			.catch((err) => console.log(err));
		setUser({
			name: "",
			email: "",
			message: "",
		});
	};
	const handleReset = () => {
		setUser({
			name: "",
			email: "",
			message: "",
		});
	};
	return (
		<footer
			className="footer"
			style={{
				backgroundImage: `url(${waves})`,
			}}
		>
			<div className="footer-top">
				<div className="footer-top-image">
					<img src={laptop} alt="Men on Laptop" />
				</div>
				<div className="footer-top-content">
					<h2>Contact Us</h2>
					<form
						className="footer-top-form"
						onReset={handleReset}
						onSubmit={handleSubmit}
					>
						<div className="footer-top-form-inputs">
							<div className="footer-top-form-group">
								<input
									type="text"
									placeholder="Enter your name"
									name="name"
									value={user.name}
									onChange={handleChange}
								/>
								<input
									type="email"
									placeholder="Enter your email"
									name="email"
									value={user.email}
									onChange={handleChange}
								/>
							</div>
							<div className="footer-top-form-group">
								<textarea
									type="email"
									placeholder="Your message"
									name="message"
									value={user.message}
									onChange={handleChange}
								></textarea>
							</div>
						</div>
						<div className="footer-top-form-buttons">
							<Button text="Cancel" type="reset" />
							<Button text="Submit" type="submit" />
						</div>
					</form>
				</div>
			</div>
			<div className="footer-bottom">
				<div className="footer-bottom-github">
					<div>Thanks for being with us</div>
					<div>-Manjeet Yadav</div>
					<div>
						
					</div>
				</div>
				<div className="footer-bottom-socials">
					<a href="https://github.com/Manjeetyadav35">
						<GitHub />
					</a>
					<a href="https://www.linkedin.com/in/manjeet-yadav-a813b6239/">
						<Linkedin />
					</a>
					<a href="https://www.instagram.com/manjeet__72">
						<Instagram />
					</a>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
