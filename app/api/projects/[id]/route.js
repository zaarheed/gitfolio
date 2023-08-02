import { NextResponse } from "next/server";
import pg from "@/server-utils/pg";

export async function GET(request, context) {
    const { params } = context;
    const { id } = params;

	const [project] = await pg.execute(`
		SELECT *
		FROM projects
        WHERE id = ${id}
	`);
	
	return NextResponse.json({ project: project });
}