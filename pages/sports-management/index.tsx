import Footer from "@/components/footer";
import Header from "@/components/header";
import Link from "@/components/hoverMenu/link";
import Image from "@/components/image";
import SafeArea from "@/components/safeArea";
import ServiceLargeItem from "@/components/serviceLargeItem";
import Head from "next/head";

export default function SportsManagement() {

    const cell = (src: string, alt: string, href: string, title: string, desc: string, reverse: boolean) => {

        const img = <Image props={{
            src: src,
            alt: alt,
            divClass: "max-w-[500px]",
            imgClass: "min-w-[200px] md:min-w-[400px]"
        }} />


        return <div className={`${reverse ? "md:flex-row-reverse" : ""} md:flex md:items-center md:space-y-0 space-y-8`}>
            <div className="space-y-2 max-w-screen-sm md:text-left text-center">
                <h3 className="text-2xl font-bold">{title}</h3>
                <p className="text-gray-500">{desc}</p>
            </div>
            <div className={`${reverse ? "md:pr-16" : "md:pl-16"} grid place-items-center`}>
                {reverse ? <div data-aos="fade-right">{img}</div> : <div data-aos="fade-left">{img}</div>}
            </div>
        </div>
    }

    return <div className="">
        <Head>
            <title>Sapphire - Sports Management</title>
            <meta name="description" content="Crosscheck Sports gives you unmatched features and customization to easily manage your sports team. From adult league to AAA, we got you covered." />
            <meta name="keywords" content="AI Consulting, AI Integration, AI Deployment, AI in Business, Sapphire NW, Large Language Models, AI for SMBs" />
            <meta name="author" content="Sapphire NW" />
            <meta property="og:title" content="Sapphire - Sports Management" />
            <meta property="og:description" content="Crosscheck Sports gives you unmatched features and customization to easily manage your sports team. From adult league to AAA, we got you covered." />
            <meta property="og:image" content="https://sapphirenw.com/sapphire-email.png" />
            <meta property="og:url" content="https://sapphirenw.com/sports-management" />
            <meta property="og:site_name" content="Sapphire NW" />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content="Sapphire - Sports Management" />
            <meta name="twitter:description" content="Crosscheck Sports gives you unmatched features and customization to easily manage your sports team. From adult league to AAA, we got you covered." />
            <meta name="twitter:image" content="https://sapphirenw.com/sapphire-email.png" />
        </Head>
        <div className="bg-[url('/images/xcheck-background.jpeg')] bg-cover bg-no-repeat bg-opacity-30 absolute top-0 left-0 w-[100%] h-[100vh] x-[-1]"></div>
        <div className="bg-main-900 bg-opacity-30 absolute top-0 left-0 w-[100%] h-[100vh]"></div>
        <div className="relative z-10">
            <div className="">
                <Header />
                <SafeArea>
                    <div className="h-[80vh] grid place-items-center">
                        <div data-aos="fade-up" className="grid max-w-screen-xl px-4 py-8 mx-auto gap-4 lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
                            <div className="mr-auto place-self-center lg:col-span-7">
                                <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-center md:text-left">Sports Management Software</h1>
                                <p className="max-w-2xl mb-6 font-light text-gray-300 lg:mb-8 md:text-lg lg:text-xl text-center md:text-left">Sapphire developed the powerful Crosscheck Sports engine. Power your own personal sports team for a fraction of the price.</p>
                                <div className="grid place-items-center md:block mb-4 md:mb-0">
                                </div>
                            </div>
                            <div className="lg:mt-0 lg:col-span-5 grid place-items-center">
                                <Image props={{
                                    src: "/images/xcheck-showcase.png",
                                    alt: "Crosscheck sports mobile app",
                                    divClass: "max-w-[500px]",
                                    imgClass: ""
                                }} />
                            </div>
                        </div>
                        <a href="#getting-started" className="hidden md:block">
                            <div className="text-center text-gray-300 hover:text-gray-400 transition-colors">
                                <p>Getting Started</p>
                                <p>&darr;</p>
                            </div>
                        </a>
                    </div>
                </SafeArea>
                <div className="bg-lt-100 text-dk py-16 md:py-32 md:space-y-32 px-4">
                    <div className="max-w-[1000px] mx-auto">
                        <div className="space-y-16">
                            <div className="space-y-2 grid place-items-center">
                                <h2 id="getting-started" className='text-4xl md:text-5xl font-bold'>Getting Started</h2>
                                <p className="text-lg text-gray-500 max-w-2xl text-center">Getting your team up and running with Crosscheck Sports takes no more than 15 minutes of your time. Just follow these 3 steps:</p>
                            </div>
                            <div className="space-y-8 md:space-y-16 grid place-items-center">
                                <div className="space-y-4 overflow-hidden">
                                    <div data-aos="fade-left" data-aos-delay="100" className="flex items-center space-x-4">
                                        <p className="h-[50px] w-[50px] min-h-[50px] min-w-[50px] bg-acc text-white rounded-full grid place-items-center text-lg font-bold">1</p>
                                        <div className="">
                                            <h3 className="text-2xl font-bold grid place-items-center md:block">Creating a sports team</h3>
                                            <p className="text-gray-500 md:text-left text-center max-w-2xl">First, you need to create a page for your team. This includes your team name, your sport, and some various configuration options like colors, stats, and custom field options.</p>
                                        </div>
                                    </div>
                                    <div data-aos="fade-left" data-aos-delay="200" className="flex items-center space-x-4">
                                        <p className="h-[50px] w-[50px] min-h-[50px] min-w-[50px] bg-acc text-white rounded-full grid place-items-center text-lg font-bold">2</p>
                                        <div className="">
                                            <h3 className="text-2xl font-bold grid place-items-center md:block">Uploading an existing roster</h3>
                                            <p className="text-gray-500 md:text-left text-center max-w-2xl">Next, you can download the Crosscheck Sports roster excel template, fill out your roster information like email, name, number, and jersey size. Then you can import this sheet into the app to automatically create your roster.</p>
                                        </div>
                                    </div>
                                    <div data-aos="fade-left" data-aos-delay="300" className="flex items-center space-x-4">
                                        <p className="h-[50px] w-[50px] min-h-[50px] min-w-[50px] bg-acc text-white rounded-full grid place-items-center text-lg font-bold">3</p>
                                        <div className="">
                                            <h3 className="text-2xl font-bold grid place-items-center md:block">Sync League Calendar</h3>
                                            <p className="text-gray-500 md:text-left text-center max-w-2xl">Lastly, you can paste the link of your schedule calendar most sport leagues will provide for you, and Crosscheck automatically manages creating your events, filling in your roster, keeping the events in-sync, and notifying your team of upcomming events.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-lt-100 text-dk py-16 md:py-32 md:space-y-32 px-4">
                    <SafeArea>
                        <div className="space-y-8">
                            <div className=" grid place-items-center space-y-2">
                                <h2 className='text-4xl md:text-5xl font-bold'>What This Gets You</h2>
                                <p className="text-lg text-gray-500 max-w-2xl text-center">Following the above steps automatically gives you access to the following features with no setup.</p>
                            </div>
                            <div className="space-y-4">
                                {cell("/images/schedule-management.png", "Sports Schedule Management", "/schedule-management", "Schedule Management", "A schedule needs to be a frictionless exchange of information. We give you the right tools for the job. Create games, practices, or other events, along with custom information to deliver to your users.", false)}
                                {cell("/images/roster-management.png", "Roster Management", "/roster-management", "Roster Management", "Crosscheck was created out of the need for better roster management. Gone are the days of old Excel spreadsheets, we give complete customization over rosters in a tiered system: team, season, and event.", true)}
                                {cell("/images/customization.png", "Customization", "/customization", "Customization", "We can't think of every use case that you may have, but we don't have to! The Crosscheck engine gives you the ability to add any custom information you want at any level. Along with appearance, tailor make the app experience for your team!", false)}
                                {cell("/images/communication.png", "Communication", "/communication", "Communication", "Building a community around your team is super important. We try to give you the tools to do that. Commenting on player's check-in statuses and a full featured chat with images and videos, with more features planned along the way.", true)}
                            </div>
                        </div>
                    </SafeArea>
                </div>
                <div className="bg-lt-200 text-dk py-16 md:py-32 md:space-y-32 px-4">
                    <SafeArea>
                        <div className="space-y-2 grid place-items-center">
                            <div className="flex space-x-2 items-center">
                                <h2 id="offerings" className='text-4xl md:text-5xl font-bold'>A Customized Experience</h2>
                                <p className="text-white bg-main-700 px-2 py-[2px] rounded-md text-sm font-bold">Pro</p>
                            </div>
                            <p className="text-lg text-gray-500 max-w-2xl text-center">For those looking to take the next step, the Crosscheck Engine can be elegantly ported to a custom website and mobile app for your team. Check out our showcase example, Puck Norris.</p>
                        </div>
                        <div data-aos="fade-up" className="space-y-2">
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
                                    className: "text-gray-500 hover:text-main transition-all"
                                }} />
                            </div>
                        </div>
                    </SafeArea>
                </div>
                <footer>
                    <Footer collapseItems={[
                        {
                            title: "How much does Crosscheck Sports cost to use?",
                            description: "At a team level, Crosscheck Sports is currently completely free to use. We have plans to expand the team functionality experience, offering a non-intrusive premium level. Crosscheck Sports league software has a pricing model suitable for most sports leagues.",
                        },
                        {
                            title: "I have an existing team website, can I integrate Crosscheck Sports into it?",
                            description: "Absolutely! Most of the Crosshcheck Sports app is built around a generic sports engine that is also used to power https://pucknorris.com. This abstraction away from specific app details allows us to easily utilize your Crosscheck team data anywhere you would like.",
                        },
                    ]} initTopic='Sports Management Systems' />
                </footer>
            </div>
        </div>
    </div>

    return <div className="bg-xcheck bg-opacity-70">
        <Header />

    </div>
}