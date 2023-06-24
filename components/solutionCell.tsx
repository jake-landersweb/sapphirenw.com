import { Collapse } from '@nextui-org/react';

export type SolutionCellProps = {
    title: string
    items: SolutionCellItemProps[]
    src: string
    alt: string
    linkTitle: string
    link: string
}

export type SolutionCellItemProps = {
    title: string
    content: JSX.Element
}

export default function SolutionCell({ props }: { props: SolutionCellProps }) {

    const accordion = () => {
        const items = []
        for (let i = 1; i < props.items.length; i++) {
            items.push(
                <Collapse title={props.items[i].title}>
                    {props.items[i].content}
                </Collapse>
            )
        }
        return items
    }

    return <div className="space-y-8">
        <h3 className="text-3xl md:text-4xl">{props.title}</h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-16 overflow-x-hidden">
            <div className="space-y-4">
                <Collapse.Group className="bg-lt-100" bordered>
                    <Collapse title={props.items[0].title} expanded>
                        {props.items[0].content}
                    </Collapse>
                    {accordion()}
                </Collapse.Group>
                <div className="">
                    <a className="w-fit" href={props.link} target="_blank" rel="noopener noreferrer"><p className="underline hover:text-acc transition-colors">{props.linkTitle} &rarr;</p></a>
                </div>
            </div>
            <div data-aos="fade-left" className="grid place-items-center">
                <img src={props.src} alt={props.alt} />
            </div>
        </div>
    </div>
}