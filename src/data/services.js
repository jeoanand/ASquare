/** @typedef {{ slug: string; icon: string; title: string; shortDescription: string; description: string; metaTitle: string; metaDescription: string; features: string[] }} Service */

/** @type {Service[]} */
export const services = [
	{
		slug: 'web-development',
		icon: 'layout',
		title: 'Web Development',
		shortDescription:
			'We build production web applications and internal tools, from Infor XA-integrated portals to standalone SaaS products. .NET, React, and cloud-native by default.',
		description:
			'We design and develop modern web experiences—from marketing sites to complex web applications—using proven frameworks and best practices.',
		metaTitle: 'Web Development Services | ASquare',
		metaDescription:
			'Custom web development for high-performance, accessible websites and applications. ASquare builds solutions tailored to your business.',
		features: [
			'Responsive, mobile-first design',
			'Performance and Core Web Vitals optimization',
			'CMS integration and content workflows',
			'Ongoing maintenance and support',
		],
	},
	{
		slug: 'ai-integration',
		icon: 'brain-circuit',
		title: 'AI Integration',
		shortDescription:
			'We deploy language models and ML pipelines that connect to your existing data infrastructure — not sandboxed demos, but systems that write to your ERP.',
		description:
			'We help you adopt AI responsibly—automating tasks, enhancing decision-making, and embedding intelligent features into your systems.',
		metaTitle: 'AI Integration Services | ASquare',
		metaDescription:
			'Integrate AI into your business with ASquare. Automation, copilots, and intelligent workflows built on your data.',
		features: [
			'Process automation and copilots',
			'LLM and API integration',
			'Data pipeline design for AI workloads',
			'Governance, security, and compliance guidance',
		],
	},
	{
		slug: 'power-bi',
		icon: 'bar-chart-3',
		title: 'Power BI & Analytics',
		shortDescription:
			'We design and maintain Power BI environments that pull directly from Infor XA, Azure, and other operational sources — built for trust.',
		description:
			'From data modeling to executive dashboards, we deliver Power BI solutions that help teams make faster, data-driven decisions.',
		metaTitle: 'Power BI Consulting | ASquare',
		metaDescription:
			'Power BI dashboards, data modeling, and analytics consulting from ASquare.',
		features: [
			'Data modeling and ETL design',
			'Executive and operational dashboards',
			'Report automation and refresh schedules',
			'Training and enablement for your team',
		],
	},
	{
		slug: 'cloud-services',
		icon: 'cloud',
		title: 'Cloud Services',
		shortDescription:
			'We architect, migrate, and manage Azure and AWS environments for production workloads — with a bias toward operational simplicity.',
		description:
			'We plan, migrate, and manage cloud environments with a focus on security, cost efficiency, and operational excellence.',
		metaTitle: 'Cloud Services | ASquare',
		metaDescription:
			'Cloud migration, architecture, and managed services from ASquare. Azure, AWS, and hybrid solutions.',
		features: [
			'Cloud readiness assessments',
			'Migration and modernization',
			'Infrastructure as code and DevOps',
			'Cost optimization and FinOps practices',
		],
	},
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
