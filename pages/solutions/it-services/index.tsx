import Head from "next/head";
import Form from "../../../components/form/form";
import Image from "../../../components/image";
import PricingCell from "../../../components/pricingCell";
import SolutionsItem from "../../../components/solutions/solutionsItem";
import SolutionsItem2 from "../../../components/solutions/solutionsItem2";
import SolutionsPageWrapper from "../../../components/solutions/solutionsPageWrapper";

export default function ItServices() {
    return <div className="">
        <Head>
            <title key="title">Sapphire - IT Services</title>
            <meta name="keywords" id="keywords" content="Email Messaging System,Portland Mobile App Notifications,Self-Hosted Email Service,Portland Application Notifications,Robust Email System" />
        </Head>
        <SolutionsPageWrapper title="IT Services" desc="The growing pains of web infrastructure can be hard. Let the experts at Sapphire help deal with the challenges of a scaling business." src="/svg/server-down.svg" alt="Server" moreTag="#why">
            <div className="space-y-16 nd:space-y-32">
                <SolutionsItem description="The IT Services We Offer" id="why" hasHeight={false}>
                    <div className="space-y-16 pt-16">
                        <SolutionsItem2 title={"Enterprise Messaging System"} desc={"Deploy private versions of the Sapphire email and mobile notification services. Customize the service to your needs, and most importantly, OWN your customer's data."} id={"#enterprise-messaging-system"}>
                            <Image props={{
                                src: "/svg/mail-sent.svg",
                                alt: "Envelope",
                                divClass: "max-w-[400px]",
                                imgClass: ""
                            }} />
                        </SolutionsItem2>
                        <SolutionsItem2 title={"Private File Server"} reverse={true} desc={"We offer a range of file service options to manage your documents. Choose from using either Google's suite of products, or hosting your own deployment of Seafile."} id={"#private-file-server"}>
                            <Image props={{
                                src: "/svg/files.svg",
                                alt: "Private file server",
                                divClass: "max-w-[400px]",
                                imgClass: ""
                            }} />
                        </SolutionsItem2>
                        <SolutionsItem2 title={"Cloud Hosting"} reverse={false} desc={"Looking for a cloud suite solution with more features? Let the engineers at Sapphire configure, deploy, and host on a wide range of cloud providers."} id={"#cloud-hosting"}>
                            <Image props={{
                                src: "/svg/cloud-hosting.svg",
                                alt: "Cloud hosting providers",
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
                            price: "$50",
                            description: "Custom configuration and deployment of one service.",
                            points: ["Sapphire management", "Private self hosting", "Flexible rate limit", "Full 24hr support"],
                            isMonthly: true,
                            isFrom: true,
                        }} />
                        <PricingCell props={{
                            title: "Multiple Services",
                            price: "$100",
                            description: "Deployment of 2+ private services",
                            points: ["Messaging Services", "File suite deployments", "Unlimited Rate Limit", "First-class support"],
                            isMonthly: true,
                            isFrom: true,
                        }} />
                    </div>
                </div>
                <Form props={{
                    nameLabel: undefined,
                    emailLabel: undefined,
                    bodyLabel: "Talk with us about messaging systems systems",
                    tag: "IT Services"
                }} />
            </div>
        </SolutionsPageWrapper>
    </div>
}