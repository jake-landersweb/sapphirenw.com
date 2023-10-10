import Footer from "@/components/footer";
import Header from "@/components/header";
import SafeArea from "@/components/safeArea";
import ServiceCell from "@/components/serviceCell";
import Image from "next/image";
import { BsGlobeAmericas, BsLayersHalf, BsLinkedin } from "react-icons/bs";
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
import Form from "@/components/form";

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
                        <h1 className='text-5xl md:text-7xl font-bold text-center max-w-3xl mx-auto'>Building Powerful and Scaleable Applications For The Future.</h1>
                        <p className='text-xl md:text-2xl text-center max-w-3xl mx-auto'>Sapphire NW is focused on building powerful applications in-house for all platforms utilizing the latest technologies and AI integrations.</p>
                        <div className="grid place-items-center">
                            <a href={"#offerings"}>
                                <p className="button px-6 py-4">LEARN MORE ABOUT US</p>
                            </a>
                        </div>
                    </div>
                </SafeArea>
                <div className="bg-dk-800 text-lt py-16 md:py-32 md:space-y-32">
                    <SafeArea className="px-4 md:px-8">
                        <div className="space-y-8">
                            <h2 id="offerings" className='text-4xl md:text-5xl font-bold'>Current Projects</h2>
                            <ServiceLargeItem props={{
                                title: "Intelligent Content Creation",
                                src: "/images/ai-brain.png",
                                alt: "AI brain",
                                reverse: false,
                                description: "Sapphire NW believes in the transformative power of AI, while also being concious of recycled information. That is why we have built the most powerful AI content creation tool to create long-form, well researched documents on a wide array of topics. These topics can then be human-verified and advertised on a blog, and used to create insightful social media impacts for your services and products.",
                                isNew: true,
                                learnMoreHref: "/ai",
                                content: <div className="items-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
                                    <a href="https://blog.portlandai.io" target="_blank" rel="noopener noreferrer" className={`w-full sm:w-auto bg-dk-600 hover:bg-dk-400 text-lt-400 rounded-md inline-flex items-center justify-center px-4 py-2.5`}>
                                        <div className="pr-4">
                                            <BsGlobeAmericas size={27} />
                                        </div>
                                        <div className="text-left">
                                            <div className="mb-1 text-xs">View the</div>
                                            <div className="-mt-1 font-sans text-sm font-semibold">Live Demo</div>
                                        </div>
                                    </a>
                                </div>
                            }} />
                            <ServiceLargeItem props={{
                                title: "Workout Notepad",
                                src: "/images/wn-graphic.png",
                                alt: "Workout Notepad Showcase",
                                reverse: true,
                                description: "Workout Notepad was crafted out of our passion for exercise and overall health and wellbeing. Existing mobile apps did not capture the essence of what a workout log is all about, so we set out to create the most ellegant, seamless, and feature complete workout journal for experienced athletes of all kinds. Workout Notepad represents our attention to detail.",
                                isNew: true,
                                content: <div className="">
                                    <div className="items-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
                                        <a href="https://apps.apple.com/pk/app/workout-notepad/id6453561144" target="_blank" rel="noopener noreferrer" className={`w-full sm:w-auto bg-dk-600 hover:bg-dk-400 text-lt-400 rounded-md inline-flex items-center justify-center px-4 py-2.5`}>
                                            <svg className="mr-3 w-7 h-7" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="apple" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="currentColor" d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"></path></svg>
                                            <div className="text-left">
                                                <div className="mb-1 text-xs">Download on the</div>
                                                <div className="-mt-1 font-sans text-sm font-semibold">App Store</div>
                                            </div>
                                        </a>
                                        <a href="https://play.google.com/store/apps/details?id=com.landersweb.workout_notepad_v2" target="_blank" rel="noopener noreferrer" className={`w-full sm:w-auto bg-dk-600 hover:bg-dk-400 text-lt-400 rounded-md inline-flex items-center justify-center px-4 py-2.5`}>
                                            <svg className="mr-3 w-7 h-7" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google-play" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"></path></svg>
                                            <div className="text-left">
                                                <div className="mb-1 text-xs">Get in on</div>
                                                <div className="-mt-1 font-sans text-sm font-semibold">Google Play</div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            }} />
                            <ServiceLargeItem props={{
                                title: "Crosscheck Sports",
                                src: "/images/xcheck-showcase.png",
                                alt: "Crosscheck Sports Showcase",
                                reverse: false,
                                description: "The first production app our firm developed. Born out of our personal frustrations with existing sports management apps, Crosscheck Sports was built with flexbility and customization in mind. Our experience participating, managing, and leading sports teams at the youth, adult, and collegiate level equips us with the experience to identify the tools needed most by serious team managers.",
                                isNew: false,
                                learnMoreHref: "/sports-management",
                                content: <div className="items-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
                                    <a href="https://apps.apple.com/pk/app/crosscheck-hockey/id1585600361" target="_blank" rel="noopener noreferrer" className={`w-full sm:w-auto bg-dk-600 hover:bg-dk-400 text-lt-400 rounded-md inline-flex items-center justify-center px-4 py-2.5`}>
                                        <svg className="mr-3 w-7 h-7" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="apple" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="currentColor" d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"></path></svg>
                                        <div className="text-left">
                                            <div className="mb-1 text-xs">Download on the</div>
                                            <div className="-mt-1 font-sans text-sm font-semibold">App Store</div>
                                        </div>
                                    </a>
                                    <a href="https://play.google.com/store/apps/details?id=com.landersweb.pnflutter" target="_blank" rel="noopener noreferrer" className={`w-full sm:w-auto bg-dk-600 hover:bg-dk-400 text-lt-400 rounded-md inline-flex items-center justify-center px-4 py-2.5`}>
                                        <svg className="mr-3 w-7 h-7" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google-play" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"></path></svg>
                                        <div className="text-left">
                                            <div className="mb-1 text-xs">Get in on</div>
                                            <div className="-mt-1 font-sans text-sm font-semibold">Google Play</div>
                                        </div>
                                    </a>
                                    <a href="https://crosschecksports.com" target="_blank" rel="noopener noreferrer" className={`w-full sm:w-auto bg-dk-600 hover:bg-dk-400 text-lt-400 rounded-md inline-flex items-center justify-center px-4 py-2.5`}>
                                        <div className="pr-4">
                                            <BsGlobeAmericas size={27} />
                                        </div>
                                        <div className="text-left">
                                            <div className="mb-1 text-xs">View the</div>
                                            <div className="-mt-1 font-sans text-sm font-semibold">Website</div>
                                        </div>
                                    </a>
                                </div>
                            }} />
                            <ServiceLargeItem props={{
                                title: "Cheetah PMP Management",
                                src: "/images/cheetah.png",
                                alt: "Cheetah PMP Management",
                                reverse: true,
                                description: "Cheetah project management courses represent the premier way to study for and pass your PMP certificaition. With her clients boasting one of the highest pass percentages in the country, her firm busy firm requires constant attention to detail. We developed a completely custom learning management system (LMS) for use in her courses.",
                                isNew: false,
                                learnMoreHref: "/sports-management"
                            }} />
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
                <div className="bg-dk-800">
                    <SafeArea className="px-4 md:px-8 grid place-items-center">
                        <h2 id="offerings" className='text-2xl md:text-3xl font-bold text-center'>Collaborators, Not Clients.</h2>
                        <p className="text-center text-gray-500 text-lg max-w-4xl">We are looking for passionate and innovative business owners and entrepreneurs to collaborate with on projects. If you have an interesting business proposal, and think our skillsets may align, we would love to hear from you.</p>
                    </SafeArea>
                </div>
                <footer className="bg-dk-800">
                    <div className="grid place-items-center p-8">
                        <Form title="Interested in Working With Us?" />
                    </div>
                    <div className="py-6 px-4 bg-dk-700 text-lt-400 flex items-center justify-between z-50">
                        <span className="text-sm text-gray-300 sm:text-center">
                            © 2023 Sapphire NW™. All Rights Reserved.
                        </span>
                        <a href="https://www.linkedin.com/company/sapphire-nw/" target="_blank" rel="noopener noreferrer"><BsLinkedin size={30} className="text-gray-600 hover:text-gray-500 transition-colors" /></a>
                    </div>
                </footer>
            </div>
        </div>
    </div>
}