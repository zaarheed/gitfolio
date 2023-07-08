import ProjectContents from "@/components/project-contents";
import { fetchContents } from "@/services/fetch";

export default async function SingleProjectPage() {
	const content = await fetchContents("");

    if (!content) return null;
    
    return (
        <div className="w-full py-10">
            <ProjectContents contents={content} />
        </div>
    )
}
