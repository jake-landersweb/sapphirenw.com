import DesignPageWrapper from "../../../components/design/designPageWrapper"
import Form from "../../../components/form/form"
import ServiceLargeItem from "../../../components/services/serviceLargeItem"

const Architecture = () => {
    return <DesignPageWrapper title={"Native Architecture"} desc={"We take “use the right tool for the job not the right job for the tool” to heart. Your unique problems will require unique solutions, and our flexibility in using whatever frameworks or software design that your problems require represents that."}>
        <div className="space-y-16 md:space-y-32">
            <div className="space-y-16 md:space-y-32">
                <ServiceLargeItem props={{
                    title: "Native Experiences",
                    src: "/svg/multi-device.svg",
                    alt: "Multiple Devices",
                    reverse: true,
                    description: "When deciding what tools we will use to build your applications, we give high weight to truly native experiences. We stick to natively compiled mobile applications, Typescript for web development, Swift for Apple ecosystems, and Go or Dart for backend services. These choices enhance the feel and speed of our products exponentially."
                }} />
                <ServiceLargeItem props={{
                    title: "Drive To Learn",
                    src: "/svg/online-learning.svg",
                    alt: "Design Process",
                    reverse: false,
                    description: "At Sapphire, we do not fit your needs to what we are comfortable with. We continue to innovate and learn new things to ensure your business needs are exceeded. Some of the best work we have done comes from using exciting tools new to our engineers."
                }} />
                {/* <ServiceLargeItem props={{
                title: "Drive To Improve",
                src: "/svg/improvement.svg",
                alt: "Improvement",
                reverse: true,
                description: "Sometimes good design takes a second pass. That's why we always value input from our customer before comitting to a design. Plus, once a product is released, our drive for design perfection is reflected in continuous updates and tweaks to the design."
            }} /> */}
            </div>
            <Form props={{
                nameLabel: undefined,
                emailLabel: undefined,
                bodyLabel: "Talk to us about our native architecture.",
                tag: "architecture"
            }} />
        </div>
    </DesignPageWrapper>
}

export default Architecture