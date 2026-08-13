const getRobotsTxt = (sitemapURL) => `User-agent: *
Allow: /

Sitemap: ${sitemapURL.href}
`;

export function GET({ site }) {
	const sitemapURL = new URL('sitemap-index.xml', site);
	return new Response(getRobotsTxt(sitemapURL));
}
