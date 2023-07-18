import NextImage from "next/image";
import Link from "next/link";
import HoverMenu from "./hoverMenu/hoverMenu";
import HoverMenuType from "./hoverMenu/hoverMenuType";
import HoverMenuItem, { HoverMenuItemProps } from "./hoverMenu/hoverMenuItem";
import { useState } from "react";
import Image from "./image";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const serviceItems: HoverMenuItemProps[] = [
        {
            title: "AI Consulting",
            desc: "Learn how we use AI intelligently to enhance your current business.",
            href: "/ai",
            isExternal: false,
            isNew: true,
        },
        {
            title: "App Development",
            desc: "Web, desktop, and mobile app development built natively for you.",
            href: "/",
            isExternal: false,
        },
    ]

    const productItems: HoverMenuItemProps[] = [
        {
            title: "Sports Management",
            desc: "Sapphire developed the powerful Crosscheck Sports engine. Power your own personal sports team for a fraction of the price.",
            href: "/sports-management",
            isExternal: false,
        },
        {
            title: "AI Content Creation",
            desc: "Discover how our powerful LLM powered auto-blog works for your business.",
            href: "/auto-blog",
            isExternal: false,
            isNew: true,
        },
        // {
        //     title: "Portfolio",
        //     desc: "Check out some of the featured products we have made for other clients.",
        //     href: "/portfolio",
        //     isExternal: false,
        // },
    ]

    const aboutUsItems: HoverMenuItemProps[] = [
        {
            title: "About Us",
            desc: "Learn more about the team beind Portland AI and it's offerings.",
            href: "/about",
            isExternal: false,
        },
        {
            title: "Who You Are",
            desc: "Discover if our customer profiles fit your emerging business.",
            href: "/about#who-you-are",
            isExternal: false,
        },
        {
            title: "Contact",
            desc: "Schedule a free talk to discuss how AI can supercharge your workflows.",
            href: "/contact",
            isExternal: false,
        },
        {
            title: "AI-Driven Blog",
            desc: "A blog run completely autonomously by AI, check out our demo today.",
            href: "https://blog.portlandai.io",
            isExternal: true,
            isNew: true,
        },
    ]

    const largeServices = () => {
        const items = []
        for (let i = 0; i < serviceItems.length; i++) {
            items.push(<HoverMenuItem props={serviceItems[i]} />)
        }
        return items
    }

    const smallServices = () => {
        const items = []
        for (let i = 0; i < serviceItems.length; i++) {
            items.push(<SmallMenuItem props={serviceItems[i]} />)
        }
        return items
    }

    const largeProducts = () => {
        const items = []
        for (let i = 0; i < productItems.length; i++) {
            items.push(<HoverMenuItem props={productItems[i]} />)
        }
        return items
    }

    const smallProducts = () => {
        const items = []
        for (let i = 0; i < productItems.length; i++) {
            items.push(<SmallMenuItem props={productItems[i]} />)
        }
        return items
    }

    const largeAboutUs = () => {
        const items = []
        for (let i = 0; i < aboutUsItems.length; i++) {
            items.push(<HoverMenuItem props={aboutUsItems[i]} />)
        }
        return items
    }

    const smallAboutUs = () => {
        const items = []
        for (let i = 0; i < aboutUsItems.length; i++) {
            items.push(<SmallMenuItem props={aboutUsItems[i]} />)
        }
        return items
    }


    const SmallMenuItem = ({ props }: { props: HoverMenuItemProps }) => {
        return <div className="">
            <a onClick={(_) => closeMenu()} href={props.href}>
                <div className="bg-dk-600 p-2 rounded-md">
                    <h3 className="text-medium">{props.title}</h3>
                    <p className="text-light text-lt-400">{props.desc}</p>
                </div>
            </a>
        </div>
    }

    const handleClick = () => {
        setIsOpen(!isOpen);
    }

    const closeMenu = () => {
        setIsOpen(false);
    };

    return <header>
        <div className="max-w-[2000px] mx-auto">
            <div className="flex justify-between p-4">
                <Link href="/">
                    <Image props={{
                        src: '/svg/sapphire-text-white.svg',
                        alt: '',
                        divClass: "h-[50px]",
                        imgClass: "h-[50px]"
                    }} />
                </Link>
                <div className="hidden lg:flex items-center space-x-4 text-txt-400 font-bold">
                    <HoverMenu props={{
                        title: "Services",
                        defaultLink: "/#offerings",
                        type: HoverMenuType.header,
                        content: <div className=''>
                            {largeServices()}
                        </div>
                    }} />
                    <HoverMenu props={{
                        title: "Products",
                        defaultLink: "",
                        type: HoverMenuType.header,
                        content: <div className=''>
                            {largeProducts()}
                        </div>
                    }} />
                    <HoverMenu props={{
                        title: "Our Company",
                        defaultLink: "/#about",
                        type: HoverMenuType.header,
                        content: <div className=''>
                            {largeAboutUs()}
                        </div>
                    }} />
                </div>
                <div className="hidden lg:block">
                    <Link href={"/contact"}>
                        <p className="button px-4 py-2">Contact Us</p>
                    </Link>
                </div>
                {isOpen ? (
                    <button onClick={handleClick} className={`lg:hidden text-lt-400 w-10 h-10 focus:outline-none fixed right-4 top-[16px] z-50`}>
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
                    <button onClick={handleClick} className={`lg:hidden text-lt-400 w-10 h-10 relative focus:outline-none z-50`}>
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
                    className={`top-0 right-0 w-[75vw] sm:w-[50vw] py-[75px] pb-4 space-y-2 px-4 bg-dk-700 fixed h-screen z-40 ease-in-out duration-300 border-l border-dk-400 overflow-auto ${isOpen ? "translate-x-0 " : "translate-x-full"}`}

                >
                    <div className="my-50 space-y-4">
                        <div className="space-y-2">
                            <h2 className="text-lg font-medium">Services</h2>
                            {smallServices()}
                        </div>
                        <div className="space-y-2">
                            <h2 className="text-lg font-medium">Products</h2>
                            {smallProducts()}
                        </div>
                        <div className="space-y-2">
                            <h2 className="text-lg font-medium">Our Company</h2>
                            {smallAboutUs()}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
}