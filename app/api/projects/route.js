import { NextResponse } from "next/server";
import pg from "@/server-utils/pg";

export async function GET(request, context) {
	const projects = await pg.execute(`
		SELECT *
		FROM projects
	`);
	
	return NextResponse.json({ projects: projects });
}

export async function POST(request, context) {
	const contentType = await request.headers.get("content-type");

	if (contentType !== "application/json") {
		return NextResponse.json({ error: "Invalid content type" }, { status: 400 });
	}

	const data = await request.json();
	console.log(data);

	const [result] = await pg.execute(`
		INSERT INTO projects
			(name, description, author, repo, thumburl, category, tags)
		VALUES
			($1, $2, $3, $4, $5, $6, $7)
		RETURNING *
	`, [
		data.name,
		data.description,
		data.author,
		data.repo,
		data.thumburl,
		data.category,
		`{${data.tags}}`
	]);

	return NextResponse.json({ result: result })
}