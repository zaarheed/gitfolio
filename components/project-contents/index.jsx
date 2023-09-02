import DirectoryItem from "./directory-item";
import FileItem from "./file-item";

export default function ProjectContents({ contents = [] }) {
    return (
        <div className="w-full flex flex-col space-y-4 py-10">
            <p className="text-lg font-light font-sans">
                Project files
            </p>
            <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-2">
                {contents.map((item) => {
                    const { sha, type } = item;

                    if (type === "file") {
                        return <FileItem key={sha} item={item} />
                    }

                    return <DirectoryItem key={sha} item={item} />
                })}
            </div>
        </div>
    )
}