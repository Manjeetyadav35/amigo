import React, { useEffect } from "react";
import "./home.css";
import favicon from "../../images/favicon.svg";
import home_ss from "../../images/home_ss.png";
import home_ss_1 from "../../images/home_ss_1.png";
import home_ss_2 from "../../images/home_ss_2.png";
import { Gift, Lock, Smile } from "react-feather";
import Accordian from "../../components/Accordian/Accordian";

const Home = () => {
	useEffect(() => {
		window.scroll(0, 0);
	}, []);
	const homeAboutCards = [
		{
			icon: <Smile />,
			title: "Simple and Intuitive",
			description:
				"Amigo features a minimalistic and clean design, letting you focus on what you feel and want to write.",
			layout: [33, 50, 100],
		},
		{
			icon: <Lock />,
			title: "Private and Secure",
			description:
				"Your data always remains secure. The journal is encrypted with a password and stores in cloud.",
			layout: [33, 50, 100],
		},
		{
			icon: <Gift />,
			title: "Completely free and open source",
			description: (
				<>
					The app is free and open source and it's code can always be
					found on
					<a href="https://github.com/Manjeetyadav35">
						{" "}
						GitHub
					</a>
				</>
			),
			layout: [33, 100, 100],
		},
	];
	return (
		<section className="home">
			<div className="home-hero">
				<div className="home-hero-image">
					<img src={favicon} alt="Amigo" />
				</div>
				<div className="home-hero-title">
					<span>Amigo</span>
				</div>
				<div className="home-hero-subtitle">
					<span>A safe place for all your thoughts</span>
				</div>
			</div>
			<div className="home-ss">
				<img src={home_ss_1} alt="Home Page" />
				<img src={home_ss_2} alt="Home Page" />
			</div>
			<div className="home-about">
				<div className="row">
					{homeAboutCards.map((card, index) => (
						<div
							className={`col-lg-${card.layout[0]} col-md-${card.layout[1]} col-sm-${card.layout[2]}`}
							key={index}
						>
							<div className="home-about-card">
								<div className="home-about-card-icon">
									{card.icon}
								</div>
								<div className="home-about-card-content">
									<span className="home-about-card-content__title">
										{card.title}
									</span>
									<span className="home-about-card-content__description">
										{card.description}
									</span>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
			<div className="home-faq">
			<h1>FAQs</h1>
				<Accordian
					summary="How to log into Amigo?"
					details="To use Amigo, visit the home page, use the navigation manu to navigate to dashboard. Register if you are a new user"
				/>
				<Accordian
					summary="How to write a diary?"
					details="To write a new diary, click on thr edit button in the dashboard. Fill in the details and click on save diary to save the contents to you profile."
				/>
			</div>
		</section>
	);
};

export default Home;
