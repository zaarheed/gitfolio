export default function CommentForm() {
    return (
        <form className="w-full flex flex-col pt-5 bg-gray-100 p-4 rounded">
            <p className="text-2xl mb-2">
                Leave a comment
            </p>
            <input
                className="w-full border rounded py-2 px-2 focus:outline-none focus:bg-gray-200 placeholder-gray-700 mb-2"
                placeholder="Enter your name"
            />
            <textarea
                className="w-full border rounded py-2 px-2 focus:outline-none focus:bg-gray-200 placeholder-gray-700 mb-2"
                placeholder="Enter your comment"
                rows={4}
            />
            <div className="w-full flex flex-row justify-end">
                <button
                    className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded"
                >
                    Submit
                </button>
            </div>
        </form>
    )
}