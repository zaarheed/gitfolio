"use client";
import Link from "next/link";
import Readme from "./readme";

export default function ProjectOverviewModal({ project }) {
    const { name, author, description, stargazers_count: stars, forks, html_url: url, id } = project;

    return (
        <div className="w-full h-full bg-zinc-100 relative">
            <div className="w-full h-64 flex flex-col justify-center items-center px-4 text-white bg-gradient-to-br from-zinc-700 to-zinc-900">
                <p className="font-bold text-xl md:text-2xl text-center truncate overflow-hidden w-full">
                    <span className="opacity-50">{author}/</span>{name}
                </p>
                <p className="text-xs md:text-base text-center">
                    {description || "No description"}
                </p>
            </div>
            
            <div className="p-4 overflow-y-scroll overflow-hidden w-full h-full shrink-0 pb-40 md:pb-10">
                <Readme
                    repo={name}
                />
            </div>
            <div className="w-full absolute bottom-0 left-0">
                <div className="w-full h-10 bg-gradient-to-b from-transparent to-zinc-100" />
                <div className="w-full bg-zinc-100 p-4 flex flex-row justify-end">
                    <Link href={`/projects/${id}`} className="text-blue-500 hover:bg-blue-500 rounded py-2 px-4 hover:text-white duration-100">
                        View project &rarr;
                    </Link>
                </div>
            </div>
        </div>
    )
}