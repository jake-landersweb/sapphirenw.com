import Link from "../link"

import { MdOutlineCategory } from 'react-icons/md'
import { BiCommand } from 'react-icons/bi'
import { TbSchool } from 'react-icons/tb'
import Image from "../image"

const Statement = () => {
    const statementItem = (asset: string, alt: string, title: string, href: string, desc: string) => {
        return <div className="grid place-items-center">
            <div className="text-main pb-4">
                <Image props={{
                    src: asset,
                    alt: alt,
                    divClass: "h-[400px] max-w-[400px] border border-bg-400 dark:border-bg-dark-500 bg-main bg-opacity-10 rounded-md p-2",
                    imgClass: "h-[398px] rounded-md"
                }} />
            </div>
            <h3 className="mb-2 text-xl font-bold text-center">{title}</h3>
            <Link props={{
                href: href,
                child: <>{desc} &rarr;</>,
                isExternal: false,
                className: "text-gray-500 dark:text-gray-400 hover:text-main dark:hover:text-main transition-opacity"
            }} />
        </div>
    }

    return <>
        <section className="grid place-items-center">
            <div className="max-w-screen-md mb-8 lg:mb-16 grid place-items-center">
                <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center">What Makes Sapphire Different?</h2>
                <p className="text-gray-500 sm:text-xl dark:text-gray-400 text-center">We believe that software should be more than just a tool. The software used to connect you and your users should be a hand-crafted experience. Our attention to your unique business needs combined with world class design and architecture deliver a higher level of satisfaction and polish not seen elsewhere.</p>
            </div>
            <div className="space-y-8 md:grid lg:grid-cols-3 md:gap-12 md:space-y-0">
                {statementItem("/svg/design-2.svg", "design asset", "Polished User Interfaces (UI/UX)", "", "Learn more about our design")}
                {statementItem("/svg/technology.svg", "future technology", "Bleeding Edge Technologies", "", "Learn more about technology")}
                {statementItem("/svg/professional.svg", "professional experience", "20+ Years Professional Experience", "", "Learn more about us")}
            </div>
        </section>
    </>
}

export default Statement