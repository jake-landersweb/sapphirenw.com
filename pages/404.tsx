import Head from "next/head"
import ButtonAction from "../components/buttons/buttonAction"
import ButtonType from "../components/buttons/buttonType"

const NotFound = () => {
    return <>
        <Head>
            <title key="title">Sapphire - Not Found</title>
            <meta name="keywords" id="keywords" content="Pacific Northwest Development,Portland Software Development,Oregon Software Development,Local Web Development,Mobile App Development,Portland Mobile App Development,Pretty Software,Ellegant UI,Luxury Software Development" />
        </Head>
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
            <div className="mx-auto max-w-screen-sm text-center">
                <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-main">404</h1>
                <p className="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl dark:text-white">Something&apos;s missing.</p>
                <p className="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">Sorry, we can&apos;t find that page. You&apos;ll find lots to explore on the home page. </p>
                <div className="grid place-items-center">
                    <ButtonAction props={{
                        title: "Back to Home",
                        type: ButtonType.internalLink,
                        href: "/"
                    }} />
                </div>
            </div>
        </div>
    </>
}

export default NotFound