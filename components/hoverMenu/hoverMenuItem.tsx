import Link from "next/link"

export type HoverMenuItemProps = {
    title: string
    desc: string
    href: string
    isExternal?: boolean
    isNew?: boolean
}

const HoverMenuItem = ({ props }: { props: HoverMenuItemProps }) => {
    const { title, desc, href, isExternal = false, isNew = false } = props

    const content = () => {
        return <div className="md:hover:bg-dk-700 py-2 px-4 cursor-pointer rounded-md">
            <div className="flex space-x-2 items-center">
                <p className="text-lt font-medium">{title}</p>
                {isNew ? <p className="text-white bg-acc px-2 py-[2px] rounded-md text-sm font-bold">New</p> : <></>}
            </div>
            <p className="text-gray-400 font-light">{desc}</p>
        </div>
    }

    if (isExternal) {
        return <>
            <div className="">
                <a href={href} target="_blank" rel="noopener noreferrer">
                    {content()}
                </a>
            </div>
        </>
    } else if (props.href.includes("#")) {
        return <>
            <a href={href}>
                {content()}
            </a>
        </>
    } else {
        return <>
            <Link href={props.href}>{content()}</Link>
        </>
    }
}

export default HoverMenuItem