import Header from '@/components/header';
import ServiceCell from '@/components/serviceCell';
import Head from 'next/head';
import Link from 'next/link';
import { TbRobot, TbCrane } from 'react-icons/tb'
import { MdOutlineArticle } from 'react-icons/md'
import { LuLightbulb } from 'react-icons/lu'
import Image from 'next/image';
import FeedbackCell from '@/components/feedbackCell';
import SolutionCell from '@/components/solutionCell';
import Form from '@/components/form';
import { Collapse, createTheme } from '@nextui-org/react';
import SafeArea from '@/components/safeArea';
import { FaRegCompass } from 'react-icons/fa'
import Footer from '@/components/footer';

const AI = () => {
    return <>
        <Head>
            <title>Sapphire - AI</title>
            <meta name="description" content="Sapphire NW, a leading AI consulting firm, helps small and medium-sized businesses in integrating and leveraging AI technologies effectively to boost profitability, efficiency, and customer satisfaction." />
            <meta name="keywords" content="AI Consulting, AI Integration, AI Deployment, AI in Business, Sapphire NW, Large Language Models, AI for SMBs" />
            <meta name="author" content="Sapphire NW" />
            <meta property="og:title" content="Sapphire NW - AI" />
            <meta property="og:description" content="Sapphire NW, a leading AI consulting firm, helps small and medium-sized businesses in integrating and leveraging AI technologies effectively to boost profitability, efficiency, and customer satisfaction." />
            <meta property="og:image" content="https://sapphirenw.com/sapphire-email.png" />
            <meta property="og:url" content="https://sapphirenw.com/ai" />
            <meta property="og:site_name" content="Sapphire NW" />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content="Sapphire NW" />
            <meta name="twitter:description" content="Sapphire NW, a leading AI consulting firm, helps small and medium-sized businesses in integrating and leveraging AI technologies effectively to boost profitability, efficiency, and customer satisfaction." />
            <meta name="twitter:image" content="https://sapphirenw.com/sapphire-email.png" />
        </Head>
        <div className="">
            <div className="bg-[url('/images/background.webp')] bg-cover bg-no-repeat bg-opacity-30 absolute top-0 left-0 w-[100%] h-[100vh] x-[-1]"></div>
            <div className="bg-main-900 bg-opacity-70 absolute top-0 left-0 w-[100%] h-[100vh]"></div>
            <div className="relative z-10">
                <div className="">
                    <Header />
                    <SafeArea>
                        <div data-aos="fade-up" className="px-4 min-h-[70vh] md:min-h-[80vh] space-y-8 text-lt mt-8 md:mt-16">
                            <h1 className='text-5xl md:text-7xl font-bold text-center max-w-3xl mx-auto'>Unleashing the Power of AI for Your Business</h1>
                            <p className='text-xl md:text-2xl text-center max-w-3xl mx-auto'>Practical, Pioneering AI Solutions, Merging Interdisciplinary Expertise for Niche Industry Success, Crafted in the Pacific Northwest</p>
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
                                        icon: <LuLightbulb size={50} />,
                                        title: 'Innovations',
                                        description: 'Sapphire NW goes beyond traditional consulting services, offering a suite of innovative products and services designed to empower businesses in unique and impactful ways. Our goal is to help you unlock the full potential of AI, whether that means creating efficient workflows, driving customer engagement, or leveraging data for actionable insights.',
                                        href: '#consulting-services'
                                    }} />
                                    <ServiceCell props={{
                                        icon: <MdOutlineArticle size={50} />,
                                        title: 'AI SEO Tools',
                                        description: "Seamlessly combine AI prowess and traditional programming expertise: the Autonomous AI-Powered Blog Management Platform. Our platform is a testament to the creative potential of AI, offering a fully automated, AI-run blog operation that can create, manage, and grow your online presence. It's not just a tool—it's a dynamic partner that can take your content strategy to the next level.",
                                        href: '#auto-blog'
                                    }} />
                                    <ServiceCell props={{
                                        icon: <TbRobot size={50} />,
                                        title: 'LLM Integrations',
                                        description: "Embrace the future of content strategy with PortlandAI's innovative solutions designed to harness the power of AI for unparalleled content amalgamation and utilization. Our unique approach integrates advanced AI technologies such as chatbots and vector databases, offering a transformational content experience.",
                                        href: '#llm-integrations'
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
                                    <h2 className='text-4xl md:text-5xl font-bold'>About Us - AI</h2>
                                    <div className="space-y-4 md:max-w-xl 2xl:max-w-3xl">
                                        <p>Situated in the vibrant Pacific Northwest, Sapphire NW is a pioneering AI consulting firm focused on transforming businesses through the strategic application of AI technologies. We blend our interdisciplinary expertise in genetics, molecular biology, and computer science to create bespoke AI solutions, particularly for niche industries within the pharmaceutical, biotechnical, and medical fields.</p>
                                        <p>Our team is not just about offering expert services; we believe in fostering partnerships. From crafting your business&apos;s AI strategy to developing tailored AI applications, we&apos;re with you at every step, empowering your business to thrive in this AI-driven era.</p>
                                        <p>Sapphire NW was born from a vision to be the leading AI consulting firm in the Pacific Northwest. Today, we&apos;re proud to work with diverse businesses, leveraging our unique AI solutions to shape an empowered future.</p>
                                        <p>Welcome to Sapphire NW – where innovation meets practicality, and businesses meet their AI potential. Let&apos;s embark on this AI journey together.</p>
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
                                        icon: <LuLightbulb size={50} />,
                                        title: 'Visionary SMBs and Innovative Problem-Solvers',
                                        description: "For small to medium-sized businesses that see the future unfolding with AI, we are your key to that future. We understand that you're innovative, constantly seeking solutions to improve and grow in this rapidly changing landscape. However, you may lack the resources, knowledge, or time to fully explore the potential AI holds for your business. That's where Sapphire NW steps in. We're here to bring our expertise to your challenges, working side-by-side to transform your innovative ideas into practical AI-driven solutions. Whether you're looking to increase efficiency, optimize processes, or offer your customers a new, AI-enhanced experience, we'll guide you on your AI journey.",
                                        href: ''
                                    }} />
                                    <ServiceCell props={{
                                        icon: <FaRegCompass size={50} />,
                                        title: 'Industry Specialists Seeking AI Expertise',
                                        description: "Whether you're navigating the complexities of healthcare, deciphering the intricacies of supply chain management, or operating within any industry with its unique challenges, we know that expertise matters. Your industry isn't a one-size-fits-all kind, and your AI solutions shouldn't be either. That's why Sapphire NW is here to be your collaborative partner, bringing a depth of AI knowledge tailored to the nuances of your specific field. We don't just apply AI; we merge it with an understanding of your unique industry, ensuring the solutions we develop are not just technologically advanced but also contextually apt. Let us help you master the digital transformation in a way that respects and enhances your specialism.",
                                        href: ''
                                    }} />
                                    <ServiceCell props={{
                                        icon: <TbCrane size={50} />,
                                        title: 'Ideators in Need of AI Implementation',
                                        description: "You've envisioned the possibilities, understood the potential, and now you're ready to step into the realm of AI. But translating that vision into reality isn't always straightforward, especially when it comes to integrating sophisticated AI technologies like Large Language Models into your existing workflows. That's where Sapphire NW excels. We turn your AI aspirations into tangible business assets, no matter how big or small your ideas might be. Our role is to simplify the complexities, navigate the challenges, and implement your AI vision with precision. Your ideas are the foundation; we're the builders making them a reality.",
                                        href: ''
                                    }} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="navigating-ai" className="grid grid-cols-1 md:grid-cols-2 gap-0">
                        <div className="bg-main-900 px-4 py-8 md:py-16">
                            <div className="max-w-[600px] mx-auto text-lt space-y-2">
                                <h3 className='text-3xl md:text-4xl pb-2'>Navigating the Complexity of AI Deployment</h3>
                                <p>As the potential of AI continues to unfurl, small to medium-sized businesses are intrigued by the possibilities it offers. However, unlocking the full potential of AI, particularly sophisticated technologies like Large Language Models, often seems like navigating a labyrinth.</p>
                                <p>The initial step, understanding the AI technology itself, is a daunting challenge. From selecting the appropriate AI models and tools to training, testing, and fine-tuning them, the process can be overwhelmingly technical. Moreover, each business has unique needs, and a solution that works for one might not work for another, adding an extra layer of complexity.</p>
                                <p>Once an AI solution is ready, integrating it into existing workflows presents another set of hurdles. This process often involves reshaping current systems, handling voluminous data, managing computational resources, and ensuring seamless interaction between AI components and other parts of the business. Companies like Google and Amazon, with their vast resources, often find this challenging - it&apos;s an even bigger struggle for smaller businesses.</p>
                                <p>This is where Sapphire NW comes in. Our goal is to simplify the process of AI integration. We handle the complexities of AI, from understanding your business&apos;s unique needs, selecting and tuning the appropriate AI models, to integrating them seamlessly into your workflows. With us, you&apos;re not just getting an AI solution; you&apos;re getting a partner that guides you through every step of your AI journey, turning complexities into opportunities for growth.</p>
                            </div>
                        </div>
                        <div className="bg-lt-100 px-4 py-8 md:py-16">
                            <div className="max-w-[600px] mx-auto text-dk space-y-2">
                                <h3 className='text-3xl md:text-4xl pb-2'>Leveraging AI for Practical Business Impact</h3>
                                <p>AI is often touted as the key to unprecedented business growth. But how does this translate into tangible, practical improvements in your daily operations? How can AI not just enhance, but revolutionize, the way you do business? Identifying the areas where AI can be leveraged effectively and then measuring its impact can be a daunting task, especially for small to medium-sized businesses.</p>
                                <p>AI isn&apos;t just about flashy tech or the novelty of automation. Its real power lies in its ability to drive profit, increase efficiency, and improve customer satisfaction in ways not previously possible. But to tap into this power, businesses need a deep understanding of both AI and their own operations, a combination that is often hard to achieve.</p>
                                <p>For instance, AI can help automate customer service through AI chatbots, providing faster, 24/7 support to your customers. Or, AI can streamline your supply chain, predicting demand, and optimizing logistics. It can even analyze huge volumes of data to provide insights that can drive strategic decision-making. But implementing these solutions without a clear understanding of their impact and alignment with your business objectives can lead to ineffective outcomes.</p>
                                <p>This is where Sapphire NW steps in. We don&apos;t just implement AI; we work with you to identify where and how AI can best serve your business. We&apos;re here to bridge the gap between AI&apos;s potential and its practical application, ensuring the solutions we develop bring about the improvements you&apos;re seeking. Our expert team will guide you in pinpointing opportunities, implementing tailored AI solutions, and measuring their impact to ensure a positive, tangible change in your business operations.</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-lt-200 px-4 text-dk py-8 md:py-16">
                        <SafeArea className="space-y-16">
                            <h2 className='text-4xl md:text-5xl font-bold'>Featured Offerings</h2>
                            <div className="space-y-16 md:space-y-32">
                                <div id="consulting-services">
                                    <SolutionCell props={{
                                        title: 'Consulting Services',
                                        items: [
                                            {
                                                title: "Applied AI Consulting",
                                                content: <p>Our experienced team is committed to helping businesses harness the power of AI to drive efficiency and profitability. We specialize in translating complex AI concepts into real-world applications that add value to your business. From leveraging LLMs for custom chatbots to utilizing AI for data observability and processing, we work closely with our clients to identify their unique needs and tailor our services accordingly.</p>
                                            },
                                            {
                                                title: "Interdisciplinary Expertise",
                                                content: <p>We&apos;re not just technologists, but scientists with a deep understanding of molecular biology, medical sciences, and bioethics. Our interdisciplinary expertise allows us to navigate complex ethical questions, especially in sectors like pharmaceuticals, biotech, and healthcare. We can ensure that your AI initiatives are not only profitable but also ethically sound and socially responsible.</p>
                                            },
                                            {
                                                title: "AI Innovation Lab",
                                                content: <p>Our Innovation Lab is where we put our creative thinking into action, experimenting with the latest AI technologies and methodologies. The solutions we develop in our lab are designed to meet the unique challenges and opportunities in your industry. From designing efficient workflows to generating autonomous content, our Lab is committed to pushing the boundaries of what AI can do for your business.</p>
                                            }
                                        ],
                                        src: '/svg/business-plan.svg',
                                        alt: 'People meeting in a room',
                                        linkTitle: 'Schedule a free meeting',
                                        link: 'https://calendly.com/jake-sapphirenw/30min'
                                    }} />
                                </div>
                                <div id="auto-blog">
                                    <SolutionCell props={{
                                        title: 'Auto-Blog SEO',
                                        items: [
                                            {
                                                title: "Overview",
                                                content: <p>Meet Auto-blog, the cutting-edge blend of large language models (LLMs) and traditional programming designed to revolutionize your content generation. This tool has been developed to intelligently and autonomously manage your business blog, creating and posting relevant, high-quality content aimed at boosting organic traffic and improving your SEO. With Auto-blog, we take the manual effort out of content creation and management, providing you a seamless, streamlined approach to nurture your digital presence and engage your target audience.</p>
                                            },
                                            {
                                                title: "How It Works",
                                                content: <p>Auto-blog operates on a finely-tuned combination of LLMs and traditional programming techniques. Firstly, it identifies your business niche and extracts key topics based on your business profile and market trends. It then generates content using LLMs, ensuring relevance, readability, and keyword-richness. Following a set schedule, it autonomously posts these articles on your blog, keeping your content fresh and your audience engaged. But that&apos;s not all – Auto-blog also monitors the performance of each post, learns from user engagement metrics, and adjusts future content accordingly. This constant learning and adapting process ensures your content stays optimized, relevant, and impactful.</p>
                                            },
                                            {
                                                title: "The Auto-blog Advantage",
                                                content: <ul>
                                                    <li><span className="font-bold">Efficiency:</span> Say goodbye to the time-consuming process of brainstorming, drafting, editing, and posting blog content. Auto-blog handles all these tasks, freeing up your time to focus on your core business.</li>
                                                    <li><span className="font-bold">Consistency:</span> With Auto-blog, you never have to worry about maintaining a consistent posting schedule. It guarantees regular, timely content for your audience, building credibility and a loyal reader base.</li>
                                                    <li><span className="font-bold">SEO Improvement:</span> Auto-blog crafts keyword-optimized content aimed at boosting your site’s visibility on search engines, driving more organic traffic to your blog.</li>
                                                    <li><span className="font-bold">Adaptability:</span> Auto-blog isn&apos;t static; it&apos;s a learning tool. By analyzing user engagement and feedback, it evolves and adapts, enhancing the effectiveness of your content strategy over time.</li>
                                                    <li><span className="font-bold">Cost-effective:</span> Instead of hiring a dedicated content team, Auto-blog offers a cost-effective solution that does not compromise on quality, making it an ideal choice for businesses of all sizes.</li>
                                                </ul>
                                            }
                                        ],
                                        src: '/images/autoblog.png',
                                        alt: 'Autoblog operation flowchat',
                                        linkTitle: 'Check out our live demo',
                                        link: 'https://blog.portlandai.io'
                                    }} />
                                </div>
                                <div id="llm-integrations">
                                    <SolutionCell props={{
                                        title: 'LLM Integrations',
                                        items: [
                                            {
                                                title: "Chatbot Integration",
                                                content: <p>Utilize the power of Large Language Models (LLMs) to provide round-the-clock assistance and support to your customers. Our custom-built chatbots can mimic human conversation, handle customer inquiries, and provide prompt, accurate responses. Not only will this enhance your customer service, but it will also free up valuable time and resources in your business.</p>
                                            },
                                            {
                                                title: "Vector Databases",
                                                content: <p>Leverage the power of vector databases to facilitate quick and accurate retrieval of information. Our unique AI-powered approach allows businesses to create a semantic search engine that understands the meaning behind the queries, providing highly relevant results. The integration of vector databases can revolutionize your business by providing quicker, more accurate access to the data you need.</p>
                                            },
                                            {
                                                title: "Content Generation & Curation",
                                                content: <p>With our innovative AI technology, create personalized, engaging content on a massive scale. Our AI models are capable of producing content that resonates with your target audience, whether it&apos;s for a blog, social media, or customer communication. This approach not only improves engagement but also allows your team to focus on other strategic areas of your business.</p>
                                            }
                                        ],
                                        src: '/svg/chat-tweak.svg',
                                        alt: 'AI Chat-bot tweaking customizing',
                                        linkTitle: 'Check out our live chatbot',
                                        link: 'https://pucknorris.com/chat'
                                    }} />
                                </div>
                            </div>

                        </SafeArea>
                    </div>
                    <footer>
                        <Footer collapseItems={[
                            {
                                title: "How does AI integration work with my existing business processes?",
                                description: "At Sapphire NW, we implement AI technologies in a phased approach to minimize disruption. We first evaluate your existing workflows, identify areas where AI can enhance efficiency or outcomes, and then custom design solutions that smoothly integrate with your operations.",
                            },
                            {
                                title: "What kind of return on investment can I expect from implementing AI solutions?",
                                description: "While the ROI can vary based on specific use-cases, AI solutions generally lead to increased efficiency, reduced operational costs, and improved customer experiences. Our clients typically start seeing positive returns within 6-12 months of implementation, with continued growth over time.",
                            },
                            {
                                title: "How is the privacy and security of my data ensured when using AI technologies?",
                                description: "Sapphire NW adheres to stringent data security protocols and complies with all relevant privacy regulations. We ensure that all AI solutions we deploy are designed with robust security measures, and we only use data for the agreed-upon purposes. Your privacy and security are our top priorities.",
                            },
                        ]} initTopic='AI Services' />
                    </footer>
                </div>
            </div>
        </div>
    </>
};

export default AI;