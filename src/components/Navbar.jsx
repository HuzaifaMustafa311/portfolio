import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";

function Navbar() {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false); // For mobile menu toggle

    // Toggle dark mode and update the document's class
    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
        document.documentElement.classList.toggle("dark", !isDarkMode);
    };

    // Initialize theme from localStorage
    useEffect(() => {
        const savedTheme = localStorage.getItem("theme");
        if (savedTheme === "dark") {
            setIsDarkMode(true);
            document.documentElement.classList.add("dark");
        }
    }, []);

    // Save theme preference to localStorage whenever it changes
    useEffect(() => {
        localStorage.setItem("theme", isDarkMode ? "dark" : "light");
    }, [isDarkMode]);

    return (
        <nav className="fixed top-0 left-0 w-full z-50 bg-[#020617] dark:bg-gray-900 backdrop-blur-lg border-b border-white/20 dark:border-gray-800">
            <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4">
                {/* Logo */}

                {/* <div className="group relative inline-block">
                    <a
                        href="/"
                        className="flex items-center space-x-3 cursor-pointer text-white dark:text-gray-200 group-hover:text-[#85c1e8]"
                    >
                        <span className="self-center text-2xl font-semibold whitespace-nowrap">
                            Huzaifa Mustafa
                        </span>
                    </a>
                    <span
                        className="absolute bottom-[-4px] left-0 w-0 h-[3px] bg-[#85c1e8] transition-all duration-300 ease-in-out group-hover:w-full"
                    ></span>
                </div> */}


                <div className="group relative">
                    <a
                        href="/"
                        className="block py-2 md:px-1 lg:px-2 font-semibold whitespace-nowrap text-2xl cursor-pointer text-white dark:text-gray-300 group-hover:text-[#85c1e8]"
                    >
                        Huzaifa Mustafa
                        <span className="absolute bottom-[-4px] left-0 w-0 h-[3px] bg-[#85c1e8] transition-all duration-300 ease-in-out group-hover:w-full"></span>
                    </a>
                </div>

                {/* Hamburger Menu for Mobile */}
                <button
                    className="md:hidden p-2 w-10 h-10 flex items-center justify-center text-white dark:text-gray-200"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Toggle menu"
                >
                    <svg
                        className={`w-6 h-6 transform transition-transform ${isMenuOpen ? "rotate-90" : ""
                            }`}
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 6h16M4 12h16M4 18h16"
                        />
                    </svg>
                </button>

                {/* Navigation Links */}
                <div
                    className={`absolute md:static top-[64px] left-0 w-full md:w-auto bg-[#020617] dark:bg-gray-900 border-t md:border-t-0 border-white/20 dark:border-gray-800 md:flex md:items-center ${isMenuOpen ? "block" : "hidden"
                        }`}
                >
                    <div
                        className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 
                                   space-x-4 md:space-x-6 lg:space-x-8 p-4 md:p-0"
                    >
                        <div className="group relative">
                            <Link
                                smooth={true}
                                duration={800}
                                to="Home"
                                className="block py-2 md:px-1 lg:px-2 cursor-pointer text-white dark:text-gray-300 group-hover:text-[#85c1e8]"
                            >
                                Home
                                <span className="absolute bottom-[-4px] left-0 w-0 h-[3px] bg-[#85c1e8] transition-all duration-300 ease-in-out group-hover:w-full"></span>
                            </Link>
                        </div>
                        <div className="group relative">
                            <Link
                                smooth={true}
                                duration={800}
                                to="Experience"
                                className="block py-2 md:px-1 lg:px-2 cursor-pointer text-white dark:text-gray-300 group-hover:text-[#85c1e8]"
                            >
                                Experience
                                <span className="absolute bottom-[-4px] left-0 w-0 h-[3px] bg-[#85c1e8] transition-all duration-300 ease-in-out group-hover:w-full"></span>
                            </Link>
                        </div>
                        <div className="group relative">
                            <Link
                                smooth={true}
                                duration={800}
                                to="skills"
                                className="block py-2 md:px-1 lg:px-2 cursor-pointer text-white dark:text-gray-300 group-hover:text-[#85c1e8]"
                            >
                                Skills
                                <span className="absolute bottom-[-4px] left-0 w-0 h-[3px] bg-[#85c1e8] transition-all duration-300 ease-in-out group-hover:w-full"></span>
                            </Link>
                        </div>
                        <div className="group relative">
                            <Link
                                smooth={true}
                                duration={800}
                                to="Projects"
                                className="block py-2 md:px-1 lg:px-2 cursor-pointer text-white dark:text-gray-300 group-hover:text-[#85c1e8]"
                            >
                                Projects
                                <span className="absolute bottom-[-4px] left-0 w-0 h-[3px] bg-[#85c1e8] transition-all duration-300 ease-in-out group-hover:w-full"></span>
                            </Link>
                        </div>

                        <div className="group relative">
                            <Link
                                smooth={true}
                                duration={800}
                                to="Resume"
                                className="block py-2 md:px-1 lg:px-2 cursor-pointer text-white dark:text-gray-300 group-hover:text-[#85c1e8]"
                            >
                                Resume
                                <span className="absolute bottom-[-4px] left-0 w-0 h-[3px] bg-[#85c1e8] transition-all duration-300 ease-in-out group-hover:w-full"></span>
                            </Link>
                        </div>

                        <div className="group relative">
                            <Link
                                smooth={true}
                                duration={800}
                                to="Contact"
                                className="block py-2 md:px-1 lg:px-2 cursor-pointer text-white dark:text-gray-300 group-hover:text-[#85c1e8]"
                            >
                                Contact
                                <span className="absolute bottom-[-4px] left-0 w-0 h-[3px] bg-[#85c1e8] transition-all duration-300 ease-in-out group-hover:w-full"></span>
                            </Link>
                        </div>

                        <div className="group relative">
                            <button
                                onClick={toggleDarkMode}
                                className="block py-2 md:px-1 lg:px-2 cursor-pointer text-white dark:text-gray-300 group-hover:text-[#85c1e8]"
                            >
                                {isDarkMode ? (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 285.919 285.919"
                                        width="20"
                                        height="20"
                                        fill="currentColor"
                                    >
                                        <path d="M142.959 0C64.131 0 0 64.132 0 142.96s64.131 142.959 142.959 142.959 142.96-64.131 142.96-142.959S221.787 0 142.959 0zm0 260.919V25c65.043 0 117.96 52.917 117.96 117.96 0 65.043-52.917 117.959-117.96 117.959z" />
                                    </svg>
                                ) : (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                        width="20"
                                        height="20"
                                    >
                                        <path d="M12 4a1 1 0 011 1V6a1 1 0 01-2 0V5a1 1 0 011-1zm0 12a1 1 0 011 1v1a1 1 0 01-2 0v-1a1 1 0 011-1zM4 11a1 1 0 011-1H6a1 1 0 010 2H5a1 1 0 01-1-1zm14 0a1 1 0 011-1h1a1 1 0 010 2h-1a1 1 0 01-1-1zM7.05 7.05a1 1 0 011.41-1.41L9.17 6.34a1 1 0 11-1.41 1.41l-1.12-1.12zm9.9 9.9a1 1 0 011.41-1.41l1.12 1.12a1 1 0 01-1.41 1.41l-1.12-1.12zM7.05 16.95a1 1 0 011.41 1.41l-1.12 1.12a1 1 0 01-1.41-1.41l1.12-1.12zm9.9-9.9a1 1 0 011.41-1.41l-1.12-1.12a1 1 0 01-1.41-1.41l1.12-1.12zM12 8a4 4 0 110 8 4 4 0 010-8z" />
                                    </svg>
                                )}
                                <span className="absolute bottom-[-4px] left-0 w-0 h-[3px] bg-[#85c1e8] transition-all duration-300 ease-in-out group-hover:w-full"></span>
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;




