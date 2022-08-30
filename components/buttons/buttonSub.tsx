type ButtonSubProps = {
    title: string
    onTap: () => void
}

const ButtonSub = ({ props }: { props: ButtonSubProps }) => {
    const { title, onTap } = props
    return <>
        <button onClick={() => onTap()}>
            <div className="px-4 py-2 font-medium rounded-md border border-bg-400 hover:bg-bg-200 transition-all dark:border-bg-dark-400 dark:hover:bg-bg-dark-400">
                <h3>{title}</h3>
            </div>
        </button>
    </>
}

export default ButtonSub