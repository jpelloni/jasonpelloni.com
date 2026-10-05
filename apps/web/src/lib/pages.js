// Per-page metadata, shared by each route's `metadata` export and llms.txt.
export const pages = {
	home: {
		path: '/',
		title: 'Jason Pelloni — Senior Backend & Cloud Engineer',
		description: 'Senior Backend & Cloud Engineer specializing in AWS serverless architecture, event‑driven systems, microservices, and data pipeline design.',
	},
	about: {
		path: '/about',
		title: 'Jason Pelloni — Professional Experience',
		description: 'Explore the 15+ year professional history of Jason Pelloni, Senior Backend & Cloud Engineer specializing in AWS architecture, microservices, and data pipeline modernization.',
	},
	skills: {
		path: '/skills',
		title: 'Technical Expertise & Skills - Jason Pelloni',
		description: 'Technical expertise of Jason Pelloni — backend architecture, AWS cloud engineering, microservices, data pipelines, modernization, and team leadership.',
	},
	engineeringPhilosophy: {
		path: '/engineering-philosophy',
		title: 'Engineering Philosophy - Jason Pelloni',
		description: "Jason Pelloni's core engineering principles: building systems that scale, endure, and empower teams through operational excellence and pragmatic cloud-native design.",
	},
	projects: {
		path: '/projects',
		title: 'Featured Projects - Jason Pelloni',
		description: "Explore Jason Pelloni's major career projects involving AWS data pipelines, oncology research platforms, and cloud modernization.",
	},
	workWithMe: {
		path: '/work-with-me',
		title: 'Work With Me - Jason Pelloni',
		description: 'Explore engagement models, project interests, and availability to collaborate with Jason Pelloni on backend engineering and AWS architecture.',
	},
};

export const pageMetadata = ({ title, description }) => ({ title, description });
