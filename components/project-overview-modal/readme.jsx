import { fetchReadme } from "@/services/fetch"
import { useEffect, useState } from "react";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

export default function Readme({ repo }) {
    const [content, setContent] = useState(null);

    useEffect(() => {
        fetchReadme(repo).then(setContent);
    }, [repo]);

    if (!content) return null;
    
    return (
        <div className="w-full prose h-content mt-4">
            <ReactMarkdown>{atob(content.content)}</ReactMarkdown>
        </div>
    )
}