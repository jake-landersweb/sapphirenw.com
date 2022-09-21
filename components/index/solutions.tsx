import BoundsWrapper from "../boundsWrapper"
import Image from "../image"
import Link from "../link"

const Solutions = () => {

    const solutionCell = (src: string, alt: string, href: string, title: string, desc: string, reverse: boolean) => {
        return <div className={`${reverse ? "md:flex-row-reverse" : ""} md:flex md:items-center md:space-y-0 space-y-8`}>
            <div className="space-y-2 max-w-screen-sm">
                <h3 className="text-2xl font-bold">{title}</h3>
                <p className="text-gray-400">{desc}</p>
                <div className="">
                    <Link props={{
                        href: href,
                        child: <>Learn More &rarr;</>,
                        isExternal: false,
                        className: "text-gray-400 hover:text-acc transition-colors w-fit",
                    }} />
                </div>
            </div>
            <div className={`${reverse ? "md:pr-16" : "md:pl-16"} grid place-items-center`}>
                <Image props={{
                    src: src,
                    alt: alt,
                    divClass: "max-w-[400px]",
                    imgClass: "min-w-[300px]"
                }} />
            </div>
        </div>
    }

    return <>
        <div className="w-full bg-main -skew-y-[5deg] py-24 text-txt-dark">
            <div className="skew-y-[5deg]">
                <div className="grid place-items-center">
                    <BoundsWrapper>
                        <div className="space-y-16 md:space-y-32">
                            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center">The Solutions We Offer For Your Business</h2>
                            {solutionCell("/svg/learning.svg", "learning icon", "/learning-management", "Learning Management Software", "With years of experience in the online education business, Sapphire has developed propriety infrastructure to power your custom learning  systems. Courses, Modules, Exams, Auth, and more all powered through our powerful LMS.", false)}
                            {solutionCell("/svg/schedule.svg", "scheduling", "/sports-management", "Event Management Systems", "A first class event scheduling system was developed out of our work on Crosscheck Sports, and can now be used to supercharge your own event management. With extreme customization capabilities, notification integration, and advanced user management all natively supported in the engine.", true)}
                            {solutionCell("/svg/mailbox.svg", "mailbox", "/messaging-systems", "Enterprise Messaging Systems", "A robust messaging service was born out of our need to scale the Crosscheck Sports notification system. Our unique containerization approach to a fully featured email and sms system gives you complete ownership over your own data.", false)}
                            {solutionCell("/svg/custom_software.svg", "website building", "/custom-software-experiences", "Customized Software Experiences", "Our best projects have come out of the need to build novel systems that fit the unique needs required for a product. Talk to us about your current problems and we will custom build a robust solution whatever the use cases are.", true)}
                        </div>
                    </BoundsWrapper>
                </div>
            </div>
        </div>
    </>
}

export default Solutions