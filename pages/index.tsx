import Footer from "@/components/footer";
import Header from "@/components/header";
import SafeArea from "@/components/safeArea";
import ServiceCell from "@/components/serviceCell";
import Image from "next/image";
import { BsLayersHalf } from "react-icons/bs";
import { RiBrushLine, RiGroupLine } from 'react-icons/ri';
import { AiOutlineMobile } from 'react-icons/ai';
import FeedbackCell from "@/components/feedbackCell";
import { GiHand } from 'react-icons/gi';
import { BiCube } from 'react-icons/bi';
import ServiceLargeItem from "@/components/serviceLargeItem";
import Link from "next/link";

export default function AppDev() {
    return <div className="">
        <div className="bg-[url('/images/eye.jpg')] bg-cover bg-no-repeat bg-opacity-30 absolute top-0 left-0 w-[100%] h-[100vh] x-[-1]"></div>
        <div className="bg-main-900 bg-opacity-70 absolute top-0 left-0 w-[100%] h-[100vh]"></div>
        <div className="relative z-10">
            <div className="">
                <Header />
                <SafeArea>
                    <div data-aos="fade-up" className="px-4 min-h-[70vh] md:min-h-[80vh] space-y-8 text-lt mt-8 md:mt-16">
                        <h1 className='text-5xl md:text-7xl font-bold text-center max-w-3xl mx-auto'>Crafting Dynamic Apps Tailored for Your Success</h1>
                        <p className='text-xl md:text-2xl text-center max-w-3xl mx-auto'>Scalable, Impactful App Development Services, Bridging Cutting-Edge Technology and Business Ingenuity for Personalized Industry Success, Handcrafted in the Pacific Northwest</p>
                        <div className="grid place-items-center">
                            <a href={"#offerings"}>
                                <p className="px-6 py-4 border border-txt hover:border-main-900 hover:bg-gradient-to-r from-main to-acc rounded-md font-medium tracking-wider">LEARN HOW WE CAN HELP</p>
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
                                    title: 'Bespoke App Solutions',
                                    description: 'At Sapphire NW, we go beyond traditional development services, offering a suite of custom-tailored app solutions designed to elevate businesses in unique and impactful ways. Our aim is to help you fully harness the power of digital platforms, whether that means streamlining operations, enhancing user engagement, or deriving insights from user behavior data.',
                                    href: '#app-solutions'
                                }} />
                                <ServiceCell props={{
                                    icon: <RiBrushLine size={50} />,
                                    title: 'User Interface & Experience Design',
                                    description: "We believe that an application’s success lies not just in its functionality, but also in its aesthetics and user experience. Our team combines innovative design principles with a deep understanding of user psychology to create visually compelling, easy-to-use applications that not just meet, but exceed user expectations. It's not just about building an app—it's about creating a memorable user journey.",
                                    href: '#ui-ux-design'
                                }} />
                                <ServiceCell props={{
                                    icon: <AiOutlineMobile size={50} />,
                                    title: 'Native App Development',
                                    description: "Leverage the power of platform-specific technologies with Sapphire NW's native app development services. We specialize in creating highly responsive, efficient, and platform-optimized applications for the web, iOS, Android, Windows, and MacOS. Our focus on native development ensures seamless performance, better user experience, and higher app store acceptance rates.",
                                    href: '#native-development'
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
                                    <p>Located in the bustling heart of the Pacific Northwest, Sapphire NW is a forward-thinking app development firm dedicated to empowering businesses with custom-tailored web, mobile, and desktop applications. Our unique blend of skills in software engineering, user experience design, and business strategy allows us to create impactful apps, particularly for specialized industries in the e-commerce, tech, and service sectors.</p>
                                    <p>We're more than just a service provider; we are your strategic partner. From conceptualizing your app’s purpose and features to its development and deployment, we're with you every step of the way, equipping your business to flourish in this app-centric world.</p>
                                    <p>Sapphire NW emerged from the vision to be the leading app development firm in the Pacific Northwest. Today, we're proud to work with a variety of businesses, harnessing our innovative app solutions to sculpt a digitally-enhanced future.</p>
                                    <p>Welcome to Sapphire NW – where innovative design meets pragmatic solutions, and businesses unlock their app development potential. Let's embark on this digital journey together.</p>
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
                <div id="who-you-are" className="bg-lt-100 px-4 text-dk py-8 md:py-16">
                    <div className="max-w-[1000px] mx-auto">
                        <div className="space-y-16">
                            <h2 id="offerings" className='text-4xl md:text-5xl font-bold'>Who You Are</h2>
                            <div className="grid grid-cols-1 gap-4 max-w-[1000px] mx-auto">
                                <ServiceCell props={{
                                    icon: <GiHand size={50} />,
                                    title: 'Visionary Businesses and Tech Innovators',
                                    description: "Whether you're a small startup or an established organization, you see the potential for digital transformation through tailor-made applications. We understand that while you have brilliant ideas, you may lack the expertise, time, or resources to transform these ideas into effective app solutions. That's where Sapphire NW steps in. We bring our technical proficiency to your unique challenges, working together to transform your innovative ideas into scalable app-based solutions. Whether you aim to streamline operations, increase efficiency, or provide your users with an unparalleled digital experience, we're here to support you.",
                                    href: ''
                                }} />
                                <ServiceCell props={{
                                    icon: <RiGroupLine size={50} />,
                                    title: 'Industry Specialists Looking for Custom App Solutions',
                                    description: "You're an expert in your field, navigating the intricacies of your industry every day. We understand that your industry isn't a one-size-fits-all kind, and the apps you use shouldn't be either. At Sapphire NW, we bring in-depth knowledge of app development, paired with a nuanced understanding of your industry needs. We don't just build apps; we tailor them to your unique context, ensuring the solutions we develop are technologically advanced and perfectly suited to your needs. Let's embrace the digital transformation together, enhancing your industry expertise with our custom app solutions.",
                                    href: ''
                                }} />
                                <ServiceCell props={{
                                    icon: <BiCube size={50} />,
                                    title: 'Idea Generators Seeking App Implementation',
                                    description: "You have the ideas and understand the potential of what the right application can do for your operation. But turning that idea into a functional app is not always straightforward. This is where Sapphire NW excels. We bring your app aspirations to life, no matter how big or small your ideas might be. Our role is to simplify the complexities, navigate the challenges, and implement your vision with precision. Your ideas are the blueprint; we're the builders turning them into reality.",
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
                                    title: "Seamless AI Integration",
                                    src: "/images/ai-brain.png",
                                    alt: "AI brain",
                                    reverse: false,
                                    description: "Sapphire NW believes in the transformative power of AI. We don't just implement AI systems, we integrate them seamlessly into your business, enhancing operations and fostering growth. We're committed to creating AI solutions that work in perfect harmony with your existing processes. With Sapphire NW, expect more than mere innovation—experience the future of business, today.",
                                    isNew: true,
                                    learnMoreHref: "/ai"
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