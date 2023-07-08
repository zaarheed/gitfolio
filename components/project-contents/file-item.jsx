import { FaRegArrowAltCircleRight, FaRegFileAlt } from "react-icons/fa";

export default function FileItem({ item }) {
    return (
        <div className="w-full rounded border p-2 flex flex-row items-center justify-between group hover:bg-gray-50/10 hover:border-gray-300 duration-100 cursor-pointer">
            <div className="flex flex-row items-center">
                <FaRegFileAlt className="mr-4" />
                <span>{item.name} <span className="text-gray-400 text-xs">{item.size / 1000}kb</span></span>
            </div>
            <a
                type="button"
                href={item.html_url}
            >
                <FaRegArrowAltCircleRight className="text-gray-300 group-hover:text-gray-700 duration-100" />
            </a>
        </div>
    )
}