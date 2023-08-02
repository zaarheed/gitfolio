import { NextResponse } from "next/server";
import pg from "@/server-utils/pg";

export async function GET(request, context) {
	const projects = await pg.execute(`
		SELECT *
		FROM projects
	`);
	
	return NextResponse.json({ projects: projects });
}