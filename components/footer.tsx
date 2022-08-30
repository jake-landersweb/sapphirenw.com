import Link from "./link"

const Footer = () => {
    return <>

        <footer className="bg-bg-200 dark:bg-bg-dark-500">
            <div className="grid grid-cols-1 gap-8 py-8 px-6 md:grid-cols-4">
                <div className="text-center">
                    <h2 className="mb-6 text-sm font-semibold text-gray-500 uppercase dark:text-gray-400">Company</h2>
                    <ul className="text-gray-500 dark:text-gray-400">
                        <li className="mb-4">
                            <a href="#" className=" hover:underline">About</a>
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
                                href: "/mobile-app-development",
                                child: <>Mobile App Development</>,
                                isExternal: false,
                                className: "hover:underline"
                            }} />
                        </li>
                        <li className="mb-4">
                            <Link props={{
                                href: "/web-app-development",
                                child: <>Web App Development</>,
                                isExternal: false,
                                className: "hover:underline"
                            }} />
                        </li>
                        <li className="mb-4">
                            <Link props={{
                                href: "/software-maintenance",
                                child: <>Software Maintenance</>,
                                isExternal: false,
                                className: "hover:underline"
                            }} />
                        </li>
                        {/* <li className="mb-4">
                            <Link props={{
                                href: "/cloud-infrastructure",
                                child: <>Cloud Infrastructure</>,
                                isExternal: false,
                                className: "hover:underline"
                            }} />
                        </li>
                        <li className="mb-4">
                            <Link props={{
                                href: "/app-integrations",
                                child: <>App Integrations</>,
                                isExternal: false,
                                className: "hover:underline"
                            }} />
                        </li>
                        <li className="mb-4">
                            <Link props={{
                                href: "/technology-sourcing",
                                child: <>Technology Sourcing</>,
                                isExternal: false,
                                className: "hover:underline"
                            }} />
                        </li> */}
                    </ul>
                </div>
                <div className="text-center">
                    <h2 className="mb-6 text-sm font-semibold text-gray-500 uppercase dark:text-gray-400">Solutions</h2>
                    <ul className="text-gray-500 dark:text-gray-400">
                        <li className="mb-4">
                            <Link props={{
                                href: "/learning-management",
                                child: <>Learning Management Software</>,
                                isExternal: false,
                                className: "hover:underline"
                            }} />
                        </li>
                        <li className="mb-4">
                            <Link props={{
                                href: "/event-management",
                                child: <>Event Management Systems</>,
                                isExternal: false,
                                className: "hover:underline"
                            }} />
                        </li>
                        <li className="mb-4">
                            <Link props={{
                                href: "/messaging-systems",
                                child: <>Enterprise Messaging Systems</>,
                                isExternal: false,
                                className: "hover:underline"
                            }} />
                        </li>
                        <li className="mb-4">
                            <Link props={{
                                href: "/custom-software-experiences",
                                child: <>Customized Software Experiences</>,
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
                            <a href="#" className="hover:underline">iOS</a>
                        </li>
                        <li className="mb-4">
                            <a href="#" className="hover:underline">Android</a>
                        </li>
                        <li className="mb-4">
                            <a href="#" className="hover:underline">Windows</a>
                        </li>
                        <li className="mb-4">
                            <a href="#" className="hover:underline">MacOS</a>
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