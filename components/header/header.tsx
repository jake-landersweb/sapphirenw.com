import NextLink from 'next/link'
import { useState, useEffect } from "react";
import HeaderItem from './headerItem';
import Image from '../image';
import ButtonAction from '../buttons/buttonAction';
import ButtonHeader from '../buttons/buttonHeader';
import HoverMenu from '../hoverMenu/hoverMenu';
import HoverMenuType from '../hoverMenu/hoverMenuType';
import HoverMenuItem from '../hoverMenu/hoverMenuItem';
import ButtonType from '../buttons/buttonType';

const Header = () => {
    const [scrollY, setScrollY] = useState(0);
    const [isOpen, setIsOpen] = useState(false);


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

    const menu = (className: string) => {
        return <div className={className}>
            <HoverMenu props={{
                title: "Services",
                type: HoverMenuType.header,
                content: <div className=''>
                    <HoverMenuItem props={{
                        title: 'Mobile App Development',
                        href: '/services/mobile-app-development',
                        isExternal: false,
                    }} />
                    <HoverMenuItem props={{
                        title: 'Web App Development',
                        href: '/services/web-app-development',
                        isExternal: false,
                    }} />
                    <HoverMenuItem props={{
                        title: 'Software Maintenance',
                        href: '/services/software-maintenance',
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
                        href: '/solutions/learning-management',
                        isExternal: false,
                    }} />
                    <HoverMenuItem props={{
                        title: 'Sports Management Systems',
                        href: '/solutions/sports-management',
                        isExternal: false,
                    }} />
                    <HoverMenuItem props={{
                        title: 'Enterprise Messaging Systems',
                        href: '/solutions/messaging-systems',
                        isExternal: false,
                    }} />
                    {/* <HoverMenuItem props={{
                        title: 'Customized Software Experiences',
                        href: '/solutions/custom-software-experiences',
                        isExternal: false,
                    }} /> */}
                </div>
            }} />
            <HoverMenu props={{
                title: "Design",
                type: HoverMenuType.header,
                content: <div className=''>
                    <HoverMenuItem props={{
                        title: 'User Experience',
                        href: '/design/user-experience',
                        isExternal: false,
                    }} />
                    <HoverMenuItem props={{
                        title: 'Native Architecture',
                        href: '/design/architecture',
                        isExternal: false,
                    }} />
                    {/* <HoverMenuItem props={{
                        title: 'Native Experiences',
                        href: '/design/native-experiences',
                        isExternal: false,
                    }} /> */}
                    {/* <HoverMenuItem props={{
                        title: 'Customized Software Experiences',
                        href: '/solutions/custom-software-experiences',
                        isExternal: false,
                    }} /> */}
                </div>
            }} />
            <ButtonAction props={{
                title: 'Contact Us',
                type: ButtonType.internalLink,
                href: "/contact",
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
                                    <div className="flex items-center">
                                        <Image props={{
                                            src: '/svg/sapphire.svg',
                                            alt: 'sapphire nw logo',
                                            divClass: "h-[50px] w-[50px]",
                                            imgClass: "h-[50px] w-[50px] pr-2"
                                        }} />
                                        <h1 className='font-bold tracking-tight text-3xl'>Sapphire</h1>
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
                    className={`top-0 right-0 w-[75vw] py-[75px] pb-4 space-y-2 px-4 dark:bg-bg-dark-600 bg-bg-100 fixed h-screen z-40 ease-in-out duration-300 border-l border-bg-200 dark:border-bg-dark-400 overflow-auto ${isOpen ? "translate-x-0 " : "translate-x-full"}`}>
                    <h3 className='text-2xl font-bold'>Services</h3>
                    <div>
                        <HeaderItem props={{
                            route: '/services/mobile-app-development',
                            title: 'Mobile App Development',
                            onTap: () => closeMenu(),
                            isCollapsed: false,
                            className: "dark:bg-bg-dark-500 bg-bg-200 py-2 px-4 cursor-pointer rounded-md w-full",
                            isExternal: false,
                        }} />
                    </div>
                    <div>
                        <HeaderItem props={{
                            route: '/services/web-app-development',
                            title: 'Web App Development',
                            onTap: () => closeMenu(),
                            isCollapsed: false,
                            className: "dark:bg-bg-dark-500 bg-bg-200 py-2 px-4 cursor-pointer rounded-md w-full",
                            isExternal: false,
                        }} />
                    </div>
                    <div>
                        <HeaderItem props={{
                            route: '/services/software-maintenance',
                            title: 'Software Maintenance',
                            onTap: () => closeMenu(),
                            isCollapsed: false,
                            className: "dark:bg-bg-dark-500 bg-bg-200 py-2 px-4 cursor-pointer rounded-md w-full",
                            isExternal: false,
                        }} />
                    </div>
                    <h3 className='text-2xl font-bold'>Solutions</h3>
                    <div>
                        <HeaderItem props={{
                            route: '/solutions/learning-management',
                            title: 'Learning Management Systems',
                            onTap: () => closeMenu(),
                            isCollapsed: false,
                            className: "dark:bg-bg-dark-500 bg-bg-200 py-2 px-4 cursor-pointer rounded-md w-full",
                            isExternal: false,
                        }} />
                    </div>
                    <div>
                        <HeaderItem props={{
                            route: '/solutions/sports-management',
                            title: 'Sports Management Systems',
                            onTap: () => closeMenu(),
                            isCollapsed: false,
                            className: "dark:bg-bg-dark-500 bg-bg-200 py-2 px-4 cursor-pointer rounded-md w-full",
                            isExternal: false,
                        }} />
                    </div>
                    <div>
                        <HeaderItem props={{
                            route: '/solutions/messaging-systems',
                            title: 'Messaging Systems',
                            onTap: () => closeMenu(),
                            isCollapsed: false,
                            className: "dark:bg-bg-dark-500 bg-bg-200 py-2 px-4 cursor-pointer rounded-md w-full",
                            isExternal: false,
                        }} />
                    </div>
                    <h3 className='text-2xl font-bold'>Design</h3>
                    <div>
                        <HeaderItem props={{
                            route: '/design/user-experience',
                            title: 'User Experience',
                            onTap: () => closeMenu(),
                            isCollapsed: false,
                            className: "dark:bg-bg-dark-500 bg-bg-200 py-2 px-4 cursor-pointer rounded-md w-full",
                            isExternal: false,
                        }} />
                    </div>
                    <div>
                        <HeaderItem props={{
                            route: '/design/architecture',
                            title: 'Native Architecture',
                            onTap: () => closeMenu(),
                            isCollapsed: false,
                            className: "dark:bg-bg-dark-500 bg-bg-200 py-2 px-4 cursor-pointer rounded-md w-full",
                            isExternal: false,
                        }} />
                    </div>
                    {/* <div>
                        <HeaderItem props={{
                            route: '/sports-management',
                            title: 'Event Management Systems',
                            onTap: () => closeMenu(),
                            isCollapsed: false,
                            className: "dark:bg-bg-dark-500 bg-bg-200 py-2 px-4 cursor-pointer rounded-md w-full",
                            isExternal: false,
                        }} />
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default Header