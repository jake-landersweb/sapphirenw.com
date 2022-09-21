import CustomAppButtons from "./customButtons"
import XCShowcaseItem from "./xcShowcaseCell"

const XCShowcase = () => {
    return <div className="space-y-16 md:space-y-32">
        <XCShowcaseItem props={{
            title: "Customized Events",
            src: "/images/customized_events.png",
            alt: "Crosscheck event creation app",
            link: "https://crosschecksports.com/custom",
            reverse: false,
            description: "Create a schedule with dynamic events to organize your season and to track your attendance and team’s performance."
        }} />
        <XCShowcaseItem props={{
            title: "Rich Chat",
            src: "/images/rich-chat.png",
            alt: "Crosscheck mobile chat app",
            link: "https://crosschecksports.com/communication",
            reverse: true,
            description: "Keep up communication with your team through a feature-rich chat app supporting images, videos, texts, links, and more."
        }} />
        <XCShowcaseItem props={{
            title: "Roster Management",
            src: "/images/roster-management.png",
            alt: "Crosscheck roster management app",
            link: "https://crosschecksports.com/control",
            reverse: false,
            description: "Build up a backlog of players on your team to create new seasons, add subs to current seasons, and track custom information."
        }} />
        <CustomAppButtons props={{
            title: "Download Crossheck Today"
        }} />
    </div>
}

export default XCShowcase