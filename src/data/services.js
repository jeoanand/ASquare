/** @typedef {{ slug: string; icon: string; title: string; shortDescription: string; description: string; metaTitle: string; metaDescription: string; features: string[] }} Service */

/** @type {Service[]} */
export const services = [
	{
		slug: 'infor-xa-erp',
		icon: 'database',
		title: 'Infor XA ERP',
		shortDescription:
			'We support, extend, and modernise Infor XA deployments — including custom modifications, integrations, and stability work.',
		description:
			'ASquare delivers Infor XA ERP expertise—from implementation and integration to ongoing optimization and user support.',
		metaTitle: 'Infor XA ERP Services | ASquare',
		metaDescription:
			'Infor XA ERP implementation, customization, and support from ASquare.',
		features: [
			'Implementation and upgrade planning',
			'Custom development and integrations',
			'Business process optimization',
			'Training and post-go-live support',
		],
	},
	{
		slug: 'web-development',
		icon: 'code-2',
		title: 'Custom Software Development',
		shortDescription:
			'We engineer secure, scalable software — from mission-critical web applications to cross-platform mobile products — built for long-term growth, not just launch day.',
		description:
			'We engineer software that helps businesses operate smarter, move faster, and scale with confidence, turning complex requirements into secure, resilient, high-performing digital solutions.',
		metaTitle: 'Custom Software Development | ASquare',
		metaDescription:
			'Custom software development from ASquare — scalable web and mobile applications engineered for long-term growth, security, and performance.',
		features: [
			'Architectural blueprinting and technology selection',
			'Iterative, sprint-based development',
			'API and enterprise system integration',
			'Cloud deployment and scaling',
		],
	},
	{
		slug: 'power-bi',
		icon: 'bar-chart-3',
		title: 'Data Engineering & Business Intelligence',
		shortDescription:
			'We engineer reliable data pipelines, modern data platforms, and interactive dashboards that turn disconnected information into trusted business intelligence.',
		description:
			'From data pipeline engineering to warehousing, modeling, and BI visualization, we help organizations bring their data together, automate transformations, and give teams the insights they need to make faster, more informed decisions.',
		metaTitle: 'Data Engineering & Business Intelligence | ASquare',
		metaDescription:
			'Data engineering, warehousing, and BI dashboards from ASquare. Turn fragmented data into trusted, actionable business intelligence.',
		features: [
			'Data pipeline engineering and automated ETL',
			'Data warehousing and dimensional modeling',
			'Interactive BI dashboards and KPI reporting',
			'Operational and financial analytics',
		],
	},
	{
		slug: 'cloud-services',
		icon: 'cloud',
		title: 'Cloud & DevOps Engineering',
		shortDescription:
			'We design, automate, and optimize modern cloud environments — architecture, CI/CD automation, containerization, and observability — so teams release faster and operate more reliably.',
		description:
			'From cloud architecture and Infrastructure as Code to CI/CD automation, containerization, monitoring, and security, we build engineering foundations that enable teams to release software faster and operate it more reliably.',
		metaTitle: 'Cloud & DevOps Engineering | ASquare',
		metaDescription:
			'Cloud architecture, CI/CD automation, containerization, and DevSecOps from ASquare. Build, deploy, and operate with confidence.',
		features: [
			'Cloud architecture and Infrastructure as Code',
			'CI/CD pipeline engineering',
			'Docker and Kubernetes orchestration',
			'Observability, security, and DevSecOps',
		],
	},
	{
		slug: 'software-modernization',
		icon: 'refresh-cw',
		title: 'Software Modernization & Refactoring',
		shortDescription:
			'We modernize aging applications, refactor complex architectures, optimize databases, and move legacy workloads toward modern cloud environments.',
		description:
			'Our approach focuses on improving your existing technology without unnecessarily disrupting the business logic and systems your organization already depends on — transforming technical bottlenecks into scalable, maintainable digital platforms.',
		metaTitle: 'Software Modernization & Refactoring | ASquare',
		metaDescription:
			'Legacy system modernization, refactoring, and cloud migration from ASquare. Modernize what works, transform what doesn’t.',
		features: [
			'Architecture audit and modernization roadmap',
			'Monolith decoupling and re-architecture',
			'Database and data performance optimization',
			'Cloud migration and deployment',
		],
	},
	{
		slug: 'it-services',
		icon: 'briefcase',
		title: 'IT Consulting',
		shortDescription:
			'We help IT leadership think through architecture decisions, vendor selection, and systems integration as a technical partner.',
		description:
			'Our IT services help organizations run reliably with proactive monitoring, help desk support, and strategic technology planning.',
		metaTitle: 'IT Services | ASquare',
		metaDescription:
			'Managed IT services, infrastructure support, and technology consulting from ASquare.',
		features: [
			'24/7 monitoring and incident response',
			'Help desk and end-user support',
			'Network and server administration',
			'IT strategy and roadmap planning',
		],
	},
];

/** @param {string} slug */
export function getServiceBySlug(slug) {
	return services.find((service) => service.slug === slug);
}
