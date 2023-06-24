import { FaStar } from 'react-icons/fa'

export type FeedbackCellProps = {
    author: string
    feedback: string
}

export default function FeedbackCell({ props }: { props: FeedbackCellProps }) {
    const stars = () => {
        const items = []
        for (let i = 0; i < 5; i++) {
            items.push(<FaStar className='text-orange-300' size={25} />)
        }
        return items
    }
    return <div className="space-y-8 overflow-x-hidden">
        <div data-aos="fade-left" className="flex space-x-2">
            {stars()}
        </div>
        <p data-aos="fade-left" data-aos-delay="100" className='text-lg text-light'>&quot;{props.feedback}&quot;</p>
        <p data-aos="fade-left" data-aos-delay="200" className='font-bold'>{props.author}</p>
    </div>
}