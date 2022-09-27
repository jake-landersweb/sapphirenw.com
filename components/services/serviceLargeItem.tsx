import Image from "../image"

type ServiceLargeItemProps = {
    title: string
    src: string
    alt: string
    reverse: boolean
    description: string
}

const ServiceLargeItem = ({ props }: { props: ServiceLargeItemProps }) => {
    const { title, src, alt, reverse = false, description } = props
    return <>
        <div className={`${reverse ? "md:flex-row-reverse" : ""} md:flex md:items-center md:space-y-0 space-y-8`}>
            <div className="space-y-2 max-w-screen-sm">
                <h3 className="text-2xl font-bold grid place-items-center md:block">{title}</h3>
                <p className="subtext md:text-left text-center">{description}</p>
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
    </>
}

export default ServiceLargeItem