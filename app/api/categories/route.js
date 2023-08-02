import { NextResponse } from "next/server";
import pg from "@/server-utils/pg";

export async function GET(request, context) {
	const categories = await pg.execute(`
		SELECT
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
	
	return NextResponse.json({ categories: categories });
}