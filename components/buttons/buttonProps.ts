import ButtonType from "./buttonType"

type ButtonProps = {
    title: string
    type?: ButtonType
    onTap?: () => void
    href?: string
    maxWidth?: boolean
    className?: string
}

export default ButtonProps