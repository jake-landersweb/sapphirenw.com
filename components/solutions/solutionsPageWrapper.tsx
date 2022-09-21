import BoundsWrapper from "../boundsWrapper"
import ButtonAction from "../buttons/buttonAction"
import ButtonSub from "../buttons/buttonSub"
import ButtonType from "../buttons/buttonType"
import Image from "../image"

type SolutionsPageWrapperProps = {
    title: string
    desc: string
    src: string
    alt: string
    moreTag: string
    children: JSX.Element
}

const SolutionsPageWrapper = (props: SolutionsPageWrapperProps) => {
    return <div className="grid place-items-center">
        <BoundsWrapper>
            <div className="space-y-16 md:space-y-32">
                <div className="h-[80vh] grid place-items-center">
                    <div className="grid max-w-screen-xl px-4 py-8 mx-auto gap-4 lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
                        <div className="mr-auto place-self-center lg:col-span-7">
                            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white text-center md:text-left">{props.title}</h1>
                            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400 text-center md:text-left">{props.desc}</p>
                            <div className="grid place-items-center md:block mb-4 md:mb-0">
                                <div className="flex space-x-2">
                                    <ButtonAction props={{
                                        title: 'Pricing',
                                        type: ButtonType.internalLink,
                                        href: "#pricing"
                                    }} />
                                    <ButtonSub props={{
                                        title: 'Schedule a Chat',
                                        type: ButtonType.internalLink,
                                        href: "/schedule-chat"
                                    }} />
                                </div>
                            </div>
                        </div>
                        <div className="lg:mt-0 lg:col-span-5 grid place-items-center">
                            <Image props={{
                                src: props.src,
                                alt: props.alt,
                                divClass: "max-w-[500px]",
                                imgClass: ""
                            }} />
                        </div>
                    </div>
                    <a href={props.moreTag} className="hidden md:block">
                        <div className="text-center text-gray-500 hover:text-gray-600 transition-colors">
                            <p>Learn More</p>
                            <p>&darr;</p>
                        </div>
                    </a>
                </div>
                <div className="">
                    {props.children}
                </div>
            </div>
        </BoundsWrapper>
    </div>
}

export default SolutionsPageWrapper