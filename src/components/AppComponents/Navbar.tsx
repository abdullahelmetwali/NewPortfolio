"use client";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import ContactBot from "../BotComponents/ContactBot";


const NavBar = ({ botAnswers, err }: { botAnswers: any; err: string }) => {
    const [contactBotView, setContactBotView] = useState(false);
    const pathname = usePathname();
    const botView = () => {
        setContactBotView(prev => !prev)
    };
    return (
        <>
            <header className="fixed top-0 left-0 w-full z-50 py-9">
                <nav className="flex justify-center">
                    <ul className="blured z-50 py-2 px-6 rounded-3xl flex gap-11 text-xl ubuntu mob:text-lg">
                        <li>
                            <Link href={`/`} className={`${((pathname === '/' || pathname.includes('work')) && !contactBotView) ? 'opacity-100' : 'opacity-50'}`}
                                onClick={() => setContactBotView(false)}
                            >
                                Work
                            </Link>
                        </li>
                        <li>
                            <Link href={`/about`} className={`${(pathname === '/about' && !contactBotView) ? 'opacity-100' : 'opacity-50'}`}
                                onClick={() => setContactBotView(false)}
                            >
                                About
                            </Link>
                        </li>
                        <li>
                            <Link href={`/fun`} className={`${(pathname === '/fun' && !contactBotView) ? 'opacity-100' : 'opacity-50'}`}
                                onClick={() => setContactBotView(false)}
                            >
                                Fun
                            </Link>
                        </li>
                        <li>
                            <button
                                onClick={() => setContactBotView(prev => !prev)}
                                className={`${contactBotView ? 'opacity-100' : 'opacity-50'} transition-all duration-150 ease-in-out`}>
                                Contact
                            </button>
                        </li>
                    </ul>
                </nav>
            </header>
            <ContactBot setContactBotView={botView} contactBotView={contactBotView} botAnswers={botAnswers} err={err} />
            {
                contactBotView && <div className="fixed h-dvh w-full top-0 z-10 bg-transparent" onClick={() => setContactBotView(false)}></div>
            }
        </>
    );
};

export default NavBar;
