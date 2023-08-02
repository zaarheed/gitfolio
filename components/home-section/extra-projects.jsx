import ExtraProjectItem from "./extra-project-item";

export default function ExtraProjects({ projects = [] }) {
    return (
        <div className="w-full grid grid-cols-3 gap-6">
            {projects.map((project) => (
                <ExtraProjectItem key={project.id} project={project} />
            ))}
        </div>
    )
}

