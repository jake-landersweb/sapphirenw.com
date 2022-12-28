import ButtonAction from "../buttons/buttonAction"
import ButtonSub from "../buttons/buttonSub"
import ButtonType from "../buttons/buttonType"
import Image from "../image"

const Landing = () => {
    return <>
        <div className="h-[80vh] grid place-items-center">
            <div className="grid max-w-screen-xl px-4 py-8 mx-auto gap-4 lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
                <div className="mr-auto place-self-center lg:col-span-7">
                    <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">Software Development For Your Small Business.</h1>
                    <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">We deliver high performant, beautiful software experiences on all platforms, at a fraction of the cost of a full development team.</p>
                    <div className="grid place-items-center md:block mb-4 md:mb-0">
                        <div className="flex space-x-2">
                            <ButtonAction props={{
                                title: 'Contact Us',
                                type: ButtonType.internalLink,
                                href: "/contact"
                            }} />
                            <ButtonSub props={{
                                title: 'Schedule a Chat',
                                type: ButtonType.externalLink,
                                href: "https://calendly.com/jake-sapphirenw/30min"
                            }} />
                        </div>
                    </div>
                </div>
                <div className="lg:mt-0 lg:col-span-5 grid place-items-center">
                    <Image props={{
                        src: '/svg/space-2.svg',
                        alt: 'space rocket ship',
                        divClass: "max-w-[500px]",
                        imgClass: ""
                    }} />
                </div>
            </div>
        </div>
    </>
}

export default Landing