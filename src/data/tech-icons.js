import azureIcon from '../assets/img/techstack-icons/azure.svg?url';
import awsIcon from '../assets/img/techstack-icons/aws.svg?url';
import dockerIcon from '../assets/img/techstack-icons/docker.svg?url';
import kubernetesIcon from '../assets/img/techstack-icons/kubernetes.svg?url';
import helmIcon from '../assets/img/techstack-icons/Helm.svg?url';
import githubActionsIcon from '../assets/img/techstack-icons/GitHub-Actions.svg?url';
import githubIcon from '../assets/img/techstack-icons/GitHub.svg?url';
import gitlabIcon from '../assets/img/techstack-icons/gitlab.svg?url';
import azureDevopsIcon from '../assets/img/techstack-icons/Azure-Devops.svg?url';
import jenkinsIcon from '../assets/img/techstack-icons/Jenkins.svg?url';
import terraformIcon from '../assets/img/techstack-icons/HashiCorp-Terraform.svg?url';
import ansibleIcon from '../assets/img/techstack-icons/ansible.svg?url';
import dotnetIcon from '../assets/img/techstack-icons/.NET.svg?url';
import nodejsIcon from '../assets/img/techstack-icons/Node.js.svg?url';
import expressIcon from '../assets/img/techstack-icons/Express.svg?url';
import angularIcon from '../assets/img/techstack-icons/angular.svg?url';
import reactIcon from '../assets/img/techstack-icons/React.svg?url';
import nextjsIcon from '../assets/img/techstack-icons/Next.js.svg?url';
import astroIcon from '../assets/img/techstack-icons/Astro.svg?url';
import flutterIcon from '../assets/img/techstack-icons/Flutter.svg?url';
import html5Icon from '../assets/img/techstack-icons/html5.svg?url';
import css3Icon from '../assets/img/techstack-icons/css3.svg?url';
import sassIcon from '../assets/img/techstack-icons/sass.svg?url';
import javascriptIcon from '../assets/img/techstack-icons/javascript.svg?url';
import typescriptIcon from '../assets/img/techstack-icons/TypeScript.svg?url';
import bootstrapIcon from '../assets/img/techstack-icons/Bootstrap.svg?url';
import tailwindIcon from '../assets/img/techstack-icons/tailwindcss.svg?url';
import shadcnIcon from '../assets/img/techstack-icons/shadcnui.svg?url';
import vercelIcon from '../assets/img/techstack-icons/Vercel.svg?url';
import sqlServerIcon from '../assets/img/techstack-icons/microsoft-sql-server.svg?url';
import postgresqlIcon from '../assets/img/techstack-icons/postgresql.svg?url';
import mysqlIcon from '../assets/img/techstack-icons/mysql.svg?url';
import oracleIcon from '../assets/img/techstack-icons/Oracle.svg?url';
import mongodbIcon from '../assets/img/techstack-icons/mongodb.svg?url';
import pythonIcon from '../assets/img/techstack-icons/python.svg?url';
import airflowIcon from '../assets/img/techstack-icons/Apache-Airflow.svg?url';
import sparkIcon from '../assets/img/techstack-icons/Apache-Spark.svg?url';
import powerBiIcon from '../assets/img/techstack-icons/Power-BI.svg?url';
import tableauIcon from '../assets/img/techstack-icons/Tableau.svg?url';
import ibmIcon from '../assets/img/techstack-icons/IBM.svg?url';
import grafanaIcon from '../assets/img/techstack-icons/Grafana.svg?url';
import prometheusIcon from '../assets/img/techstack-icons/Prometheus.svg?url';
import elasticsearchIcon from '../assets/img/techstack-icons/Elastic-Search.svg?url';
import jiraIcon from '../assets/img/techstack-icons/jira.svg?url';
import confluenceIcon from '../assets/img/techstack-icons/Confluence.svg?url';
import slackIcon from '../assets/img/techstack-icons/slack.svg?url';
import sonarqubeIcon from '../assets/img/techstack-icons/SonarQube.svg?url';

/** Maps a tech-stack chip label to a lucide icon name (fallback for items with no brand logo). */
const techIcons = {
	"Microsoft Azure": "cloud",
	Azure: "cloud",
	AWS: "server",
	"Hybrid Cloud": "network",
	Docker: "container",
	Kubernetes: "boxes",
	Helm: "package",
	"GitHub Actions": "workflow",
	GitHub: "folder-git-2",
	"GitLab CI/CD": "git-merge",
	"Azure DevOps": "kanban",
	Jenkins: "settings",
	Terraform: "layers",
	Ansible: "settings-2",
	"Cloud-native IaC tools": "file-code",
	"Application Monitoring": "activity",
	"Infrastructure Monitoring": "monitor",
	"Centralized Logging": "file-text",
	Grafana: "gauge",
	Prometheus: "flame",
	Elasticsearch: "search",
	Jira: "kanban",
	Confluence: "book-open",
	Slack: "message-square",
	SonarQube: "shield-check",
	".NET / ASP.NET Core": "code-2",
	"Node.js": "server",
	"Express.js": "server",
	Angular: "layout-grid",
	React: "atom",
	"Next.js": "triangle",
	Astro: "rocket",
	Flutter: "smartphone",
	HTML5: "file-code",
	CSS3: "palette",
	"Sass / SCSS": "palette",
	JavaScript: "braces",
	TypeScript: "braces",
	Bootstrap: "brush",
	"Tailwind CSS": "wind",
	"shadcn/ui": "component",
	Vercel: "upload-cloud",
	"SQL Server": "database",
	PostgreSQL: "database",
	MySQL: "hard-drive",
	Oracle: "layers",
	MongoDB: "box",
	"SQL / T-SQL": "table-2",
	Python: "code",
	"Apache Airflow": "workflow",
	"Apache Spark": "zap",
	"ETL / ELT": "repeat",
	"REST APIs": "network",
	"Data Warehousing": "archive",
	"Power BI": "bar-chart-3",
	Tableau: "pie-chart",
	"Automated Reporting": "file-text",
	"IBM iSeries (AS/400)": "server",
};

/** Maps a tech-stack chip label to its original brand icon, where one is available. */
const techLogos = {
	"Microsoft Azure": azureIcon,
	Azure: azureIcon,
	AWS: awsIcon,
	Docker: dockerIcon,
	Kubernetes: kubernetesIcon,
	Helm: helmIcon,
	"GitHub Actions": githubActionsIcon,
	GitHub: githubIcon,
	"GitLab CI/CD": gitlabIcon,
	"Azure DevOps": azureDevopsIcon,
	Jenkins: jenkinsIcon,
	Terraform: terraformIcon,
	Ansible: ansibleIcon,
	Grafana: grafanaIcon,
	Prometheus: prometheusIcon,
	Elasticsearch: elasticsearchIcon,
	Jira: jiraIcon,
	Confluence: confluenceIcon,
	Slack: slackIcon,
	SonarQube: sonarqubeIcon,
	".NET / ASP.NET Core": dotnetIcon,
	"Node.js": nodejsIcon,
	"Express.js": expressIcon,
	Angular: angularIcon,
	React: reactIcon,
	"Next.js": nextjsIcon,
	Astro: astroIcon,
	Flutter: flutterIcon,
	HTML5: html5Icon,
	CSS3: css3Icon,
	"Sass / SCSS": sassIcon,
	JavaScript: javascriptIcon,
	TypeScript: typescriptIcon,
	Bootstrap: bootstrapIcon,
	"Tailwind CSS": tailwindIcon,
	"shadcn/ui": shadcnIcon,
	Vercel: vercelIcon,
	"SQL Server": sqlServerIcon,
	PostgreSQL: postgresqlIcon,
	MySQL: mysqlIcon,
	Oracle: oracleIcon,
	MongoDB: mongodbIcon,
	Python: pythonIcon,
	"Apache Airflow": airflowIcon,
	"Apache Spark": sparkIcon,
	"Power BI": powerBiIcon,
	Tableau: tableauIcon,
	"IBM iSeries (AS/400)": ibmIcon,
};

export function getTechIcon(name) {
	return techIcons[name] ?? "cpu";
}

/** Returns the original brand icon URL for a tech-stack chip label, or null if none exists. */
export function getTechLogo(name) {
	return techLogos[name] ?? null;
}
