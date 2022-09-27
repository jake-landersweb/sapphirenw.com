import ServicePageWrapper from "../../../components/services/servicePageWrapper"
import ServiceSmallItem from "../../../components/services/serviceSmallItem"
import { FaUserTie, FaBalanceScaleLeft } from 'react-icons/fa'
import { MdTouchApp } from 'react-icons/md'
import ServiceLargeItem from "../../../components/services/serviceLargeItem"
import PricingCell from "../../../components/pricingCell"
import Form from "../../../components/form/form"

const WebAppDevelopment = () => {
    return <div className="">
        <ServicePageWrapper props={{
            title: "Web App Development",
            svgPath: "/svg/web-app-development.svg",
            svgAlt: "Website builder development",
            overview: "Startups and smaller businesses often times cannot afford a dedicated software engineering team to support your online presence. Sapphire can take the place of such a team for minimal costs. The web applications we build are stylish, performant, and adaptable to any screen size. We also offer support plans to support a site we built, or to extend and maintain a site built by a previous development team.",
            content: <>
                <div className="space-y-16 md:space-y-32">
                    <div className="">
                        <h3 className="subtitle pb-8">What Sets Us Apart</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <ServiceSmallItem props={{
                                icon: <><FaUserTie size={25} /></>,
                                title: "Experience",
                                description: "With over 20 years in the web development game, our developers have seen how the internet space has shaped over the years. Our knowledge becomes critical when making vital decisions about what your product looks like."
                            }} />
                            <ServiceSmallItem props={{
                                icon: <><FaBalanceScaleLeft size={25} /></>,
                                title: "Scalable Applications",
                                description: "We do not build just simple websites, we construct powerful web applications that work for all end users regardless of the device they use. Anything from a blog to a social media engine are in scope for our team."
                            }} />
                            <ServiceSmallItem props={{
                                icon: <><MdTouchApp size={25} /></>,
                                title: "User Interactivity",
                                description: "We believe that you should be able to extend and edit the content on your own website. So we enable you to do just that by building professional admin portals in our websites to enable live editing of the content on your sites."
                            }} />
                        </div>
                    </div>
                    <div className="">
                        <h3 className="grid place-items-center subtitle pb-16">Technologies</h3>
                        <div className="space-y-16 md:space-y-32">
                            <ServiceLargeItem props={{
                                title: "NextJS",
                                src: "/svg/nextjs.svg",
                                alt: "NextJS Icon",
                                reverse: false,
                                description: "Leveraging the enterprise framework of React, NextJS allows us to pick and choose where data is loaded and sent from the server. This translates to some of the best search engine optimization (SEO) seen in the business."
                            }} />
                            <ServiceLargeItem props={{
                                title: "TailwindCSS",
                                src: "/svg/tailwind.svg",
                                alt: "Tailwind Logo",
                                reverse: true,
                                description: "While not a framework directly, Tailwind allows us to quickly compose elegant UIs for our web pages, and gives your site the distinct look and polish you want to be known for. The Sapphire design principles apply here as always."
                            }} />
                            <ServiceLargeItem props={{
                                title: "Docker",
                                src: "/svg/docker.svg",
                                alt: "Contianer Ship",
                                reverse: false,
                                description: "Deployment and maintainability of your websites are almost as important to the websites themselves. To ensure the maximum uptime and resiliency to changes, we use the same technology to deploy used at Google, Amazon, and more."
                            }} />
                        </div>
                    </div>
                    <div className="">
                        <h3 className="grid place-items-center subtitle pb-16">Pricing</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <PricingCell props={{
                                title: "Support Plans",
                                price: "$175",
                                description: "Let Sapphire manage and improve your site.",
                                points: ["Any Technology", "Design Recommendations", "No Upselling"],
                                isMonthly: true,
                                isFrom: true,
                            }} />
                            <PricingCell props={{
                                title: "Crosscheck Sports Site",
                                price: "$1200",
                                description: "Powerful sports management web application.",
                                points: ["Crosscheck Engine", "Merch Sales", "Photo Gallery"],
                                isMonthly: false,
                                isFrom: true,
                            }} />
                            <PricingCell props={{
                                title: "Web Application",
                                price: "$3000+",
                                description: "Fully featured native website experience.",
                                points: ["Latest Technology", "SEO Optimized", "Elegant Design"],
                                isMonthly: false,
                                isFrom: true,
                            }} />
                        </div>
                    </div>
                    <Form props={{
                        nameLabel: undefined,
                        emailLabel: undefined,
                        bodyLabel: "Talk with us about our web app development",
                        tag: "web app development"
                    }} />
                </div>
            </>
        }} />
    </div>
}

export default WebAppDevelopment