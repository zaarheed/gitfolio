import { fetchProject } from "@/services/fetch";
import { FaSwatchbook, FaRegStar, FaCodeBranch, FaGithub } from "react-icons/fa";

export default async function Stats({ name, owner, stars, forks, url }) {
    const project = await new Promise(resolve => setTimeout(() => fetchProject().then(resolve), 3000));

    return (
        <section className="default-section">
            <div className="w-full max-w-6xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between py-4">
                <div className="flex flex-row items-center mb-4 md:mb-0">
                    <FaSwatchbook />
                    <div className="flex items-center text-xl ml-2 overflow-hidden">
                        <span className="text-blue-600 hover:underline">
                            {owner}
                        </span>
                        <span className="ml-1">/</span>
                        <span
                            className="text-blue-600 hover:underline font-semibold ml-1 overflow-hidden truncate"
                        >
                            {name}
                        </span>
                    </div>
                </div>
                <div className="flex flex-row space-x-2 hidden md:flex">
                    <div className="flex flex-row text-xs group">
                        <a
                            href={url}
                            target="_blank"
                            type="button"
                            className="border border-gray-400 rounded rounded-r-none px-3 py-1 flex items-center space-x-1"
                        >
                            <FaRegStar className="w-6 h-6 group-hover:scale-105 group-hover:text-yellow-600 duration-100" />
                            <div>Star</div>
                        </a>
                        <span
                            className="border border-gray-400 rounded rounded-l-none border-l-0 font-semibold px-3 py-1 flex flex-col justify-center items-center"
                        >
                            {stars}
                        </span>
                    </div>
                    <div className="flex flex-row group text-xs">
                        <a
                            href={url}
                            target="_blank"
                            type="button"
                            className="border border-gray-400 rounded rounded-r-none px-3 py-1 flex items-center space-x-1"
                        >
                            <FaCodeBranch className="w-6 h-6 duration-100 group-hover:scale-105 group-hover:text-green-600" />
                            <div>Fork</div>
                        </a>
                        <span
                            className="border border-gray-400 rounded rounded-l-none border-l-0 font-semibold px-3 py-1 flex flex-col justify-center items-center"
                        >
                            {forks}
                        </span>
                    </div>
                    <div className="flex flex-row group text-xs">
                        <a
                            type="button"
                            href={url}
                            className="border border-gray-400 rounded px-3 py-1 flex items-center space-x-1"
                        >
                            <FaGithub className="w-6 h-6 duration-100 group-hover:scale-105" />
                            <div>Source</div>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}