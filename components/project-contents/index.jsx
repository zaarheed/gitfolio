import DirectoryItem from "./directory-item";
import FileItem from "./file-item";

export default function ProjectContents({ contents = [] }) {
    return (
        <div className="w-full flex flex-col space-y-2">
            {contents.map((item) => {
                const { sha, type } = item;
                
                if (type === "file") {
                    return <FileItem key={sha} item={item} />
                }

                return <DirectoryItem key={sha} item={item} />
            })}
        </div>
    )
}