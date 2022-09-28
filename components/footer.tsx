import { useTheme } from "next-themes"
import { FiMoon, FiSun } from "react-icons/fi"
import Image from "./image"
import Link from "./link"

const Footer = () => {
    const { theme, setTheme } = useTheme()

    const toggleTheme = () => {
        setTheme(theme == "light" ? "dark" : "light")
    }

    return <>

        <footer className="bg-bg-200 dark:bg-bg-dark-500">
            <div className="flex py-8 px-6 justify-between max-w-[1300px] mx-auto">
                <div className="flex items-center">
                    <Image props={{
                        src: '/svg/sapphire.svg',
                        alt: 'sapphire nw logo',
                        divClass: "h-[40px] w-[40px]",
                        imgClass: "h-[40px] w-[40px] pr-2"
                    }} />
                    <h1 className='font-bold tracking-tight text-2xl'>Sapphire</h1>
                </div>
                <button onClick={() => toggleTheme()} className="p-2 bg-bg-200 border border-bg-400 dark:border-bg-dark-600 dark:bg-bg-dark-600 rounded-md md:hover:opacity-50 transition-opacity">
                    <div className="dark:hidden">
                        <FiMoon size={20} className="text-main" />
                    </div>
                    <div className="hidden dark:block">
                        <FiSun size={20} className="text-acc" />
                    </div>
                </button>
            </div>
            <div className="grid grid-cols-1 gap-8 py-8 px-6 md:grid-cols-4">
                <div className="text-center">
                    <h2 className="mb-6 text-sm font-semibold text-gray-500 uppercase dark:text-gray-400">Company</h2>
                    <ul className="text-gray-500 dark:text-gray-400">
                        <li className="mb-4">
                            <Link props={{
                                href: "/about",
                                child: <>About</>,
                                isExternal: false,
                                className: "hover:underline"
                            }} />
                        </li>
                        <li className="mb-4">
                            <Link props={{
                                href: "https://jakelanders.com/blog",
                                child: <>Blog</>,
                                isExternal: true,
                                className: "hover:underline"
                            }} />
                        </li>
                        <li className="mb-4">
                            <Link props={{
                                href: "#",
                                child: <>Careers</>,
                                isExternal: false,
                                className: "hover:underline"
                            }} />
                        </li>
                        <li className="mb-4">
                            <Link props={{
                                href: "https://crosschecksports.com/privacy-policy",
                                child: <>Privacy Policy</>,
                                isExternal: true,
                                className: "hover:underline"
                            }} />
                        </li>
                    </ul>
                </div>
                <div className="text-center">
                    <h2 className="mb-6 text-sm font-semibold text-gray-500 uppercase dark:text-gray-400">Services</h2>
                    <ul className="text-gray-500 dark:text-gray-400">
                        <li className="mb-4">
                            <Link props={{
                                href: "/services/mobile-app-development",
                                child: <>Mobile App Development</>,
                                isExternal: false,
                                className: "hover:underline"
                            }} />
                        </li>
                        <li className="mb-4">
                            <Link props={{
                                href: "/services/web-app-development",
                                child: <>Web App Development</>,
                                isExternal: false,
                                className: "hover:underline"
                            }} />
                        </li>
                        <li className="mb-4">
                            <Link props={{
                                href: "/services/software-maintenance",
                                child: <>Software Maintenance</>,
                                isExternal: false,
                                className: "hover:underline"
                            }} />
                        </li>
                    </ul>
                </div>
                <div className="text-center">
                    <h2 className="mb-6 text-sm font-semibold text-gray-500 uppercase dark:text-gray-400">Solutions</h2>
                    <ul className="text-gray-500 dark:text-gray-400">
                        <li className="mb-4">
                            <Link props={{
                                href: "/solutions/learning-management",
                                child: <>Learning Management Software</>,
                                isExternal: false,
                                className: "hover:underline"
                            }} />
                        </li>
                        <li className="mb-4">
                            <Link props={{
                                href: "/solutions/sports-management",
                                child: <>Sports Management Systems</>,
                                isExternal: false,
                                className: "hover:underline"
                            }} />
                        </li>
                        <li className="mb-4">
                            <Link props={{
                                href: "/solutions/messaging-systems",
                                child: <>Enterprise Messaging Systems</>,
                                isExternal: false,
                                className: "hover:underline"
                            }} />
                        </li>
                    </ul>
                </div>
                <div className="text-center">
                    <h2 className="mb-6 text-sm font-semibold text-gray-500 uppercase dark:text-gray-400">Design</h2>
                    <ul className="text-gray-500 dark:text-gray-400">
                        <li className="mb-4">
                            <Link props={{
                                href: "/design/user-experience",
                                child: <>User Experience</>,
                                isExternal: false,
                                className: "hover:underline"
                            }} />
                        </li>
                        <li className="mb-4">
                            <Link props={{
                                href: "/design/architecture",
                                child: <>Native Architecture</>,
                                isExternal: false,
                                className: "hover:underline"
                            }} />
                        </li>
                    </ul>
                </div>
            </div>
            <div className="py-6 px-4 bg-bg-dark-500 dark:bg-bg-dark-600 md:flex md:items-center md:justify-between">
                <span className="text-sm text-gray-300 sm:text-center">© 2022 Sapphirenw™. All Rights Reserved.
                </span>
            </div>
        </footer>

    </>
}

export default Footer