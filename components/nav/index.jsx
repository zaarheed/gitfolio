import Link from "next/link";

export default function Nav() {
    return (
        <nav className="bg-black text-white px-4 py-3 flex items-center justify-between">
            <div className="flex items-center space-x-4 w-full max-w-6xl mx-auto flex-row justify-between">
                <Link href="/" className="flex flex-row items-center space-x-4">
                    <figure className="w-8 h-8 rounded-full bg-gray-200 overflow-hidden border-2 border-white">
                        <img src="https://zmdev.com/assets/profile.jpg" className="w-full h-full object-cover" />
                    </figure>
                    <span className="font-medium">Zahid Mahmood</span>
                </Link>
                <ul className="flex items-center font-semibold space-x-4 text-sm">
                    <li>
                        <a href="/" className="hover:text-gray-400">
                            Home
                        </a>
                    </li>
                    <li>
                        <a href="/about" className="hover:text-gray-400">
                            About
                        </a>
                    </li>
                    <li>
                        <Link href="/projects" className="hover:text-gray-400">
                            Projects
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}