import Form from "@/components/form";
import Header from "@/components/header";
import Head from "next/head";

export default function Contact() {
    return <>
        <Head>
            <title>Sapphire - Contact Us</title>
            <meta name="description" content="Scalable, Impactful App Development Services, Bridging Cutting-Edge Technology and Business Ingenuity for Personalized Industry Success, Handcrafted in the Pacific Northwest." />
            <meta name="keywords" content="AI Consulting, AI Integration, AI Deployment, AI in Business, Sapphire NW, Large Language Models, AI for SMBs" />
            <meta name="author" content="Sapphire NW" />
            <meta property="og:title" content="Sapphire - Contact Us" />
            <meta property="og:description" content="Scalable, Impactful App Development Services, Bridging Cutting-Edge Technology and Business Ingenuity for Personalized Industry Success, Handcrafted in the Pacific Northwest." />
            <meta property="og:image" content="https://sapphirenw.com/sapphire-email.png" />
            <meta property="og:url" content="https://sapphirenw.com/contact" />
            <meta property="og:site_name" content="Sapphire NW" />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content="Sapphire - Contact Us" />
            <meta name="twitter:description" content="Scalable, Impactful App Development Services, Bridging Cutting-Edge Technology and Business Ingenuity for Personalized Industry Success, Handcrafted in the Pacific Northwest." />
            <meta name="twitter:image" content="https://sapphirenw.com/sapphire-email.png" />
        </Head>
        <div className="min-h-[95vh]">
            <Header />
            <div className="grid place-items-center pt-8 px-4 pb-8">
                <Form />
            </div>
        </div>
    </>
}