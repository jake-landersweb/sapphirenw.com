import AssetCell from "../../../components/assetCell"
import XCShowcase from "../../../components/crosscheck/xcShowcase"
import Form from "../../../components/form/form"
import Image from "../../../components/image"
import Link from "../../../components/link"
import PricingCell from "../../../components/pricingCell"
import SolutionsItem from "../../../components/solutions/solutionsItem"
import SolutionsPageWrapper from "../../../components/solutions/solutionsPageWrapper"

const EventManagement = () => {
    return <SolutionsPageWrapper title="Sports Management Software" desc="Sapphire developed the powerful Crosscheck Sports engine. Power your own personal sports team for a fraction of the price." src="/svg/events.svg" alt="Event Schedule Builder" moreTag="#why">
        <div className="space-y-16 nd:space-y-32">
            <SolutionsItem description={"Learn How Sapphire Can Make a Custom Sports App Experience For You."} id={"why"} hasHeight={false}>
                <div className="space-y-2">
                    <div className="grid place-items-center">
                        <Image props={{
                            src: "/images/pn-multiplatform.png",
                            alt: "Puck norris app and site",
                            divClass: "",
                            imgClass: "max-h-[70vh]"
                        }} />
                    </div>
                    <div className="grid place-items-center">
                        <Link props={{
                            href: "https://pucknorris.com",
                            child: <>https://pucknorris.com &rarr;</>,
                            isExternal: true,
                            className: "text-gray-500 dark:text-gray-400 hover:text-main dark:hover:text-main transition-all"
                        }} />
                    </div>
                    <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0 pt-8">
                        <AssetCell title="Crafted Website" src="/svg/custom-website.svg" alt="custom website" href="/design" desc="Deploying a custom sports team site with Crosscheck Sports is fast an easy. Whether you use a template provided by Sapphire or work with a designer to create your own, the Crosscheck Engine will take your site to the next level." showLearnMore={false} />
                        <AssetCell title="Custom Mobile App" src="/svg/mobile-dev.svg" alt="mobile app dev" href="/design" desc="We also offer custom built mobile apps driven off the Crosscheck Sports engine. Using the base Crosscheck Sports app, tweak and add content as you see fit. From fans to photo galleries, you're in good hands with a Sapphire engineer." showLearnMore={false} />
                        <AssetCell title="Merch Integration" src="/svg/images.svg" alt="image gallery" href="/design" desc="Lastly, all of our custom websites and mobile apps offer built in Shopify integrations to sell your team merch. We can handle the logistics, shipping, and ordering, you focus on spreading your team brand though your community." showLearnMore={false} />
                    </div>
                </div>
            </SolutionsItem>
            <div className="">
                <SolutionsItem description={"Explore The Main Features That Crosscheck Sports Has To Offer."} id={""} hasHeight={false}>
                    <XCShowcase />
                </SolutionsItem>
            </div>
            <div id="pricing" className="pt-16">
                <h3 className="grid place-items-center subtitle pb-16">Pricing</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <PricingCell props={{
                        title: "Estimate",
                        price: "Free",
                        description: "Talk with an engineer about your sports team.",
                        points: ["No commitment", "No upselling", "Convenient scheduling", "Guided conversation"],
                        isMonthly: false
                    }} />
                    <PricingCell props={{
                        title: "Crosscheck Sports Products",
                        price: "Free",
                        description: "Using the Crosscheck products are totally free.",
                        points: ["Web application", "Mobile application", "Roster & schedule management", "Season chat"],
                        isMonthly: false,
                    }} />
                    <PricingCell props={{
                        title: "Custom Solution",
                        price: "$3000+",
                        description: "Talk with us about a custom built solution.",
                        points: ["Multiplatform", "Crosscheck engine", "Complete customization", "First-class support"],
                        isMonthly: false,
                        isFrom: true,
                    }} />
                </div>
            </div>
            <Form props={{
                nameLabel: undefined,
                emailLabel: undefined,
                bodyLabel: "Talk with us about sports management systems",
                tag: "Sports management systems"
            }} />
        </div>
    </SolutionsPageWrapper>
}

export default EventManagement