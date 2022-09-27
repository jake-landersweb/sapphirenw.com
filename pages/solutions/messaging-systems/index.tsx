import AssetCell from "../../../components/assetCell"
import XCShowcase from "../../../components/crosscheck/xcShowcase"
import Form from "../../../components/form/form"
import Image from "../../../components/image"
import Link from "../../../components/link"
import PricingCell from "../../../components/pricingCell"
import SolutionsItem from "../../../components/solutions/solutionsItem"
import SolutionsItem2 from "../../../components/solutions/solutionsItem2"
import SolutionsPageWrapper from "../../../components/solutions/solutionsPageWrapper"

const EventManagement = () => {

    const card = (title: string, src: string, alt: string, desc: string) => {
        return <div className="flex space-x-4 p-4 rounded-lg border border-bg-400 dark:border-bg-dark-400">
            <div className="">
                <Image props={{
                    src: src,
                    alt: alt,
                    divClass: "",
                    imgClass: ""
                }} />
            </div>
            <div className="space-y-2">
                <h3 className="text-2xl font-bold">{title}</h3>
                <p className="text-gray-400">{desc}</p>
            </div>
        </div>
    }

    return <SolutionsPageWrapper title="Enterprise Messaging Systems" desc="Touching base with your customers is important. Owning your data is too. Sapphire gives robust tools to do both." src="/svg/mailbox.svg" alt="Mailbox" moreTag="#why">
        <div className="space-y-16 nd:space-y-32">
            <SolutionsItem description="The Messaging Services We Offer" id="why" hasHeight={false}>
                <div className="space-y-16 pt-16">
                    <SolutionsItem2 title={"Enterprise Email System"} desc={"The Sapphire email messaging service is a robust system that can be hosted by us or you. We tust it to manage the email systems for our products, now you can too."} id={"#"}>
                        <Image props={{
                            src: "/svg/mail-sent.svg",
                            alt: "Envelope",
                            divClass: "max-w-[400px]",
                            imgClass: ""
                        }} />
                    </SolutionsItem2>
                    <SolutionsItem2 title={"Flexible Mobile Notifications"} reverse={true} desc={"Sening phone notifications can be complicated, just ask us! That is why we built a powerful mobile app notification system that you can leverage."} id={"#"}>
                        <Image props={{
                            src: "/svg/phone-notifications.svg",
                            alt: "Phone notifications",
                            divClass: "max-w-[400px]",
                            imgClass: ""
                        }} />
                    </SolutionsItem2>
                </div>
            </SolutionsItem>
            <div id="pricing" className="pt-16">
                <h3 className="grid place-items-center subtitle pb-16">Pricing</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <PricingCell props={{
                        title: "Estimate",
                        price: "Free",
                        description: "Talk with an engineer about your needs.",
                        points: ["No commitment", "No upselling", "Convenient scheduling", "Guided conversation"],
                        isMonthly: false
                    }} />
                    <PricingCell props={{
                        title: "One Service",
                        price: "$25",
                        description: "Using the Crosscheck products are totally free.",
                        points: ["Sapphire management", "Optional self hosting", "Flexible rate limit", "Full 24hr support"],
                        isMonthly: true,
                        isFrom: true,
                    }} />
                    <PricingCell props={{
                        title: "Multiple Services",
                        price: "$35",
                        description: "Build more on top of both of these systems.",
                        points: ["Email Services", "Mobile Notification Services", "Unlimited Rate Limit", "First-class support"],
                        isMonthly: true,
                        isFrom: true,
                    }} />
                </div>
            </div>
            <Form props={{
                nameLabel: undefined,
                emailLabel: undefined,
                bodyLabel: "Talk with us about messaging systems systems",
                tag: "Messeging systems"
            }} />
        </div>
    </SolutionsPageWrapper>
}

export default EventManagement