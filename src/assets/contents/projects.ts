export const projects = [
	{
		name: `Run'zik`,
		id: `1`,
		skillset: "design",
		previewText: `Projet de formation pour une marque d'équipements sportifs dont le produit phare est un casque audio à conduction osseuse.`,
		previewImage: `/runzik.jpg`,
		image: `/projects/run-zik-logo.png`,
		description: `Run'Zik est une entreprise fictive dont nous devions réaliser le site internet, les supports de communication, et plus généralement toute la charte graphique, à des fins d'apprentissage dans le cadre de ma formation webdesign UX.
		
		Il s'agissait donc d'une marque d'équipements destinés aux sportifs, qui souhaitait un site à la fois vitrine et e-commerce pour vendre ses trois articles : Un casque à conduction osseuse, une montre connectée et un brassard sportif. L'entreprise ne possédant aucune identité graphique, nous devions nous appuyer sur ses valeurs, établies lors d'un entretien avec les clients incarnés par nos formateurs, pour en créer une en accord avec leur vision.`,
		tools: ["Photoshop", "Illustator", "Figma"],
		workCategory: [
			{
				title: "Recherche",
				works: [
					{
						name: "Moodboard",
						url: "/alliance.jpg",
					},
				],
			},
		],
	},
	{
		name: `Portofolio`,
		id: `2`,
		skillset: "dev",
		previewText: `Projet de formation pour une marque d'équipements sportifs dont le produit phare est un casque audio à conduction osseuse.`,
		previewImage: `/runzik.jpg`,
		image: `/projects/run-zik-logo.png`,
		description: `Run'Zik est une entreprise fictive dont nous devions réaliser le site internet, les supports de communication, et plus généralement toute la charte graphique, à des fins d'apprentissage dans le cadre de ma formation webdesign UX.
		
		Il s'agissait donc d'une marque d'équipements destinés aux sportifs, qui souhaitait un site à la fois vitrine et e-commerce pour vendre ses trois articles : Un casque à conduction osseuse, une montre connectée et un brassard sportif. L'entreprise ne possédant aucune identité graphique, nous devions nous appuyer sur ses valeurs, établies lors d'un entretien avec les clients incarnés par nos formateurs, pour en créer une en accord avec leur vision.`,
		tools: ["Photoshop", "Illustator", "Figma"],
		workCategory: [
			{
				title: "Recherche",
				works: [
					{
						name: "Moodboard",
						url: "/alliance.jpg",
					},
				],
			},
		],
	},
];

export default function getProject(id: string) {
	const project = projects.find((proj) => proj.id === id);
	return project ? project : null;
}
