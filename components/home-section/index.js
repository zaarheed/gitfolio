import ExtraProjects from "./extra-projects";
import MainProject from "./main-project";
import repo from "@/data/repo";

export default function HomeSection(props) {
    const { section } = props;
    const { title, description, projects = [] } = section;
    const [mainProject, ...extraProjects] = projects;

    return (
        <section className="w-full">
            <div className="w-full max-w-5xl mx-auto flex flex-col py-12 px-4">
                <p className="text-lg font-light font-sans">
                    {title}
                </p>
                <p className="text-3xl font-serif font-light">
                    {description}
                </p>
                <hr className="border-black w-full my-6" />
                <MainProject project={mainProject} />
                <div className="my-6" />
                <ExtraProjects projects={extraProjects.map(d => ({ ...repo, ...d }))} />
            </div>
        </section>
    );
}