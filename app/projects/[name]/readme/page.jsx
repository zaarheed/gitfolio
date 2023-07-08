import { fetchReadme } from "@/services/fetch";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

export default async function SingeProjectPage() {
	const content = await fetchReadme("");

    if (!content) return null;
    
    return (
        <div className="w-full prose py-10">
            <ReactMarkdown>{atob(content.content)}</ReactMarkdown>
        </div>
    )
}
