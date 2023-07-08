import Comments from "@/components/comments";
import { fetchComments } from "@/services/fetch";

export default async function SingeProjectPage() {
	const comments = await fetchComments("");

    if (!comments) return null;
    
    return (
        <div className="w-full py-10">
            <Comments comments={comments} />
        </div>
    )
}
