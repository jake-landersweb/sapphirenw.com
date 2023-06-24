import Link from "next/link"
import Image from "./image"


type ServiceLargeItemProps = {
    title: string
    src: string
    alt: string
    reverse: boolean
    description: string
    isNew?: boolean
    learnMoreHref?: string
    divClass?: string
    imgClass?: string
}

const ServiceLargeItem = ({ props }: { props: ServiceLargeItemProps }) => {
    const { title, src, alt, reverse = false, description, isNew = false, learnMoreHref, divClass, imgClass } = props

    const getImage = () => {
        var content = <Image props={{
            src: src,
            alt: alt,
            divClass: divClass ?? "max-w-[400px]",
            imgClass: imgClass ?? "min-w-[300px]"
        }} />
        if (reverse) {
            return <div data-aos="fade-right">{content}</div>
        } else {
            return <div data-aos="fade-left">{content}</div>
        }
    }

    return <>
        <div className={`${reverse ? "md:flex-row-reverse" : ""} md:flex md:items-center md:space-y-0 space-y-8`}>
            <div className="space-y-2 max-w-screen-sm">
                <div data-aos="fade-up" className="flex space-x-2 items-center">
                    <h3 className="text-2xl font-bold grid place-items-center md:block">{title}</h3>
                    {isNew ? <p className="text-white bg-acc px-2 py-[2px] rounded-md text-sm font-bold">New</p> : <></>}
                </div>
                <p data-aos="fade-up" data-aos-delay="100" className="text-gray-500 md:text-left text-center">{description}</p>
                {learnMoreHref == undefined ? <></> : <div className="w-fit"><Link href={learnMoreHref}><p className="text-gray-400 hover:text-acc transition-colors">Learn More &rarr;</p></Link></div>}
            </div>
            <div className={`${reverse ? "md:pr-16" : "md:pl-16"} grid place-items-center overflow-x-hidden`}>
                {getImage()}
            </div>
        </div>
    </>
}

export default ServiceLargeItem