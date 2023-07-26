export default function ExtraProjects({ projects = [] }) {
    return (
        <div className="w-full grid grid-cols-3 gap-6">
            {projects.map((project) => (<ExtraProject key={project.id} project={project} />))}
        </div>
    )
}

function ExtraProject(props) {
    const { project } = props;
    const { name, tags = [], description } = project;

    return (
        <article className="w-full relative flex flex-col space-y-2">
            <figure className="w-full aspect-square rounded-lg overflow-hidden bg-gray-100">
            </figure>
            <p className="font-light text-xl">
                {name}
            </p>
            <p className="text-xs uppercase font-light">
                {tags.join(", ")}
            </p>
            <p className="w-full font-serif text-xl">
                {description}
            </p>
        </article>
    )
}