import ButtonAction from "./buttons/buttonAction"
import ButtonType from "./buttons/buttonType"

type PricingCellProps = {
    title: string
    price: string
    description: string,
    points: string[],
    isMonthly?: boolean
    isFrom?: boolean
}

const PricingCell = ({ props }: { props: PricingCellProps }) => {
    const { title, price, description, points, isMonthly = false, isFrom = false } = props

    const listItem = (title: string) => {
        return <li className="flex items-center space-x-3">
            <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
            <span>{title}</span>
        </li>
    }

    const content = []

    for (var i = 0; i < points.length; i++) {
        content.push(listItem(points[i]))
    }

    return <div className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 dark:border-bg-dark-600 xl:p-8 dark:bg-bg-dark-700 dark:text-white w-full">
        <h3 className="mb-4 text-2xl font-semibold">{title}</h3>
        <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400 h-[50px]">{description}</p>
        <div className="flex justify-center items-baseline my-8">
            {isFrom ? <span className="text-gray-500 dark:text-gray-400">FROM</span> : <></>}
            <span className="mr-2 text-5xl font-extrabold">{price}</span>
            {isMonthly ? <span className="text-gray-500 dark:text-gray-400">/month</span> : <></>}
        </div>
        <ul role="list" className="mb-8 space-y-4 text-left">
            {content}
        </ul>
        <a href="#" className="text-white bg-main hover:bg-main-600 transition-colors font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-primary-900">Get started</a>
    </div>
}

export default PricingCell