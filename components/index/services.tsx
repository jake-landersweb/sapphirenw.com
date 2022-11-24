import { FiSmartphone, FiCloud } from 'react-icons/fi'
import { IoLaptopOutline } from 'react-icons/io5'
import { BsGear } from 'react-icons/bs'
import { TbManualGearbox } from 'react-icons/tb'
import { GoSearch } from 'react-icons/go'
import Link from '../link'

const Services = () => {

    const serviceItem = (icon: JSX.Element, title: string, href: string, desc: string) => {
        return <div>
            <div className="flex justify-center text-main dark:text-txt-dark-300 items-center mb-4 w-10 h-10 rounded-full bg-main-300 dark:bg-main dark:bg-opacity-50 bg-opacity-20 lg:h-12 lg:w-12">
                {icon}
            </div>
            <h3 className="mb-2 text-xl font-bold">{title}</h3>
            <p className="text-gray-500 dark:text-gray-400 mb-2">{desc}</p>
            <Link props={{
                href: "/services/" + href,
                child: <>Learn More &rarr;</>,
                isExternal: false,
                className: "text-gray-500 dark:text-gray-400 hover:text-main dark:hover:text-main transition-opacity"
            }} />
        </div>
    }

    return <>
        <section className="">
            <div className="max-w-screen-md mb-8 lg:mb-16">
                <h2 className="mb-4 text-4xl tracking-tight font-extrabold">Software For Business Teams Like Yours</h2>
                <p className="text-gray-500 sm:text-xl dark:text-gray-400">Here at Sapphire we offer a wide variety of services to give your business the tools it needs to thrive in the modern age.</p>
            </div>
            <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
                {serviceItem(<FiSmartphone size={25} />, "Mobile App Development", "mobile-app-development", "More than 60% of people use a smartphone as their main computer. Open up new markets with native mobile apps for Android and iOS.")}
                {serviceItem(<IoLaptopOutline size={25} />, "Web App Development", "web-app-development", "The blur between website and web app is becoming narrower, supercharge your web experience with modern web app frameworks.")}
                {serviceItem(<BsGear size={25} />, "Software Maintenance", "software-maintenance", "Have existing infrastructure built by developers in the past? Sapphire is a professional at elevating existing systems to the next level.")}
                {serviceItem(<FiCloud size={25} />, "Cloud Infrastructure", "software-maintenance", "The developers at Sapphire have extensive professional experience with cloud infrastructure. With us on your team, now you do too.")}
                {serviceItem(<TbManualGearbox size={25} />, "App Integrations", "web-app-development", "App integrations can add new functionality to your new or existing architecture. From payments to texts, we got you covered.")}
                {serviceItem(<GoSearch size={25} />, "Technology Sourcing", "web-app-development", "Leverage our expertise in design and development to help shape your web technology going forward. Whether you are evolving or starting fresh.")}

            </div>
        </section>
    </>
}

export default Services