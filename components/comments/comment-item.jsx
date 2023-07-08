import { FaComment } from "react-icons/fa";

export default function CommentItem({ comment }) {
    const { author, message } = comment;

    return (
        <div className="w-full rounded border border-gray-300 flex flex-col">
            <div className="w-full bg-gray-100 px-4 py-2 flex flex-row justify-between">
                <span>{author}</span>
                <FaComment className="h-5 w-5 text-gray-700" />
            </div>
            <div className="p-4 w-full">
                {message}
            </div>
        </div>
    )
}