export default function MainProject(props) {
    const { project } = props;
    const { name, tags = [], description, slug, thumbUrl } = project;

    return (
        <div className="w-full flex flex-row space-x-4">
            <div className="w-6/12 relative">
                <figure className="w-full bg-gray-100 rounded-lg overflow-hidden aspect-video">
                    <img src={thumbUrl} className="w-full object-cover object-center" />
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
                    <p className="w-full font-serif text-3xl">
                        {description}
                    </p>
                </div>
            </div>
        </div>
    )
}