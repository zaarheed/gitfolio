import CommentForm from "./comment-form";
import CommentItem from "./comment-item";

export default function Comments({ comments = [] }) {
    return (
        <div className="w-full flex flex-col space-y-2">
            {comments.map((comment) => (<CommentItem key={comment.id} comment={comment} />))}
            <CommentForm />
        </div>
    )
}