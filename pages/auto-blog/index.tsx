import Header from "@/components/header";
import Image from "@/components/image";
import SafeArea from "@/components/safeArea";
import ServiceCell from "@/components/serviceCell";
import ServiceLargeItem from "@/components/serviceLargeItem";
import { BsBarChartLineFill } from "react-icons/bs";
import { CgSandClock } from 'react-icons/cg'
import { AiOutlineSearch } from 'react-icons/ai'
import { FaShapes, FaMoneyBillWave } from 'react-icons/fa'
import Footer from "@/components/footer";
import { MdDashboard } from 'react-icons/md'
import Head from "next/head";

export default function AutoBlog() {

    return <div className="">
        <Head>
            <title>Sapphire - AI Content Creation</title>
            <meta name="description" content="Optimize SEO, push your products, and generate organic user engagement for your business or product, automatically." />
            <meta name="keywords" content="AI Consulting, AI Integration, AI Deployment, AI in Business, Sapphire NW, Large Language Models, AI for SMBs" />
            <meta name="author" content="Sapphire NW" />
            <meta property="og:title" content="Sapphire - AI Content Creation" />
            <meta property="og:description" content="Optimize SEO, push your products, and generate organic user engagement for your business or product, automatically." />
            <meta property="og:image" content="https://sapphirenw.com/sapphire-email.png" />
            <meta property="og:url" content="https://sapphirenw.com/auto-blog" />
            <meta property="og:site_name" content="Sapphire NW" />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content="Sapphire - AI Content Creation" />
            <meta name="twitter:description" content="Optimize SEO, push your products, and generate organic user engagement for your business or product, automatically." />
            <meta name="twitter:image" content="https://sapphirenw.com/sapphire-email.png" />
        </Head>
        <div className="bg-[url('/images/space.jpg')] bg-cover bg-no-repeat bg-opacity-30 absolute top-0 left-0 w-[100%] h-[100vh] x-[-1]"></div>
        <div className="bg-main-900 bg-opacity-70 absolute top-0 left-0 w-[100%] h-[100vh]"></div>
        <div className="relative z-10">
            <div className="">
                <Header />
                <SafeArea>
                    <div className="h-[80vh] grid place-items-center">
                        <div data-aos="fade-up" className="grid max-w-screen-xl px-4 py-8 mx-auto gap-4 lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
                            <div className="mr-auto place-self-center lg:col-span-6">
                                <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-center md:text-left">Meet Our Auto-Blog.</h1>
                                <p className="max-w-2xl mb-6 font-light text-gray-300 lg:mb-8 md:text-lg lg:text-xl text-center md:text-left">Optimize SEO, push your products, and generate organic user engagement for your business or product, automatically.</p>
                                <div className="grid place-items-center md:block mb-4 md:mb-0">
                                </div>
                            </div>
                            <div className="lg:mt-0 lg:col-span-6 grid place-items-center">
                                <Image props={{
                                    src: "/images/autoblog.png",
                                    alt: "Automatic AI Blog",
                                    divClass: "max-w-[700px]",
                                    imgClass: ""
                                }} />
                            </div>
                        </div>
                        <a href="#why" className="hidden md:block">
                            <div className="text-center text-gray-300 hover:text-gray-400 transition-colors">
                                <p>Learn More</p>
                                <p>&darr;</p>
                            </div>
                        </a>
                    </div>
                </SafeArea>
                <div className="bg-lt-100 text-dk pt-16 md:pt-32 px-4 pb-[232px]">
                    <SafeArea>
                        <div className="space-y-16 md:space-y-32">
                            <div className="space-y-8 md:space-y-16">
                                <h2 id="why" className='text-4xl md:text-5xl font-bold'>But Why?</h2>
                                <ServiceLargeItem props={{
                                    title: "Time-consuming content creation",
                                    src: "/svg/content-creation.svg",
                                    alt: "Content creation time consuming",
                                    reverse: false,
                                    description: "Generating quality content consistently demands a substantial amount of time, a resource always in short supply. With our automatic blogging product, businesses can eliminate the need for dedicated content creation hours. The tool autonomously generates engaging blog posts, saving you valuable time that can be better invested in strategic tasks."
                                }} />
                                <ServiceLargeItem props={{
                                    title: "Complex SEO strategies",
                                    src: "/svg/lost.svg",
                                    alt: "Lost",
                                    reverse: true,
                                    description: "Maintaining visibility in the digital landscape necessitates up-to-date and effective SEO strategies. The constantly evolving nature of SEO rules makes this a daunting task. Our product simplifies this by automatically embedding current SEO best practices into your content, thus enhancing your blog's ranking in search results without any added hassle."
                                }} />
                                <ServiceLargeItem props={{
                                    title: "Difficulty in fostering user engagement",
                                    src: "/svg/engagement.svg",
                                    alt: "Measuring user engagement",
                                    reverse: false,
                                    description: "Creating content that resonates with your audience and promotes engagement can be a complex process. Our automatic blogging tool leverages advanced algorithms to create content tailored to your audience's interests, promoting greater engagement, boosting your brand's reach, and fostering stronger customer relationships."
                                }} />
                            </div>
                        </div>
                    </SafeArea>
                </div>
                <div className="bg-lt-200 text-dk py-16 md:py-32 px-4">
                    <SafeArea>
                        <div className="space-y-16 md:space-y-32">
                            <div className="space-y-2 p-8 text-white bg-main-800 mt-[-200px] shadow-lg max-w-3xl mx-auto">
                                <h2 id="why" className='text-4xl md:text-5xl font-bold'>What is it?</h2>
                                <p>Meet Auto-blog, the cutting-edge blend of large language models (LLMs) and traditional programming designed to revolutionize your content generation. This tool has been developed to intelligently and autonomously manage your business blog, creating and posting relevant, high-quality content aimed at boosting organic traffic and improving your SEO. With Auto-blog, we take the manual effort out of content creation and management, providing you a seamless, streamlined approach to nurture your digital presence and engage your target audience.</p>
                                <div className=""><a className="text-acc hover:text-gray-600 transition-colors underline" href="https://blog.portlandai.io" target="_blank" rel="noopener noreferrer">Check out the live demo &rarr;</a></div>
                            </div>
                            <ServiceLargeItem props={{
                                title: "How It Works",
                                src: "/images/autoblog-how.png",
                                alt: "How autoblog works",
                                reverse: false,
                                description: "Auto-blog operates on a finely-tuned combination of LLMs and traditional programming techniques. Firstly, it identifies your business niche and extracts key topics based on your business profile and market trends. It then generates content using LLMs, ensuring relevance, readability, and keyword-richness. Following a set schedule, it autonomously posts these articles on your blog, keeping your content fresh and your audience engaged. But that&apos;s not all – Auto-blog also monitors the performance of each post, learns from user engagement metrics, and adjusts future content accordingly. This constant learning and adapting process ensures your content stays optimized, relevant, and impactful."
                            }} />
                            <div className="space-y-8 md:space-y-16">
                                <h2 id="why" className='text-3xl md:text-4xl font-bold'>The Auto-Blog Advantage</h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                    <ServiceCell props={{
                                        icon: <BsBarChartLineFill size={50} />,
                                        title: 'Efficiency',
                                        description: 'Say goodbye to the time-consuming process of brainstorming, drafting, editing, and posting blog content. Auto-blog handles all these tasks, freeing up your time to focus on your core business.',
                                        href: ''
                                    }} />
                                    <ServiceCell props={{
                                        icon: <CgSandClock size={50} />,
                                        title: 'Consistency',
                                        description: 'With Auto-blog, you never have to worry about maintaining a consistent posting schedule. It guarantees regular, timely content for your audience, building credibility and a loyal reader base.',
                                        href: ''
                                    }} />
                                    <ServiceCell props={{
                                        icon: <AiOutlineSearch size={50} />,
                                        title: 'SEO Improvement',
                                        description: 'Auto-blog crafts keyword-optimized content aimed at boosting your site’s visibility on search engines, driving more organic traffic to your blog.',
                                        href: ''
                                    }} />
                                    <ServiceCell props={{
                                        icon: <FaShapes size={50} />,
                                        title: 'Adaptability',
                                        description: 'Auto-blog isn&apos;t static; it&apos;s a learning tool. By analyzing user engagement and feedback, it evolves and adapts, enhancing the effectiveness of your content strategy over time.',
                                        href: ''
                                    }} />
                                    <ServiceCell props={{
                                        icon: <FaMoneyBillWave size={50} />,
                                        title: 'Cost-effective',
                                        description: 'Instead of hiring a dedicated content team, Auto-blog offers a cost-effective solution that does not compromise on quality, making it an ideal choice for businesses of all sizes.',
                                        href: ''
                                    }} />
                                    <ServiceCell props={{
                                        icon: <MdDashboard size={50} />,
                                        title: 'Portal',
                                        description: 'Gain access to the Auto-blog portal which gives an overview of the content posted on your various social media accounts. See analyics, engagement, and customize blog posts per platform.',
                                        href: ''
                                    }} />
                                </div>
                            </div>
                        </div>
                    </SafeArea>
                </div>
                <footer>
                    <Footer collapseItems={[
                        {
                            title: "What does the pricing model look like?",
                            description: "There is an upfront development cost while engineers work with you to tweak our product to work exactly for you. After that, depending on usage, the monthly expenses will cover the OpenAI API and hosting costs, which will be significantly less expensive than the hours it would take to generate similar content.",
                        },
                        {
                            title: "What increase in site/product/social engagement can I expect?",
                            description: "This number can vary greatly depending on industry, specific product focus, blog topic, and more, but at the minimum our clients see a 50-70% increase in click-through rate towards their focused endpoint.",
                        },
                    ]} initTopic='Auto-blog platform' />
                </footer>
            </div>
        </div>
    </div>
}