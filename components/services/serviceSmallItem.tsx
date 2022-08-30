type ServiceSmallItemProps = {
    icon: JSX.Element
    title: string
    description: string
}

const ServiceSmallItem = ({ props }: { props: ServiceSmallItemProps }) => {
    const { icon, title, description } = props
    return <>
        <div className="">
            <div className="flex justify-center text-main dark:text-txt-dark-300 items-center mb-4 w-10 h-10 rounded-full bg-main-300 dark:bg-main dark:bg-opacity-50 bg-opacity-20 lg:h-12 lg:w-12">
                {icon}
            </div>
            <h3 className="mb-2 text-xl font-bold">{title}</h3>
            <p className="subtext mb-2">{description}</p>
        </div>
    </>
}

export default ServiceSmallItem