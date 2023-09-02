import contents from "@/data/contents";
import repo from "@/data/repo";

export async function fetchProjects() {
    const res = await fetch(`http://localhost:3000/api/projects`);
    const json = await res.json();
    return json.projects;
}

export async function fetchGithubRepo(id) {
    // const res = await fetch(`https://api.github.com/repos/${name}`);
    // const json = await res.json();
    const json = repo;
    return json;
}

export async function fetchProject(id) {
	const res = await fetch(`http://localhost:3000/api/projects/${id}`);
	const json = await res.json();
	return json.project;
}

export async function fetchContents(name) {
    // const res = await fetch(`https://api.github.com/repos/${name}/contents`);
    // const json = await res.json();
    const json = contents;
    return json;
}

export async function fetchSections() {
    const res = await fetch(`http://localhost:3000/api/categories`, { cache: 'no-store' });
    const json = await res.json();
    return json.categories;
}