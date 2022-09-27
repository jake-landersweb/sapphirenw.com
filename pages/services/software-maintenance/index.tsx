import Form from "../../../components/form/form"
import PricingCell from "../../../components/pricingCell"
import ServiceLargeItem from "../../../components/services/serviceLargeItem"
import ServicePageWrapper from "../../../components/services/servicePageWrapper"

const SoftwareMaintenance = () => {
    return <div className="">
        <ServicePageWrapper props={{
            title: "Software Maintenance",
            svgPath: "/svg/maintenance.svg",
            svgAlt: "Server cluster",
            overview: "Sometimes you have old legacy pieces of software built by other developers that have become too integral to the operations of your business. The developers at Sapphire are experts at maintaining and extending virtually any tech stack. We can also work with you to develop a migration plan to move from older legacy systems to newer, more performant ones.",
            content: <>
                <div className="space-y-16 md:space-y-32">
                    <div className="">
                        <h3 className="grid place-items-center subtitle pb-16 text-center">What To Expect From Us</h3>
                        <div className="space-y-16 md:space-y-32">
                            <ServiceLargeItem props={{
                                title: "Experience",
                                src: "/svg/professional.svg",
                                alt: "Professional Person",
                                reverse: false,
                                description: "With over 20 years in the development game, the engineers at Sapphire have seen it all. From SQL Server to advanced ML models, chances are we have worked with what powers your product."
                            }} />
                            <ServiceLargeItem props={{
                                title: "Adaptability",
                                src: "/svg/adaptability.svg",
                                alt: "Person lounging",
                                reverse: true,
                                description: "We adapt as your needs change. If you decide to move from a maintenance strategy to a migration one, Sapphire has you covered. We will keep open communication so you always have an insight."
                            }} />
                        </div>
                    </div>
                    <div className="">
                        <h3 className="grid place-items-center subtitle pb-16">Pricing</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <PricingCell props={{
                                title: "Estimate",
                                price: "Free",
                                description: "Talk with an engineer about your product.",
                                points: ["No commitment", "No upselling", "Convenient scheduling"],
                                isMonthly: false
                            }} />
                            <PricingCell props={{
                                title: "Basic Plan",
                                price: "$125",
                                description: "Let Sapphire host and maintain you app.",
                                points: ["All Technologies", "Headless Hosting", "Bug Fixes"],
                                isMonthly: true,
                                isFrom: true,
                            }} />
                            <PricingCell props={{
                                title: "Improvement",
                                price: "$500",
                                description: "Maintenance with a migration pathway.",
                                points: ["All In Basic Plan", "Migration Plan", "Product Improvement"],
                                isMonthly: true,
                                isFrom: true,
                            }} />
                        </div>
                    </div>
                    <Form props={{
                        nameLabel: undefined,
                        emailLabel: undefined,
                        bodyLabel: "Talk with us about our software maintenance",
                        tag: "software maintenance"
                    }} />
                </div>
            </>
        }} />
    </div>
}

export default SoftwareMaintenance