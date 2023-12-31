import { FaFolder, FaRegArrowAltCircleRight } from "react-icons/fa";

export default function DirectoryItem({ item }) {
    return (
        <a
            className="w-full rounded border p-2 flex flex-row items-center justify-between group hover:bg-gray-50/10 hover:border-gray-300 duration-100 cursor-pointer"
        >
            <div className="flex flex-row items-center">
                <FaFolder className="mr-4 text-blue-700" />
                <span>{item.name}</span>
            </div>
            <a
                type="button"
                href={item.html_url}
                target="_blank"
            >
                <FaRegArrowAltCircleRight className="text-gray-300 group-hover:text-gray-700 duration-100" />
            </a>
        </a>
    )
}