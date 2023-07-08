import { fetchProjects } from "@/services/fetch";
import ProjectItem from "./project-item";

export default async function ProjectsGrid({ showTitle = true }) {
    const projects = await fetchProjects();

    return (
        <section className="default-section">
            <div className="w-full max-w-6xl mx-auto flex flex-col">
                {showTitle && (
                    <p className="text-2xl mb-2">
                        My Projects
                    </p>
                )}
                <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-8">
                    {projects.map((project, index) => <ProjectItem key={index} project={project} />)}
                </div>
            </div>
        </section>
    )
}