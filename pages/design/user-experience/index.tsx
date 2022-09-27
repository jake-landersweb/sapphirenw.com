import DesignPageWrapper from "../../../components/design/designPageWrapper"
import Form from "../../../components/form/form"
import ServiceLargeItem from "../../../components/services/serviceLargeItem"

const UserExperience = () => {
    return <DesignPageWrapper title={"User Experience"} desc={"At Sapphire, we believe that the experience our customers have is placed above all else. We translate that into our excellent design philosophy, and craving to make code that not only works flawlessly, but also 'feels' right."}>
        <div className="space-y-16 md:space-y-32">
            <div className="space-y-16 md:space-y-32">
                <ServiceLargeItem props={{
                    title: "Continuous Testing",
                    src: "/svg/mobile-design.svg",
                    alt: "Mobile App Design",
                    reverse: true,
                    description: "During development, products are routinely tested on a wide range of devices and screen sizes to ensure proper responsiveness and user-interactivity on every platform. No color, corner-radius, padding, or shadow goes unturned."
                }} />
                <ServiceLargeItem props={{
                    title: "Fluid Design Language",
                    src: "/svg/design-process.svg",
                    alt: "Design Process",
                    reverse: false,
                    description: "Before working on a project, the designers at Sapphire work to create a cohesive design template with guidance from you. Then, this design template is passed to the engineers to build software that looks as great as it works."
                }} />
                <ServiceLargeItem props={{
                    title: "Drive To Improve",
                    src: "/svg/improvement.svg",
                    alt: "Improvement",
                    reverse: true,
                    description: "Sometimes good design takes a second pass. That's why we always value input from our customer before comitting to a design. Plus, once a product is released, our drive for design perfection is reflected in continuous updates and tweaks to the design."
                }} />
            </div>
            <Form props={{
                nameLabel: undefined,
                emailLabel: undefined,
                bodyLabel: "Talk to us about our excellence in user experience",
                tag: "user experience"
            }} />
        </div>
    </DesignPageWrapper>
}

export default UserExperience