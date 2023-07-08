import PageIntro from "@/components/page-intro";
import ProjectsGrid from "@/components/projects-grid";

export default function ProjectsPage() {
    return (
        <div className="w-full h-full flex flex-col">
            <PageIntro
                title="Projects"
                description="Here are some of my projects"
            />
            <ProjectsGrid
                showTitle={false}
            />
        </div>
    )
}