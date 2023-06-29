import Construction from "@/components/construction";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Image from "@/components/image";
import SafeArea from "@/components/safeArea";
import ServiceCell from "@/components/serviceCell";
import Head from "next/head";
import { AiOutlineRise } from "react-icons/ai";
import { BiWorld } from "react-icons/bi";
import { LuBrain } from "react-icons/lu";

export default function About() {

    const cell = (src: string, name: string, desciption: string) => {
        return <div className="grid grid-cols-5 gap-4 place-items-center">
            <div className="col-span-2 md:col-span-1">
                <Image props={{
                    src: src,
                    alt: name,
                    divClass: "min-w-[80px] rounded-md overflow-hidden",
                    imgClass: "min-w-[80px]"
                }} />
            </div>
            <div className="col-span-3 md:col-span-4 space-y-2">
                <h3 className="text-2xl font-medium">{name}</h3>
                <p>{desciption}</p>
            </div>
        </div>
    }

    return <div className="">
        <Head>
            <title>Sapphire - About</title>
            <meta name="description" content="Sapphire NW, a leading AI consulting firm, helps small and medium-sized businesses in integrating and leveraging AI technologies effectively to boost profitability, efficiency, and customer satisfaction." />
            <meta name="keywords" content="AI Consulting, AI Integration, AI Deployment, AI in Business, Sapphire NW, Large Language Models, AI for SMBs" />
            <meta name="author" content="Sapphire NW" />
            <meta property="og:title" content="Sapphire NW - About" />
            <meta property="og:description" content="Sapphire NW, a leading AI consulting firm, helps small and medium-sized businesses in integrating and leveraging AI technologies effectively to boost profitability, efficiency, and customer satisfaction." />
            <meta property="og:image" content="https://sapphirenw.com/sapphire-email.png" />
            <meta property="og:url" content="https://sapphirenw.com/about" />
            <meta property="og:site_name" content="Sapphire NW" />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content="Sapphire NW" />
            <meta name="twitter:description" content="Sapphire NW, a leading AI consulting firm, helps small and medium-sized businesses in integrating and leveraging AI technologies effectively to boost profitability, efficiency, and customer satisfaction." />
            <meta name="twitter:image" content="https://sapphirenw.com/sapphire-email.png" />
        </Head>
        <div className="">
            <div className="bg-[url('/images/portland-scape.jpg')] bg-cover bg-no-repeat bg-opacity-30 absolute top-0 left-0 w-[100%] h-[100vh] x-[-1]"></div>
            <div className="bg-main-900 bg-opacity-70 absolute top-0 left-0 w-[100%] h-[100vh]"></div>
            <div className="relative z-10">
                <div className="">
                    <Header />
                    <SafeArea>
                        <div data-aos="fade-up" className="px-4 min-h-[70vh] md:min-h-[80vh] space-y-8 text-lt mt-8 md:mt-16">
                            <h1 className='text-5xl md:text-7xl font-bold text-center max-w-3xl mx-auto'>Your Local Develpoment Firm</h1>
                            <p className='text-xl md:text-2xl text-center max-w-3xl mx-auto'>Located in the Pacific Northwest, Sapphire NW focuses on creating genuine, tong-tenured relationships with our clients.</p>
                            <div className="grid place-items-center">
                                <a href={"/contact"}>
                                    <p className="button px-6 py-4">CONTACT US</p>
                                </a>
                            </div>
                        </div>
                    </SafeArea>
                    <div className="bg-lt-200 text-dk py-16 md:py-32 md:space-y-32">
                        <div className="max-w-[1000px] mx-auto px-4 md:px-8">
                            <div className="space-y-16">
                                <h2 className='text-4xl md:text-5xl font-bold'>Meet Your Team Leads</h2>
                                {cell("/images/kevin.png", "Kevin", "Kevin is our web development and app architecture specialist. He oversees most projects that Sapphire NW takes on, and takes an active role in shaping the product or service to be the best it can possibly be. He also takes on develpoment tasks when a web application is needed for a client, leveraging his 20+ years in the web development industry, and his extensive knowledge of the AWS Cloud platform.")}
                                {cell("/images/jake.png", "Jake", "Jake is a recent college graduate and main developer of AI technologies at Sapphire NW. He has spent signifigant amounts of time researching and developing AI systems and AI powered applications since 2020. He also takes on mobile development for the company, creating polished user interfaces that clients love to interact with.")}
                            </div>
                        </div>
                        <div id="who-you-are" className="max-w-[1000px] mx-auto space-y-16">
                            <h2 className='text-4xl md:text-5xl font-bold'>Who You Are</h2>
                            <div className="grid grid-cols-1 gap-4 ">
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

                    <Footer collapseItems={[]} />
                </div>
            </div>
        </div>
    </div>
}