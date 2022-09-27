type SolutionsItem2Props = {
    title: string
    desc: string
    id: string
    children: JSX.Element
    reverse?: boolean
}

const SolutionsItem2 = (props: SolutionsItem2Props) => {
    return <div className={`${props.reverse ? "md:flex-row-reverse" : ""} md:flex md:items-center md:space-y-0 space-y-8`}>
        <div className="space-y-2 max-w-screen-sm">
            <h3 className="text-2xl font-bold grid place-items-center md:block">{props.title}</h3>
            <p className="subtext md:text-left text-center">{props.desc}</p>
        </div>
        <div className={`${props.reverse ? "md:pr-16" : "md:pl-16"} grid place-items-center`}>
            {props.children}
        </div>
    </div>
}

export default SolutionsItem2