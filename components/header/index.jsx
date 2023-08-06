"use client";
import { useEffect, useState } from "react";
import classNames from "classnames";
import { usePathname } from "next/navigation";

export default function Header() {
    const pathname = usePathname();
    const [minimise, setMinimise] = useState(false);

    const handleScroll = (e) => {
        const currentScrollY = window.scrollY;

        if (currentScrollY > 100) {
            setMinimise(true);
            return;
        }

        setMinimise(false);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <header
                className={classNames(
                    "bg-gradient-to-br from-zinc-800 to-zinc-900 text-zinc-100 px-4 flex flex-col w-full fixed top-0 left-0 overflow-hidden",
                    "duration-300 z-10",
                    minimise ? "h-12 py-3" : "h-40 py-6"
                )}
            >
                <div className="w-full max-w-5xl mx-auto flex flex-col">
                    <p className="text-xl text-zinc-400">
                        Zahid Mahmood
                    </p>
                    <p
                        className={classNames(
                            "text-5xl font-serif",
                            minimise ? "hidden" : "block"
                        )}
                    >
                        Hi 👋 I'm a full-stack Web Engineer obsessed with Next.js
                    </p>
                </div>
            </header>
            <div className="pb-56" />
        </>
    );
}