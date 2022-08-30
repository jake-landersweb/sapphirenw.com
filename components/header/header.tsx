import NextLink from 'next/link'
import { useState, useEffect } from "react";
import { useRouter } from 'next/router'
import HeaderItem from './headerItem';
import { isExternal } from 'util/types';
import Image from '../image';
import ButtonAction from '../buttons/buttonAction';
import ButtonHeader from '../buttons/buttonHeader';
import ButtonSub from '../buttons/buttonSub';
import { useTheme } from 'next-themes';
import HoverMenu from '../hoverMenu/hoverMenu';
import HoverMenuType from '../hoverMenu/hoverMenuType';
import { FiMoon, FiSun } from 'react-icons/fi'
import HoverMenuItem from '../hoverMenu/hoverMenuItem';
import Link from '../link';

const Header = () => {
    const [scrollY, setScrollY] = useState(0);
    const [isOpen, setIsOpen] = useState(false);

    const { theme, setTheme } = useTheme()

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        }

        handleScroll();
        window.addEventListener("scroll", handleScroll);
        () => window.removeEventListener("scroll", handleScroll);
    }, [])

    const handleClick = () => {
        setIsOpen(!isOpen);
    }


    const closeMenu = () => {
        setIsOpen(false);
    };

    const toggleTheme = () => {
        setTheme(theme == "light" ? "dark" : "light")
    }

    const menu = (className: string) => {
        return <div className={className}>
            <HoverMenu props={{
                title: "Services",
                type: HoverMenuType.header,
                content: <div className=''>
                    <HoverMenuItem props={{
                        title: 'Mobile App Development',
                        href: '/mobile-app-development',
                        isExternal: false,
                    }} />
                    <HoverMenuItem props={{
                        title: 'Web App Development',
                        href: '/web-app-development',
                        isExternal: false,
                    }} />
                    <HoverMenuItem props={{
                        title: 'Software Maintenance',
                        href: '/software-maintenance',
                        isExternal: false,
                    }} />
                    {/* <HoverMenuItem props={{
                        title: 'Cloud Infrastructure',
                        href: '/cloud-infrastructure',
                        isExternal: false,
                    }} />
                    <HoverMenuItem props={{
                        title: 'App Integrations',
                        href: '/app-integrations',
                        isExternal: false,
                    }} />
                    <HoverMenuItem props={{
                        title: 'Technology Sourcing',
                        href: '/technology-sourcing',
                        isExternal: false,
                    }} /> */}
                </div>
            }} />
            <HoverMenu props={{
                title: "Solutions",
                type: HoverMenuType.header,
                content: <div className=''>
                    <HoverMenuItem props={{
                        title: 'Learning Management Software',
                        href: '/learning-management',
                        isExternal: false,
                    }} />
                    <HoverMenuItem props={{
                        title: 'Event Management Systems',
                        href: '/event-management',
                        isExternal: false,
                    }} />
                    <HoverMenuItem props={{
                        title: 'Enterprise Messaging Systems',
                        href: '/messaging-systems',
                        isExternal: false,
                    }} />
                    <HoverMenuItem props={{
                        title: 'Customized Software Experiences',
                        href: '/custom-software-experiences',
                        isExternal: false,
                    }} />
                </div>
            }} />
            <ButtonHeader props={{
                title: 'Design',
                onTap: () => { }
            }} />
            <button onClick={() => toggleTheme()} className="p-2 bg-bg-200 border border-bg-400 dark:border-bg-dark-600 dark:bg-bg-dark-600 rounded-md hover:opacity-50 transition-opacity">
                <div className="dark:hidden">
                    <FiMoon size={20} className="text-main" />
                </div>
                <div className="hidden dark:block">
                    <FiSun size={20} className="text-acc" />
                </div>
            </button>
            <ButtonAction props={{
                title: 'Contact Us',
                onTap: () => { }
            }} />
        </div>
    }


    return (
        <div className={`${scrollY > 50 ? "bg-bg-200 dark:bg-bg-dark-700 shadow-md py-2" : "bg-bg dark:bg-bg-dark py-4 bg-opacity-50 backdrop-blur-sm"} items-center w-screen grid place-items-center transition-all duration-300 fixed top-0 left-0`}>
            <div className="flex items-center justify-between max-w-[2000px] w-full px-2 lg:px-20 md:px-10">
                <div className="flex space-x-4">
                    <div className="">
                        <NextLink href="/">
                            <a onClick={(e) => closeMenu()}>
                                <div className="group flex items-center transition-all">
                                    {/* image can go here */}
                                    <div className="dark:hidden">
                                        <Image props={{
                                            src: '/svg/sapphire_text_dark.svg',
                                            alt: 'sapphire nw logo',
                                            divClass: "h-[40px]",
                                            imgClass: "h-[40px]"
                                        }} />
                                    </div>
                                    <div className="hidden dark:block">
                                        <Image props={{
                                            src: '/svg/sapphire_text_light.svg',
                                            alt: 'sapphire nw logo',
                                            divClass: "h-[40px]",
                                            imgClass: "h-[40px]"
                                        }} />
                                    </div>
                                </div>
                            </a>
                        </NextLink>
                    </div>
                </div>
                {/* The full sized menu */}
                {menu("hidden md:flex md:space-x-8 md:items-center")}
                {/* Mobile menu */}
                {isOpen ? (
                    <button onClick={handleClick} className={`md:hidden text-txt-400 w-10 h-10 focus:outline-none fixed right-2 z-50`}>
                        <span className="sr-only">Open main menu</span>
                        <div
                            className="block w-5 absolute left-1/2 top-1/2   transform  -translate-x-1/2 -translate-y-1/2">
                            <span aria-hidden="true" className={`${isOpen ? 'rotate-45' : '-translate-y-1.5'} block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out`}></span>
                            <span aria-hidden="true"
                                className={`${isOpen ? 'opacity-0' : ''}  block absolute  h-0.5 w-5 bg-current   transform transition duration-500 ease-in-out`}></span>
                            <span aria-hidden="true"
                                className={`${isOpen ? "-rotate-45" : "translate-y-1.5"}  block absolute  h-0.5 w-5 bg-current transform  transition duration-500 ease-in-out`}></span>
                        </div>
                    </button>
                ) : (
                    <button onClick={handleClick} className={`md:hidden text-txt-400 w-10 h-10 relative focus:outline-none z-50`}>
                        <span className="sr-only">Open main menu</span>
                        <div
                            className="block w-5 absolute left-1/2 top-1/2   transform  -translate-x-1/2 -translate-y-1/2">
                            <span aria-hidden="true" className={`${isOpen ? 'rotate-45' : '-translate-y-1.5'} block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out`}></span>
                            <span aria-hidden="true"
                                className={`${isOpen ? 'opacity-0' : ''}  block absolute  h-0.5 w-5 bg-current   transform transition duration-500 ease-in-out`}></span>
                            <span aria-hidden="true"
                                className={`${isOpen ? "-rotate-45" : "translate-y-1.5"}  block absolute  h-0.5 w-5 bg-current transform  transition duration-500 ease-in-out`}></span>
                        </div>
                    </button>
                )}
                <div
                    className={`top-0 right-0 w-[75vw] pt-[18px] pb-4 space-y-2 px-4 dark:bg-bg-dark-600 bg-bg-100 fixed h-screen z-40 ease-in-out duration-300 border-l border-bg-200 dark:border-bg-dark-400 overflow-auto ${isOpen ? "translate-x-0 " : "translate-x-full"}`}>
                    <button onClick={() => toggleTheme()} className="p-2 bg-bg-200 border border-bg-400 dark:border-bg-dark-600 dark:bg-bg-dark-500 rounded-md hover:opacity-50 transition-opacity">
                        <div className="dark:hidden">
                            <FiMoon size={20} className="text-main" />
                        </div>
                        <div className="hidden dark:block">
                            <FiSun size={20} className="text-acc" />
                        </div>
                    </button>
                    <h3 className='text-2xl font-medium'>Services</h3>
                    <div>
                        <HeaderItem props={{
                            route: '/mobile-app-development',
                            title: 'Mobile App Development',
                            onTap: () => closeMenu(),
                            isCollapsed: false,
                            className: "dark:bg-bg-dark-500 bg-bg-200 py-2 px-4 cursor-pointer rounded-md w-full",
                            isExternal: false,
                        }} />
                    </div>
                    <div>
                        <HeaderItem props={{
                            route: '/web-app-development',
                            title: 'Web App Development',
                            onTap: () => closeMenu(),
                            isCollapsed: false,
                            className: "dark:bg-bg-dark-500 bg-bg-200 py-2 px-4 cursor-pointer rounded-md w-full",
                            isExternal: false,
                        }} />
                    </div>
                    <div>
                        <HeaderItem props={{
                            route: '/software-maintenance',
                            title: 'Software Maintenance',
                            onTap: () => closeMenu(),
                            isCollapsed: false,
                            className: "dark:bg-bg-dark-500 bg-bg-200 py-2 px-4 cursor-pointer rounded-md w-full",
                            isExternal: false,
                        }} />
                    </div>
                    <h3 className='text-2xl font-medium'>Solutions</h3>
                    <div>
                        <HeaderItem props={{
                            route: '/learning-management',
                            title: 'Learning Management Systems',
                            onTap: () => closeMenu(),
                            isCollapsed: false,
                            className: "dark:bg-bg-dark-500 bg-bg-200 py-2 px-4 cursor-pointer rounded-md w-full",
                            isExternal: false,
                        }} />
                    </div>
                    <div>
                        <HeaderItem props={{
                            route: '/event-management',
                            title: 'Event Management Systems',
                            onTap: () => closeMenu(),
                            isCollapsed: false,
                            className: "dark:bg-bg-dark-500 bg-bg-200 py-2 px-4 cursor-pointer rounded-md w-full",
                            isExternal: false,
                        }} />
                    </div>
                    <div>
                        <HeaderItem props={{
                            route: '/messaging-systems',
                            title: 'Messaging Systems',
                            onTap: () => closeMenu(),
                            isCollapsed: false,
                            className: "dark:bg-bg-dark-500 bg-bg-200 py-2 px-4 cursor-pointer rounded-md w-full",
                            isExternal: false,
                        }} />
                    </div>
                    <div>
                        <HeaderItem props={{
                            route: '/custom-software-experiences',
                            title: 'Custom Software Experiences',
                            onTap: () => closeMenu(),
                            isCollapsed: false,
                            className: "dark:bg-bg-dark-500 bg-bg-200 py-2 px-4 cursor-pointer rounded-md w-full",
                            isExternal: false,
                        }} />
                    </div>
                    <div>
                        <HeaderItem props={{
                            route: '/learning-management',
                            title: 'Learning Management Systems',
                            onTap: () => closeMenu(),
                            isCollapsed: false,
                            className: "dark:bg-bg-dark-500 bg-bg-200 py-2 px-4 cursor-pointer rounded-md w-full",
                            isExternal: false,
                        }} />
                    </div>
                    <div>
                        <HeaderItem props={{
                            route: '/event-management',
                            title: 'Event Management Systems',
                            onTap: () => closeMenu(),
                            isCollapsed: false,
                            className: "dark:bg-bg-dark-500 bg-bg-200 py-2 px-4 cursor-pointer rounded-md w-full",
                            isExternal: false,
                        }} />
                    </div>
                    <div>
                        <HeaderItem props={{
                            route: '/messaging-systems',
                            title: 'Messaging Systems',
                            onTap: () => closeMenu(),
                            isCollapsed: false,
                            className: "dark:bg-bg-dark-500 bg-bg-200 py-2 px-4 cursor-pointer rounded-md w-full",
                            isExternal: false,
                        }} />
                    </div>
                    <div>
                        <HeaderItem props={{
                            route: '/custom-software-experiences',
                            title: 'Custom Software Experiences',
                            onTap: () => closeMenu(),
                            isCollapsed: false,
                            className: "dark:bg-bg-dark-500 bg-bg-200 py-2 px-4 cursor-pointer rounded-md w-full",
                            isExternal: false,
                        }} />
                    </div>
                    <div>
                        <HeaderItem props={{
                            route: '/learning-management',
                            title: 'Learning Management Systems',
                            onTap: () => closeMenu(),
                            isCollapsed: false,
                            className: "dark:bg-bg-dark-500 bg-bg-200 py-2 px-4 cursor-pointer rounded-md w-full",
                            isExternal: false,
                        }} />
                    </div>
                    <div>
                        <HeaderItem props={{
                            route: '/event-management',
                            title: 'Event Management Systems',
                            onTap: () => closeMenu(),
                            isCollapsed: false,
                            className: "dark:bg-bg-dark-500 bg-bg-200 py-2 px-4 cursor-pointer rounded-md w-full",
                            isExternal: false,
                        }} />
                    </div>
                    <div>
                        <HeaderItem props={{
                            route: '/messaging-systems',
                            title: 'Messaging Systems',
                            onTap: () => closeMenu(),
                            isCollapsed: false,
                            className: "dark:bg-bg-dark-500 bg-bg-200 py-2 px-4 cursor-pointer rounded-md w-full",
                            isExternal: false,
                        }} />
                    </div>
                    <div>
                        <HeaderItem props={{
                            route: '/custom-software-experiences',
                            title: 'Custom Software Experiences',
                            onTap: () => closeMenu(),
                            isCollapsed: false,
                            className: "dark:bg-bg-dark-500 bg-bg-200 py-2 px-4 cursor-pointer rounded-md w-full",
                            isExternal: false,
                        }} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header