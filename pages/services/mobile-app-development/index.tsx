import ServicePageWrapper from "../../../components/services/servicePageWrapper"
import ServiceSmallItem from "../../../components/services/serviceSmallItem"
import { HiOutlineChatAlt2 } from 'react-icons/hi'
import { IoLogoWebComponent } from 'react-icons/io5'
import { MdOutlineDesignServices } from 'react-icons/md'
import ServiceLargeItem from "../../../components/services/serviceLargeItem"
import PricingCell from "../../../components/pricingCell"
import Form from "../../../components/form/form"

const MobileAppDevelopment = () => {
    return <>
        <ServicePageWrapper props={{
            title: "Mobile App Development",
            svgPath: "/svg/mobile-dev.svg",
            svgAlt: "Mobile app screen",
            overview: "With over 60% of people using a mobile device as their main computer, the demand for mobile-centric products have never been higher. The Sapphire web development division will ensure your web apps work great on mobile, but for certain applications a native experience will be truly next level. We use bleeding edge technologies like Flutter, SwiftUI, and Jetpack Compose along with the Sapphire guarantee for design excellence to shape your mobile app experiences to be the best they can be.",
            content: <>
                <div className="space-y-16 md:space-y-32">
                    <div className="">
                        <h3 className="subtitle pb-8">What Sets Us Apart</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <ServiceSmallItem props={{
                                icon: <><HiOutlineChatAlt2 size={25} /></>,
                                title: "Rich Chat Applications",
                                description: "We build beautiful chat applications that leverage rich chat features such as images, videos, gifs, emojis, and more. Interactive chats have been shown to improve  engagement in mobile applications"
                            }} />
                            <ServiceSmallItem props={{
                                icon: <><IoLogoWebComponent size={25} /></>,
                                title: "Native Custom Component UI",
                                description: "Mapping to our design principles, Sapphire has experience in building a completely custom design library to fit your application’s look. Applications that “feel” right attract more user engagement."
                            }} />
                            <ServiceSmallItem props={{
                                icon: <><MdOutlineDesignServices size={25} /></>,
                                title: "Solid Design Structure",
                                description: "The software we build is designed to be maintainable, and use the best design practices from Google and Apple. This also allows us to add new features to your app without large changes."
                            }} />
                        </div>
                    </div>
                    <div className="">
                        <h3 className="grid place-items-center subtitle pb-16">Technologies</h3>
                        <div className="space-y-16 md:space-y-32">
                            <ServiceLargeItem props={{
                                title: "Flutter",
                                src: "/svg/flutter.svg",
                                alt: "Flutter mobile app framework",
                                reverse: false,
                                description: "Flutter is our mobile app framework of choice. Developed by Google, this allows us to build applications that compile natively to iOS and Android. These are not webpages running on your mobile device; this is a purpose built, solid framework that powers the likes of TikTok, BMW, and Google Pay."
                            }} />
                            <ServiceLargeItem props={{
                                title: "SwiftUI",
                                src: "/svg/ios-devices.svg",
                                alt: "iOS iPhone and iPad",
                                reverse: true,
                                description: "The new design framework from Apple allows cross platform apps to be built in the Apple ecosystem. The developers at Sapphire have been involved with the SwiftUI project since the beginning, and have created many cross-device applications for iOS, iPadOS, MacOS, AppleTV, and Widgets."
                            }} />
                            <ServiceLargeItem props={{
                                title: "Jetpack Compose",
                                src: "/svg/android.svg",
                                alt: "Android Mobile Device",
                                reverse: false,
                                description: "Jetpack Compose is Google’s version of SwiftUI. A modern UI framework for building fast, beautiful applications in the Kotlin programming language. Compared to the old Java Android applications, these use less code, perform better, and are more easily maintainable."
                            }} />
                        </div>
                    </div>
                    <div className="">
                        <h3 className="grid place-items-center subtitle pb-16">Pricing</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <PricingCell props={{
                                title: "Estimate",
                                price: "Free",
                                description: "Talk with an engineer about your app idea.",
                                points: ["No commitment", "No upselling", "Convenient scheduling", "Guided conversation"],
                                isMonthly: false
                            }} />
                            <PricingCell props={{
                                title: "Cross Platform",
                                price: "$5000",
                                description: "Sapphire recommended mobile app product solution.",
                                points: ["Android + iOS", "Fast development", "Custom UI", "Native performance"],
                                isMonthly: false,
                                isFrom: true,
                            }} />
                            <PricingCell props={{
                                title: "Native Experience",
                                price: "$6000+",
                                description: "Truly native mobile and desktop app exerience.",
                                points: ["Android + iOS", "MacOS + Windows", "True native", "Fastest performance"],
                                isMonthly: false,
                                isFrom: true,
                            }} />
                        </div>
                    </div>
                    <Form props={{
                        nameLabel: undefined,
                        emailLabel: undefined,
                        bodyLabel: "Talk with us about our mobile app development",
                        tag: "Mobile app development"
                    }} />
                </div>
            </>
        }} />
    </>
}

export default MobileAppDevelopment