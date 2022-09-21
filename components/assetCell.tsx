import Image from "./image"
import Link from "./link"

type AssetCellProps = {
    title: string
    src: string
    alt: string
    desc: string
    href: string
    showLearnMore?: boolean
}

const AssetCell = (props: AssetCellProps) => {
    return <div className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 dark:border-bg-dark-600 xl:p-8 dark:bg-bg-dark-700 dark:text-white">
        <h3 className="mb-4 text-2xl font-semibold">{props.title}</h3>
        <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">{props.desc}</p>
        <div className="my-auto">
            <Image props={{
                src: props.src,
                alt: props.alt,
                divClass: "h-[250px] my-4",
                imgClass: "h-[250px]"
            }} />
        </div>
        <Link props={{
            href: props.href,
            child: <>Learn More</>,
            isExternal: false,
            className: `text-white bg-main hover:bg-main-600 font-medium rounded-md text-sm px-5 py-2.5 text-center transition-colors ${props.showLearnMore ?? true ? "" : "hidden"}`
        }} />
    </div>
}
export default AssetCell