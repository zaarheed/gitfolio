"use client";
import { useEffect, useState } from "react";
import classNames from "classnames";

export default function Header() {
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
        <header
            className={classNames(
                "bg-gradient-to-br from-zinc-800 to-zinc-900 text-zinc-100 px-4 flex flex-col w-full fixed top-0 left-0 overflow-hidden",
                "duration-300 z-10",
                minimise ? "h-12 py-3" : "h-56 py-6"
            )}
        >
            <div className="w-full max-w-5xl mx-auto flex flex-col">
                <p className="text-xl text-zinc-400">
                    Zahid Mahmood, Full-stack Web Engineer
                </p>
                <p
                    className={classNames(
                        "text-5xl font-serif",
                        minimise ? "hidden" : "block"
                    )}
                >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
            </div>
        </header>
    );
}