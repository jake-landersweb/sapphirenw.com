import BoundsWrapper from "../boundsWrapper"

type DesignPageWrapperProps = {
    title: string
    desc: string
    children: JSX.Element
}

const DesignPageWrapper = (props: DesignPageWrapperProps) => {
    return <div className="grid place-items-center">
        <BoundsWrapper>
            <div className="space-y-16 md:space-y-32">
                <div className="h-[80vh] grid place-items-center">
                    <div className="space-y-8">
                        <h2 className="text-6xl md:text-8xl font-bold tracking-tight text-center text-transparent bg-clip-text bg-gradient-to-r from-main to-acc">{props.title}</h2>
                        <p className="subtext text-2xl text-center max-w-4xl">{props.desc}</p>
                    </div>
                </div>
                <div className="">
                    {props.children}
                </div>
            </div>
        </BoundsWrapper>
    </div>
}

export default DesignPageWrapper