import "./portofolio.scss";
import { projects } from "../../assets/contents/projects";
import { Link } from "react-router-dom";
import Toggle from "./Toggle";
import { useState } from "react";

interface projectProps {
	name: string;
	previewText: string;
	previewImage: string;
	id: string;
	skillset: string;
	github?: string;
	deployment?: string;
}

function Project({ name, previewText, previewImage, id, skillset, github, deployment }: projectProps) {
	function getLink(skillset:string) {
		if (skillset === "dev") {
			return (
				<div className="links">
					<a href={deployment} className="btn">Découvrir</a>
					<a href={github} className="underline" target="_blank">Github</a>
				</div>
			)
		}
		else return (
			<Link to={`/projects/${id}`} className="btn">
				En savoir plus
			</Link>
		)
	}

	function getMarkup(string: string) {
		const markup = { __html: string };
		return <p dangerouslySetInnerHTML={markup}></p>
	}
		
	return (
		<div className="project">
			<div className="img shadow">
				<img src={previewImage} alt="" />
			</div>
			<div className="header">
				<h3>{name}</h3>
				{getMarkup(previewText)}
				{getLink(skillset)}
			</div>
		</div>
	);
}

export default function Portofolio() {
	const [relevantSkill, setRelevantSkill] = useState(window.localStorage.getItem('relevantSkill') ?? "dev");
	const [fadeAnimation, setFadeAnimation] = useState< null | string>(null);

	function toggleRelevantSkill() {
		const nextSkill = relevantSkill === "dev" ? "design" : "dev";
		setRelevantSkill(nextSkill);
		window.localStorage.setItem('relevantSkill', nextSkill);
	};

	const relevantProjects = projects.filter((project) => project.skillset === relevantSkill);

	const projectsList = relevantProjects.map((project) => {
		return (
			<Project
				name={project.name}
				previewText={project.previewText}
				previewImage={project.previewImage}
				id={project.id}
				skillset={project.skillset}
				key={project.id}
				github={project.github}
				deployment={project.deployment}
			/>
		);
	});

	return (
		<section id="portofolio">
			<h2 className="h2">Mon portofolio</h2>
			<Toggle toggleRelevantSkill={toggleRelevantSkill} relevantSkill={relevantSkill} setFadeAnimation={setFadeAnimation} />
			<div className={`projects ${fadeAnimation}`}>{projectsList}</div>
		</section>
	);
}
