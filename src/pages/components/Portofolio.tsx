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
		
	return (
		<div className="project">
			<div className="img shadow">
				<img src={previewImage} alt="" />
			</div>
			<div className="header">
				<h3>{name}</h3>
				<p>{previewText}</p>
				{getLink(skillset)}
			</div>
		</div>
	);
}

export default function Portofolio() {
	const [relevantSkill, setRelevantSkill] = useState("dev");
	const [animation, setAnimation] = useState<undefined | string>(undefined);

	function updateRelevantSkill() {
	setAnimation("fade-out");
	setTimeout(() => {
		setRelevantSkill(relevantSkill === "dev" ? "design" : "dev");
		setAnimation("fade-in")
	}, 1000)
	}

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
			<Toggle updateRelevantSkill={updateRelevantSkill} />
			<div className={`projects ${animation ? animation : ""}`}>{projectsList}</div>
		</section>
	);
}
