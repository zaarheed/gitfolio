import Link from "next/link";

export default function MainProject(props) {
    const { project } = props;
    const { name, tags = [], description, id, thumburl } = project;

    return (
        <div className="w-full flex flex-row space-x-4">
            <div className="w-6/12 relative">
                <figure className="w-full bg-gray-100 rounded-lg overflow-hidden aspect-square">
                    <img src={thumburl} className="w-full object-cover object-center" />
                </figure>
            </div>
            <div className="relative w-6/12">
                <div className="w-full flex flex-col space-y-3">
                    <p className="font-light text-xl">
                        {name}
                    </p>
                    <p className="font-light uppercase text-sm">
                        {tags.join(", ")}
                    </p>
                    <Link
                        href={`/projects/${id}`}
                        className="w-full font-serif text-3xl cursor-pointer hover:underline"
                    >
                        {description}
                    </Link>
                </div>
            </div>
        </div>
    )
}