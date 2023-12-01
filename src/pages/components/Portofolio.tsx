import "./portofolio.scss";
import { projects } from "../../assets/contents/projects";
import { Link } from "react-router-dom";
import Toggle from "./Toggle";

interface projectProps {
	name: string;
	previewText: string;
	previewImage: string;
	id: string;
}

function Project({ name, previewText, previewImage, id }: projectProps) {
	return (
		<div className="project">
			<div className="img shadow">
				<img src={previewImage} alt="" />
			</div>
			<div className="header">
				<h3>{name}</h3>
				<p>{previewText}</p>
				<Link to={`/projects/${id}`} className="btn">
					En savoir plus
				</Link>
			</div>
		</div>
	);
}

export default function Portofolio() {
	const projectsList = projects.map((project) => {
		return (
			<Project
				name={project.name}
				previewText={project.previewText}
				previewImage={project.previewImage}
				id={project.id}
			/>
		);
	});

	return (
		<section id="portofolio">
			<h2 className="h2">Mon portofolio</h2>
			<Toggle />
			<div className="projects">{projectsList}</div>
		</section>
	);
}
