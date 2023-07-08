import HomeHero from "@/components/home-hero";
import ProjectsGrid from "@/components/projects-grid";

export default function HomePage() {
    return (
        <div className="w-full h-full">
            <HomeHero />
            <ProjectsGrid />
        </div>
    )
}