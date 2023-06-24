export type ServiceCellProps = {
    icon: JSX.Element
    title: string
    description: string
    href: string
}

export default function ServiceCell({ props }: { props: ServiceCellProps }) {
    const more = () => {
        if (props.href == "") {
            return <></>
        }
        return <a href={props.href}><p className="hover:underline hover:cursor-pointer hover:text-acc w-fit">Learn More &darr;</p></a>
    }
    return <div data-aos="fade-up" className="bg-white p-4 space-y-4 rounded-md flex flex-col justify-center items-start h-full">
        <div className="p-4 bg-acc w-min rounded-full text-lt">{props.icon}</div>
        <div className="space-y-2 flex-grow">
            <h3 className="text-2xl font-medium">{props.title}</h3>
            <p className="font-light">{props.description}</p>
        </div>
        {more()}
    </div>
}