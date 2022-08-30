import BoundsWrapper from "../boundsWrapper"
import Image from "../image"

type ServicePageWrapperProps = {
    title: string
    svgPath: string
    svgAlt: string
    overview: string
    content: JSX.Element
}

const ServicePageWrapper = ({ props }: { props: ServicePageWrapperProps }) => {
    const { title, svgPath, svgAlt, overview, content } = props
    return <>
        <div className="grid place-items-center pt-[25px]">
            <BoundsWrapper>
                <div className="grid place-items-center">
                    <h2 className="title text-5xl md:text-6xl pb-12 text-center">{title}</h2>
                    <div className="block lg:flex lg:flex-row-reverse">
                        <div className="grid place-items-center lg:block pb-12 lg:pb-0">
                            <Image props={{
                                src: svgPath,
                                alt: svgAlt,
                                divClass: "max-w-[300px]",
                                imgClass: ""
                            }} />
                        </div>
                        <p className="subtext text-center pb-12 lg:pb-36 lg:pr-10 max-w-2xl">{overview}</p>
                    </div>
                    <div className="">{content}</div>
                </div>
            </BoundsWrapper>
        </div>
    </>
}

export default ServicePageWrapper