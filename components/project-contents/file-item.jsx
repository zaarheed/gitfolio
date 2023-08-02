import { FaRegArrowAltCircleRight, FaRegFileAlt } from "react-icons/fa";

export default function FileItem({ item }) {
    return (
        <a
            className="w-full rounded border p-2 flex flex-row items-center justify-between group hover:bg-gray-50/10 hover:border-gray-300 duration-100 cursor-pointer"
            type="button"
            href={item.html_url}
            target="_blank"
        >
            <div className="flex flex-row items-center">
                <FaRegFileAlt className="mr-4" />
                <span className="line-clamp-1">{item.name}</span>
            </div>
        </a>
    )
}