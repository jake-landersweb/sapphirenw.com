type ButtonHeaderProps = {
    title: string
    onTap: () => void
}

const ButtonHeader = ({ props }: { props: ButtonHeaderProps }) => {
    const { title, onTap } = props
    return <>
        <button onClick={() => onTap()}>
            <p className="font-medium text-gray-500 dark:text-gray-400 hover:text-main dark:hover:text-main transition-colors">{title}</p>
        </button>
    </>
}

export default ButtonHeader