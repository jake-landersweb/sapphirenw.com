import Link from "next/link"
import ButtonType from "./buttonType"

type ButtonActionProps = {
    title: string
    type?: ButtonType
    onTap?: () => void
    href?: string
    maxWidth?: boolean
}

const ButtonAction = ({ props }: { props: ButtonActionProps }) => {
    const { title, type = ButtonType.button, onTap = () => { }, href = "/", maxWidth = false } = props
    const content = () => {
        return <div className={`${maxWidth ? "w-max" : "px-4"} py-2 font-medium rounded-md border border-main text-txt-dark bg-main hover:bg-main-600 dark:hover:border-main-600 transition-all w-fit`}>
            <h3>{title}</h3>
        </div>
    }
    switch (type) {
        case ButtonType.button: return <>
            <button onClick={() => onTap()}>
                {content()}
            </button>
        </>
        case ButtonType.internalLink: return <>
            <Link href={href} passHref><a>{content()}</a></Link>
        </>
        case ButtonType.externalLink: return <>
            <a href={href} target="_blank" rel="noopener noreferrer">{content()}</a>
        </>
    }
}

export default ButtonAction