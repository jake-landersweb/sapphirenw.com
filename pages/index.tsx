import Footer from "@/components/footer";
import Header from "@/components/header";
import SafeArea from "@/components/safeArea";
import ServiceCell from "@/components/serviceCell";
import Image from "next/image";
import { BsLayersHalf } from "react-icons/bs";
import { RiBrushLine, RiGroupLine } from 'react-icons/ri';
import { AiOutlineMobile, AiOutlineRise } from 'react-icons/ai';
import FeedbackCell from "@/components/feedbackCell";
import { GiHand } from 'react-icons/gi';
import { BiCube, BiServer, BiWorld } from 'react-icons/bi';
import ServiceLargeItem from "@/components/serviceLargeItem";
import Link from "next/link";
import Head from "next/head";
import { LuBrain } from 'react-icons/lu'
import { FaBrain } from "react-icons/fa";

export default function AppDev() {
    return <div className="">
        <Head>
            <title>Sapphire NW</title>
            <meta name="description" content="Scalable, Impactful App Development Services, Bridging Cutting-Edge Technology and Business Ingenuity for Personalized Industry Success, Handcrafted in the Pacific Northwest." />
            <meta name="keywords" content="AI Consulting, AI Integration, AI Deployment, AI in Business, Sapphire NW, Large Language Models, AI for SMBs" />
            <meta name="author" content="Sapphire NW" />
            <meta property="og:title" content="Sapphire NW" />
            <meta property="og:description" content="Scalable, Impactful App Development Services, Bridging Cutting-Edge Technology and Business Ingenuity for Personalized Industry Success, Handcrafted in the Pacific Northwest." />
            <meta property="og:image" content="https://sapphirenw.com/sapphire-email.png" />
            <meta property="og:url" content="https://sapphirenw.com" />
            <meta property="og:site_name" content="Sapphire NW" />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content="Sapphire NW" />
            <meta name="twitter:description" content="Scalable, Impactful App Development Services, Bridging Cutting-Edge Technology and Business Ingenuity for Personalized Industry Success, Handcrafted in the Pacific Northwest." />
            <meta name="twitter:image" content="https://sapphirenw.com/sapphire-email.png" />
        </Head>
        <div className="bg-[url('/images/eye.jpg')] bg-cover bg-no-repeat bg-opacity-30 absolute top-0 left-0 w-[100%] h-[100vh] x-[-1]"></div>
        <div className="bg-main-900 bg-opacity-70 absolute top-0 left-0 w-[100%] h-[100vh]"></div>
        <div className="relative z-10">
            <div className="">
                <Header />
                <SafeArea>
                    <div data-aos="fade-up" className="px-4 min-h-[70vh] md:min-h-[80vh] space-y-8 text-lt mt-8 md:mt-16">
                        <h1 className='text-5xl md:text-7xl font-bold text-center max-w-3xl mx-auto'>App and AI Development that Works For You.</h1>
                        <p className='text-xl md:text-2xl text-center max-w-3xl mx-auto'>Scalable Cloud Application Development Services. Integrating the Latest Technogies and AI Paradigms Into Your Business, Handcrafted in the Pacific Northwest</p>
                        <div className="grid place-items-center">
                            <a href={"#offerings"}>
                                <p className="button px-6 py-4">LEARN HOW WE CAN HELP</p>
                            </a>
                        </div>
                    </div>
                </SafeArea>
                <div className="bg-lt-100 text-dk py-16 md:py-32 md:space-y-32">
                    <SafeArea className="px-4 md:px-8">
                        <div className="space-y-16">
                            <h2 id="offerings" className='text-4xl md:text-5xl font-bold'>What We Offer</h2>
                            <div className="grid lg:grid-cols-3 gap-4">
                                <ServiceCell props={{
                                    icon: <BsLayersHalf size={50} />,
                                    title: 'Native Application Development',
                                    description: "Leverage the power of platform-specific technologies with Sapphire NW's native app development services. We specialize in creating highly responsive, efficient, and platform-optimized applications for the web, iOS, Android, Windows, and MacOS. Our focus on native development ensures seamless performance, better user experience, and higher app store acceptance rates.",
                                    href: '#who-you-are'
                                }} />
                                <ServiceCell props={{
                                    icon: <LuBrain size={50} />,
                                    title: 'AI Integrations',
                                    description: "We use the latest LLMs from OpenAI, Anthropic, Google, and Hugging Face and tailor them to work for your existing workflows, supercharging your business practices. From the most advanced AI content-creation workflow in the industry, to crafting large scale internal AI systems that integrate seamlessly with your existing practices, we are your go-to AI developer/consultants.",
                                    href: '/ai'
                                }} />
                                <ServiceCell props={{
                                    icon: <BiServer size={50} />,
                                    title: 'Improvement and Hosting',
                                    description: "Does your business's growth eclipse the capabilities of an older application? Have you become dissatisfied with your current development team? We at Sapphire NW specialize in revamping online business presence. Our expertise will supercharge your web traffic, optimize your SEO ratings, all while keeping hosting costs down. Together, we will create a flexible development plan that works for your online business goals.",
                                    href: '/existing-software'
                                }} />
                            </div>
                        </div>
                    </SafeArea>
                    <div id="about" className="text-lt mt-[-200px] md:pt-0">
                        <div className="md:grid grid-cols-7">
                            <div className="col-span-3 overlap p-4 md:p-0">
                                <Image src={'/images/portland.jpg'} alt={'Portland, OR city skyline'} height={1000} width={1500} />
                            </div>
                            <div className="bg-main-900 pt-[300px] col-span-4 p-8 md:p-16 md:pl-32 space-y-4 md:z-[1] md:relative">
                                <h2 className='text-4xl md:text-5xl font-bold'>About Us</h2>
                                <div className="space-y-4 md:max-w-xl 2xl:max-w-3xl">
                                    <p>Located in the bustling heart of the Pacific Northwest, Sapphire NW is a forward-thinking app development firm dedicated to empowering businesses with custom-tailored web, mobile, and desktop applications. Our unique blend of skills in software engineering, user experience design, and business strategy allows us to create impactful apps, particularly those leveraging artificial intelligence.</p>
                                    <p>But we&apos;re more than just a service provider; we are your strategic ally in the digital era. Our services span from conceptualizing your app&apos;s purpose and features to its development and deployment, thereby empowering your business to thrive in today&apos;s app-centric world. Additionally, our expertise in the field of artificial intelligence sets us apart. Utilizing the latest Large Language Models (LLMs) from renowned providers like OpenAI, Anthropic, Google, and Hugging Face, we can fine-tune these sophisticated models to boost your existing workflows, leading to unprecedented levels of efficiency and innovation.</p>
                                    <p>Our company was born out of a vision to be the leading app and AI development firm in the Pacific Northwest. Today, we take immense pride in partnering with a variety of businesses, using our innovative solutions to shape a digitally-enhanced, AI-driven future.</p>
                                    <div className="">
                                        <Link href="/about"><p className="text-gray-500 hover:text-acc transition-colors">Learn More &rarr;</p></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-lt-100 px-4 text-dk py-8 md:py-16">
                    <div className="max-w-2xl mx-auto">
                        <FeedbackCell props={{
                            author: 'Michelle Labrosse - Cheetah Learning',
                            feedback: 'Kevin has been the primary programmer for our business for the past 15 years. We‘ve gone through numerous technology changes in that time and Kevin has kept up with it all making sure our business is best leveraging the available technology to keep our highly automated business running smoothly. Besides being an astute business man who often leads the changes we need to make to stay viable, he is also very responsive to make the changes we request as well.'
                        }} />
                    </div>
                </div>
                <div className="bg-lt-100 px-4 text-dk py-8 md:py-16">
                    <div className="max-w-[1000px] mx-auto">
                        <div className="space-y-16">
                            <h2 id="who-you-are" className='text-4xl md:text-5xl font-bold'>Who You Are</h2>
                            <div className="grid grid-cols-1 gap-4 max-w-[1000px] mx-auto">
                                <ServiceCell props={{
                                    icon: <LuBrain size={50} />,
                                    title: 'AI Curious Businesses',
                                    description: "You've heard the buzz about AI, and you're intrigued. You know there's a lot of potential in it, but the world of machine learning seems overwhelming and complex. You need a reliable partner to make sense of it all and integrate it into your workflows. That's exactly where we come in - we'll handle the complex stuff, you reap the benefits.",
                                    href: ''
                                }} />
                                <ServiceCell props={{
                                    icon: <BiWorld size={50} />,
                                    title: 'Web Presence Seekers',
                                    description: "Your business is booming offline, but your online presence? Not so much. Maybe you've got a website, but it's out of date, or you haven't got around to developing one at all. You realize it's time to bring your business to the digital forefront. We can make that happen, giving you a shiny, modern web presence that reflects your brand perfectly.",
                                    href: ''
                                }} />
                                <ServiceCell props={{
                                    icon: <AiOutlineRise size={50} />,
                                    title: 'Tech Upgrade Enthusiasts',
                                    description: "Your business model is solid, your products or services are great, but there's room for improvement in your technological infrastructure. Maybe you have an existing app that's clunky and outdated, or perhaps you're keen to develop new software to streamline operations. We're here to revamp your tech, optimizing your systems and ultimately making your life easier.",
                                    href: ''
                                }} />
                            </div>
                        </div>
                    </div>
                </div>
                <div id="who-you-are" className="bg-lt-200 px-4 text-dk py-8 md:py-16">
                    <div className="max-w-[1000px] mx-auto">
                        <div className="space-y-16">
                            <h2 id="offerings" className='text-4xl md:text-5xl font-bold'>What Makes Us Different?</h2>
                            <div className="space-y-16 md:space-y-32">
                                <ServiceLargeItem props={{
                                    title: "Seamless AI Integration",
                                    src: "/images/ai-brain.png",
                                    alt: "AI brain",
                                    reverse: false,
                                    description: "Sapphire NW believes in the transformative power of AI. We don't just implement AI systems, we integrate them seamlessly into your business, enhancing operations and fostering growth. We're committed to creating AI solutions that work in perfect harmony with your existing processes. With Sapphire NW, expect more than mere innovation—experience the future of business, today.",
                                    isNew: true,
                                    learnMoreHref: "/ai"
                                }} />
                                <ServiceLargeItem props={{
                                    title: "Drive To Improve",
                                    src: "/svg/improvement.svg",
                                    alt: "Improvement",
                                    reverse: true,
                                    description: "Sometimes good design takes a second pass. That's why we always value input from our customer before comitting to a design. Plus, once a product is released, our drive for design perfection is reflected in continuous updates and tweaks to the design."
                                }} />
                                <ServiceLargeItem props={{
                                    title: "Service Dashboards",
                                    src: "/svg/charts.svg",
                                    alt: "Web dashboards",
                                    reverse: false,
                                    description: "Discover the power of intuitive control with Sapphire NW's 'Service Dashboard'. A single interface provides comprehensive tools and advanced analytics, transforming how you interact with your applications. Gain insights, make decisions, and propel your business to new heights. With our Service Dashboard, take the driver's seat in your digital journey."
                                }} />
                                <ServiceLargeItem props={{
                                    title: "Ongoing Support and Consulting",
                                    src: "/images/support.png",
                                    alt: "Web support",
                                    reverse: true,
                                    description: "With Sapphire NW, you're never alone on your digital journey. We remain connected, actively hosting and upgrading your infrastructure, while partnering with you to map out future strategies. Experience a partnership that evolves with your needs, balancing current stability with future innovation."
                                }} />
                                <ServiceLargeItem props={{
                                    title: "Fluid Design Language",
                                    src: "/svg/design-process.svg",
                                    alt: "Design Process",
                                    reverse: false,
                                    description: "Before working on a project, the designers at Sapphire work to create a cohesive design template with guidance from you. Then, this design template is passed to the engineers to build software that looks as great as it works."
                                }} />
                            </div>
                        </div>
                    </div>
                </div>
                <footer>
                    <Footer collapseItems={[
                        {
                            title: "How will app development integrate with my existing business operations?",
                            description: "At Sapphire NW, our app development process is designed to mesh seamlessly with your existing business model. We analyze your workflows, pinpoint areas where a bespoke app can enhance efficiency or user engagement, and tailor solutions that integrate smoothly into your operations."
                        },
                        {
                            title: "What kind of return on investment can I expect from a custom-developed app?",
                            description: "While ROI can differ per specific applications, custom-developed apps usually enhance customer engagement, streamline operations, and provide valuable user behavior data. Most of our clients start witnessing positive returns within 6-12 months post-deployment, with continued benefits over time."
                        },
                        {
                            title: "How does Sapphire NW ensure the privacy and security of user data within the apps developed?",
                            description: "Adhering to strict data security standards and complying with all relevant privacy laws, Sapphire NW ensures robust security features are baked into every app we develop. We respect user data privacy and utilize it strictly for agreed-upon purposes. Your users' privacy and data security are our foremost priorities."
                        },
                    ]} initTopic="Custom App Develpment" />
                </footer>
            </div>
        </div>
    </div>
}