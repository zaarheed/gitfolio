"use client";
import { Fragment, useRef, useState } from "react";
import Modal from "@/components/modal";
import ProjectOverviewModal from "@/components/project-overview-modal";
import classNames from "classnames";
import generateGradient from "@/utils/gradient";
import { FaCodeBranch, FaStar } from "react-icons/fa";

export default function ProjectItem({ project }) {
    const { name, owner, description, forks, stargazers_count: stars } = project;
    const { login: username } = owner;
    const [showModal, setShowModal] = useState(false);
    const gradient = useRef(generateGradient());

    return (
        <Fragment>
            <div className="w-full relative group duration-200 hover:shadow-md cursor-pointer" onClick={() => setShowModal(true)}>
                <div
                    className={classNames(
                        "w-full aspect-square rounded-lg",
                        gradient.current
                    )}
                >
                    <div className="w-full h-full p-4 flex flex-col duration-300 overflow-hidden">
                        <p className="font-bold text-sm duration-300 p-4 absolute bottom-0 group-hover:bottom-12 left-0">
                            <span className="opacity-50">{username}/</span>{name}
                        </p>
                        <p className="text-sm text-gray-500 opacity-0 group-hover:opacity-100 duration-500 bottom-0 left-0 p-4 line-clamp-2 absolute">
                            {description || "No description."}
                        </p>
                        <div className="absolute -top-2 group-hover:top-4 opacity-0 group-hover:opacity-100 duration-300 right-8 flex flex-col space-y-2 text-xs mt-1 text-gray-500">
                            <div className="flex flex-row items-center">
                                <FaStar />
                                <span className="ml-1">{stars} stars</span>
                            </div>
                            <div className="flex flex-row items-center">
                                <FaCodeBranch />
                                <span className="ml-1">{forks} forks</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Modal show={showModal} onClose={() => setShowModal(false)} showCloseButton={true}>
                <ProjectOverviewModal project={project} gradient={gradient.current} />
            </Modal>
        </Fragment>
    )
}