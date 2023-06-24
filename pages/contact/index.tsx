import Form from "@/components/form";
import Header from "@/components/header";
import Head from "next/head";

export default function Contact() {
    return <>
        <Head>
            <title key="title">Portland AI - Contact</title>
        </Head>
        <div className="min-h-[95vh]">
            <Header />
            <div className="grid place-items-center pt-8 px-4 pb-8">
                <Form />
            </div>
        </div>
    </>
}