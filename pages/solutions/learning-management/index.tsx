import { FaSchool } from "react-icons/fa"
import { IoLaptopOutline } from "react-icons/io5"
import { AiOutlineCheckCircle, AiOutlineCloseCircle, AiOutlineCloud } from 'react-icons/ai'
import SolutionsItem from "../../../components/solutions/solutionsItem"
import SolutionsPageWrapper from "../../../components/solutions/solutionsPageWrapper"
import { useState } from "react"
import ExamQuestion from "../../../components/examQuestion"
import Image from "../../../components/image"
import SolutionsItem2 from "../../../components/solutions/solutionsItem2"
import PricingCell from "../../../components/pricingCell"
import Form from "../../../components/form/form"
import Head from "next/head"

const LearningManagement = () => {

    const [learningIndex, setLearningIndex] = useState<number>(0)

    const LearningItem = (idx: number, desc: string, src: string, alt: string) => {
        return <button onClick={() => setLearningIndex(idx)} className={`grid place-items-center md:hover:opacity-50 p-4 rounded-md w-full h-full transition-all ${idx == learningIndex ? "md:scale-100 md:opacity-100 border border-bg-300 dark:border-bg-dark-500 md:border-main md:dark:border-main md:border-2" : "md:scale-75 md:opacity-75 border border-bg-300 dark:border-bg-dark-500"}`}>
            <div>
                <Image props={{
                    src: src,
                    alt: alt,
                    divClass: "max-h-[300px]",
                    imgClass: "max-h-[300px]"
                }} />
                <div className="py-4 text-lg text-gray-500">
                    <p className="hidden md:block">{desc}</p>
                    <p className="md:hidden text-center">{getLearningText(idx)}</p>
                </div>
            </div>
        </button>
    }

    const getLearningText = (idx: number) => {
        switch (idx) {
            case 0: return "For the longest time, learning has been taught in a school setting inside of physical classrooms. Students show up to get access to the material they need to learn, and teachers have a limited reach for the amount of students they can handle."
            case 1: return "With major push from the covid-19 pandemic, physical learning was pushed to an online platform. Tools like Zoom and Canvas helped aleviate some of the pains, but there was a large and difficult transition period that is still ongoing at some education facilities."
            default: return "Now, entire classes can be held effortlessly hosted in the cloud. Great teachers get to spread their knowledge to more students than ever before, utilizing robust learning management systems like the offerings from Sapphire."
        }
    }

    return <>
        <Head>
            <title key="title">Sapphire - Learning Management</title>
            <meta name="keywords" id="keywords" content="Portland Learning Management,Portland Online Class Builder,Online Class Tools,Portland LMS,Premier Learning Management,Solid LMS Platform,Beautiful Learning Management System" />
        </Head>
        <SolutionsPageWrapper title="Learning Management Software" desc="Elevate your online learning with the powerful LMS from Sapphire, purpose built for companies like yours." src="/svg/learning-management.svg" alt="Learning management books" moreTag="#why">
            <div id="why" className="space-y-16 md:space-y-32">
                <SolutionsItem id="#why" description="2020 Pushed The World Fully Online, Now You Can Learn There Too.">
                    <div className="space-y-16 grid place-items-center">
                        <div className="grid place-items-center grid-cols-1 md:grid-cols-3 md:max-h-[500px] gap-4 md:gap-0">
                            {LearningItem(0, "Physical Learning", "/svg/school.svg", "Physical school")}
                            {LearningItem(1, "Hybrid Learning", "/svg/online-learning.svg", "Online learning")}
                            {LearningItem(2, "Cloud Learning", "/svg/cloud-hosting.svg", "Cloud Hosting")}
                        </div>
                        <p className="hidden md:block subtext max-w-4xl text-center">{getLearningText(learningIndex)}</p>
                    </div>
                </SolutionsItem>
                <SolutionsItem2 id="#" title="15 Years of LMS Technology." desc="From multiple choice, free response, to select all that apply, use the Sapphire LMS engine to custom compose your exams and courses.">
                    <div className="space-y-2">
                        <ExamQuestion props={{
                            question: "What is the distance between New York and San Francisco?",
                            choices: ["3002 miles", "3214 miles", "2901 miles", "2955 miles"],
                            correctIndex: 2
                        }} />
                    </div>
                </SolutionsItem2>
                <SolutionsItem2 id="#" title="Creating Your Course Has Never Been Easier." desc="We don’t provide just exams, we offer an intuitive course building tool which integrates into any project, whether it is mobile apps, websites, and more." reverse={true}>
                    <Image props={{
                        src: "/svg/factory.svg",
                        alt: "Factory Builder",
                        divClass: "",
                        imgClass: undefined
                    }} />
                </SolutionsItem2>
                <div id="pricing" className="pt-16">
                    <h3 className="grid place-items-center subtitle pb-16">Products</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <PricingCell props={{
                            title: "Estimate",
                            price: "Free",
                            description: "Talk with an engineer about your LMS needs.",
                            points: ["No commitment", "No upselling", "Convenient scheduling", "Guided conversation"],
                            isMonthly: false
                        }} />
                        <PricingCell props={{
                            title: "Course Builder",
                            price: "$2000",
                            description: "Sapphire created custom LMS courser builder.",
                            points: ["Web hosting", "Intuitive interface", "Data interopable", "First-class support"],
                            isMonthly: false,
                            isFrom: true,
                        }} />
                        <PricingCell props={{
                            title: "Enterprise Solution",
                            price: "$6000+",
                            description: "Talk with us about a custom built solution.",
                            points: ["Multiplatform", "Student management", "Complete customization", "First-class support"],
                            isMonthly: false,
                            isFrom: true,
                        }} />
                    </div>
                </div>
                <Form props={{
                    nameLabel: undefined,
                    emailLabel: undefined,
                    bodyLabel: "Talk with us about learning management systems",
                    tag: "Learning management systems"
                }} />
            </div>
        </SolutionsPageWrapper>
    </>
}

export default LearningManagement