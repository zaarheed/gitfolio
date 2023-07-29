import HomeSection from "@/components/home-section";
import _sections from "@/data/sections";
import pg from "@/server-utils/pg";

async function getSections() {
	const sections = await pg.execute(`SELECT
    c.*,
    JSON_AGG(json_build_object(
        'author', p.author,
        'repo', p.repo,
        'thumbUrl', p.thumbUrl,
        'name', p.name,
        'tags', p.tags,
        'description', p.description,
		'is_featured', p.is_featured
    ) ORDER BY is_featured DESC) AS projects
FROM
    categories AS c
LEFT JOIN
    projects AS p
ON
    c.title = p.category
GROUP BY
    c.id, c.title, c.description
`);
	return sections;
}

export default async function HomePage() {
	const sections = await getSections() || [];

	return (
		<div>
			{sections.map((section) => (<HomeSection key={section.id} section={section} />))}
		</div>
	)
}
