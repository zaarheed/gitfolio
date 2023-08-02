import ExtraProjects from "@/components/home-section/extra-projects";
import { fetchProjects } from "@/services/fetch";

export default async function ProjectsPage() {
    const projects = await fetchProjects()
    
    return (
        <ExtraProjects projects={projects} />
    )
}