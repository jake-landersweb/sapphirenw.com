import Image from "../image"
import Link from "../link"

const Design = () => {

    const cell = (title: string, src: string, alt: string, href: string, desc: string) => {
        return <div className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 dark:border-bg-dark-600 xl:p-8 dark:bg-bg-dark-700 dark:text-white">
            <h3 className="mb-4 text-2xl font-semibold">{title}</h3>
            <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">{desc}</p>
            <div className="my-auto">
                <Image props={{
                    src: src,
                    alt: alt,
                    divClass: "h-[250px] my-4",
                    imgClass: "h-[250px]"
                }} />
            </div>
            <Link props={{
                href: href,
                child: <>Learn More</>,
                isExternal: false,
                className: "text-white bg-main hover:bg-main-600 font-medium rounded-md text-sm px-5 py-2.5 text-center transition-colors"
            }} />
        </div>
    }

    return <>
        <section>
            <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">The Sapphire Design Principles</h2>
                    <p className="mb-5 font-light text-gray-500 sm:text-xl dark:text-gray-400">Sapphire has an obsession with user experience. These are the pillars of design we hold ourselves to.</p>
                </div>
                <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
                    {cell("Obsession Over User Experience", "/svg/user-experience.svg", "ux icon", "/design", "Most studies agree upon having 30 seconds to make a good impression on your customers. Software that “feels” as good as it looks is one of the most important parts of development for us, and will make the most impact on your customers having a positive first experience.")}
                    {cell("Crafted Architecture", "/svg/building.svg", "building icon", "/design", "We take “use the right tool for the job not the right job for the tool” to heart. Your unique problems will require unique solutions, and our flexibility in using whatever frameworks or software design that your problems require represents that.")}
                    {cell("Native Experiences", "/svg/devices.svg", "desktop and mobile devices", "/design", "When deciding what tools we will use to build your applications, we give high weight to truly native experiences. We stick to natively compiled mobile applications, Typescript for web development, Swift for Apple ecosystems, and Go or Dart for backend services. These choices enhance the feel and speed of our products exponentially.")}
                </div>
            </div>
        </section>
    </>
}

export default Design