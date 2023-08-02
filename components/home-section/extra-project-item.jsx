import Link from "next/link";

export default function ExtraProjectItem(props) {
    const { project } = props;
    const { name, tags = [], description, thumburl, id } = project;

    return (
        <Link href={`/projects/${id}/readme`}>
            <article className="w-full relative flex flex-col space-y-2">
                <figure className="w-full aspect-square rounded-lg overflow-hidden bg-gray-100">
                    <img src={thumburl} className="w-full object-cover object-center h-full" />
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
        </Link>
    )
}