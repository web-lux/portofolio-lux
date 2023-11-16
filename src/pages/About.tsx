import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Portofolio from "./components/Portofolio";
import Contact from "./components/Contact";
import "./about.scss";

function About() {
	return (
		<main>
			<Hero />
			<Skills />
			<Portofolio />
			<Contact />
		</main>
	);
}

export default About;
