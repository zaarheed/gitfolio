"use client";
import classNames from "classnames";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaBook, FaCode, FaCommentDots } from "react-icons/fa";

export default function ProjectNav() {
    const page = usePathname().split("/").pop();
    
    return (
        <section className="w-full">
            <ul className="w-full max-w-6xl mx-auto border-b border-gray-400 flex items-center mt-4 text-sm md:text-base">
                <li className="font-medium">
                    <Link
                        href="/projects/angular6-starter-multi-module/readme"
                        className={classNames(
                            "flex items-center border-b-2 transition ease-in-out duration-150 px-2 md:px-4 pb-3",
                            page === "readme" ? "border-red-500" : "border-transparent hover:border-gray-400"
                        )}
                    >
                        <FaBook className="w-4 h-4 md:w-5 md:h-5 text-gray-700" />
                        <span className="ml-2">Readme</span>
                    </Link>
                </li>
                <li className="font-medium">
                    <Link
                        href="/projects/angular6-starter-multi-module/code"
                        className={classNames(
                            "flex items-center border-b-2 transition ease-in-out duration-150 px-4 pb-3",
                            page === "code" ? "border-red-500" : "border-transparent hover:border-gray-400"
                        )}
                    >
                        <FaCode className="w-4 h-4 md:w-5 md:h-5 text-gray-700" />
                        <span className="ml-2">Code</span>
                    </Link>
                </li>
                <li className="font-medium">
                    <Link
                        href="/projects/angular6-starter-multi-module/comments"
                        className={classNames(
                            "flex items-center border-b-2 transition ease-in-out duration-150 px-4 pb-3",
                            page === "comments" ? "border-red-500" : "border-transparent hover:border-gray-400"
                        )}
                    >
                        <FaCommentDots className="w-4 h-4 md:w-5 md:h-5 text-gray-700" />
                        <span className="ml-2">Comments</span>
                        <div className="rounded-lg text-xs bg-gray-300 px-2 ml-1">150</div>
                    </Link>
                </li>
            </ul>
        </section>
    )
}