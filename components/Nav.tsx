import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import Link from "next/link";

function Nav() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div>
            <nav className="bg-sky-300">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex items-center">
                            <div className="flex-shrink-0">
                                <Link href="/">
                                    <h2 className="text-white cursor-pointer"><span className="font-extrabold">Scott Klein</span> | <span className="font-light text-xs">Full-stack Developer</span></h2>
                                </Link>
                            </div>
                            <div className="hidden md:block">
                                <div className="ml-10 flex items-baseline space-x-4">
                                    <Link href="/work">
                                        <a className="text-white hover:animate-pulse px-3 py-2 text-sm font-medium font-mono hover:text-blue-200">My Work</a>
                                    </Link>
                                    <Link href="/hire">
                                        <a className="text-white hover:animate-pulse px-3 py-2 text-sm font-medium font-mono hover:text-blue-200">Work With Me</a>
                                    </Link>

                                    <Link href="/story">
                                        <a className="text-white hover:animate-pulse px-3 py-2 text-sm font-medium font-mono hover:text-blue-200">Story</a>
                                    </Link>

                                    <Link href="/what-i-do">
                                        <a className="text-white hover:animate-pulse px-3 py-2 text-sm font-medium font-mono hover:text-blue-200">What I Do</a>
                                    </Link>

                                    <Link href="/blog">
                                        <a className="text-white hover:animate-pulse px-3 py-2 text-sm font-medium font-mono hover:text-blue-200">Blog</a>
                                    </Link>

                                </div>
                            </div>
                        </div>
                        <div className="-mr-2 flex md:hidden ">
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                type="button"
                                // className="bg-yellow-200 border inline-flex items-center justify-center p-2 rounded-full text-sky-400 hover:text-sky-100 hover:backdrop-blur-3xl hover:bg-orange-400 hover:animate-pulse focus:outline-none"
                                className="bg-sky-400 text-yellow-300 inline-flex items-center justify-center p-2 rounded-full hover:text-orange-400 hover:backdrop-blur-3xl hover:bg-sky-500  hover:animate-pulse focus:outline-none"

                                aria-controls="mobile-menu"
                                aria-expanded="false"
                            >
                                <span className="sr-only">Open main menu</span>
                                {!isOpen ? (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="block h-7 w-7 "
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        className="block h-6 w-6"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>

                <Transition
                    show={isOpen}
                    enter="transition ease-in-out duration-500 transform"
                    enterFrom="opacity-0 scale-105"
                    enterTo="opacity-100 scale-105"
                    leave="transition ease-in-out duration-100 transform"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                >
                    {(ref) => (
                        <div className="md:hidden" id="mobile-menu">
                            <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                                <Link href="/work">
                                    <a className="block rounded-md text-base font-medium text-white hover:animate-pulse px-3 py-2 font-mono hover:text-blue-200 ">My Work</a>
                                </Link>

                                <Link href="/hire">
                                    <a className="block rounded-md text-base font-medium text-white hover:animate-pulse px-3 py-2 font-mono hover:text-blue-200">Work With Me</a>
                                </Link>

                                <Link href="/story">
                                    <a className="block rounded-md text-base font-medium text-white hover:animate-pulse px-3 py-2 font-mono hover:text-blue-200">Story</a>
                                </Link>

                                <Link href="/contact">
                                    <a className="block rounded-md text-base font-medium text-white hover:animate-pulse px-3 py-2 font-mono hover:text-blue-200">What I Do</a>
                                </Link>

                                <Link href="/blog">
                                    <a className="block rounded-md text-base font-medium text-white hover:animate-pulse px-3 py-2 font-mono hover:text-blue-200">Blog</a>
                                </Link>

                            </div>
                        </div>
                    )}
                </Transition>
            </nav>

        </div>
    );
}

export default Nav;