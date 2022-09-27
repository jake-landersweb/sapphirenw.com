import BoundsWrapper from "../../components/boundsWrapper"
import Form from "../../components/form/form"

const Contact = () => {
    return <div className="grid place-items-center">
        <BoundsWrapper>
            <Form props={{
                nameLabel: undefined,
                emailLabel: undefined,
                bodyLabel: undefined,
                tag: undefined
            }} />
        </BoundsWrapper>
    </div>
}

export default Contact