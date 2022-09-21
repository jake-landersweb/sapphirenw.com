

type SolutionsItemProps = {
    description: string
    id: string
    hasHeight?: boolean
    children: JSX.Element
}

const SolutionsItem = (props: SolutionsItemProps) => {
    return <div id={props.id} className={`grid place-items-center pt-16 ${props.hasHeight ?? true ? "md:h-[100vh]" : ""}`}>
        <h2 className="subtitle text-center max-w-2xl pb-8">{props.description}</h2>
        <div className="">{props.children}</div>
    </div>
}

export default SolutionsItem