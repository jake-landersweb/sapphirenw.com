import Link from "next/link"
import ButtonProps from "./buttonProps"
import ButtonType from "./buttonType"

const ButtonSub = ({ props }: { props: ButtonProps }) => {
    const { title, type = ButtonType.button, onTap = () => { }, href = "/", maxWidth = false } = props
    const content = () => {
        return <div className={`${maxWidth ? "w-max" : "px-4"} py-2 font-medium rounded-md border border-bg-400 hover:bg-bg-200 transition-all dark:border-bg-dark-400 dark:hover:bg-bg-dark-400`}>
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

export default ButtonSub