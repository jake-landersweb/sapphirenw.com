import Head from "next/head"
import BoundsWrapper from "../../components/boundsWrapper"
import Form from "../../components/form/form"

const Contact = () => {
    return <>
        <Head>
            <title key="title">Sapphire - Contact</title>
            <meta name="keywords" id="keywords" content="Contact Us,Portland Contact Developers,Message Pacific Northwest Software" />
        </Head>
        <div className="grid place-items-center">
            <BoundsWrapper>
                <Form props={{
                    nameLabel: undefined,
                    emailLabel: undefined,
                    bodyLabel: undefined,
                    tag: undefined
                }} />
            </BoundsWrapper>
        </div>
    </>
}

export default Contact