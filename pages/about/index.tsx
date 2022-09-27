import BoundsWrapper from "../../components/boundsWrapper"
import Form from "../../components/form/form"
import Image from "../../components/image"
import SapphireWay from "../../components/sapphireWay"
import ServiceLargeItem from "../../components/services/serviceLargeItem"
import SolutionsPageWrapper from "../../components/solutions/solutionsPageWrapper"

const About = () => {
    return <div className="grid place-items-center">
        <BoundsWrapper>
            <div className="space-y-16 md:space-y-32">
                <div className="h-[80vh] grid place-items-center">
                    <div className="grid max-w-screen-xl px-4 py-8 mx-auto gap-4 lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
                        <div className="mr-auto place-self-center lg:col-span-7">
                            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white text-center md:text-left">About Us</h1>
                            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400 text-center md:text-left">We are a local pacific northwest business working to build some of the best software systems in the world.</p>
                        </div>
                        <div className="lg:mt-0 lg:col-span-5 grid place-items-center">
                            <Image props={{
                                src: "/svg/nature.svg",
                                alt: "Nature",
                                divClass: "max-w-[500px]",
                                imgClass: ""
                            }} />
                        </div>
                    </div>
                </div>
                <div className="space-y-16 md:space-y-32 grid place-items-center">
                    <ServiceLargeItem props={{
                        title: "Our Name",
                        src: "/svg/sapphire.svg",
                        alt: "Sapphire Logo",
                        reverse: false,
                        description: "We do not take our name lightly. To us, the name Sapphire represents class, ellegance, and beauty. Our commitment to delivering the highest quality product represents that ideology."
                    }} />
                    <ServiceLargeItem props={{
                        title: "Under Construction",
                        src: "/svg/construction.svg",
                        alt: "Construction",
                        reverse: true,
                        description: "This page is under construction, check back later to know more about Sapphire!"
                    }} />
                    <SapphireWay />
                    <Form props={{
                        nameLabel: undefined,
                        emailLabel: undefined,
                        bodyLabel: undefined,
                        tag: "About us"
                    }} />
                </div>
            </div>
        </BoundsWrapper>
    </div>
}

export default About