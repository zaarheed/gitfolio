import ExtraProjects from "@/components/home-section/extra-projects";

async function fetchProjects() {
    const res = await fetch(`http://localhost:3000/api/projects`);
    const json = await res.json();
    return json.projects;
}

export default async function ProjectsPage() {
    const projects = await fetchProjects() || [];
    
    return (
        <ExtraProjects projects={projects} />
    )
}