import AssetCell from "../assetCell"
import Image from "../image"
import Link from "../link"

const Design = () => {

    return <>
        <section>
            <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">The Sapphire Design Principles</h2>
                    <p className="mb-5 font-light text-gray-500 sm:text-xl dark:text-gray-400">Sapphire has an obsession with user experience. These are the pillars of design we hold ourselves to.</p>
                </div>
                <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
                    <AssetCell title="Obsession Over User Experience" src="/svg/user-experience.svg" alt="ux icon" href="/design/user-experience" desc="Most studies agree upon having 30 seconds to make a good impression on your customers. Software that “feels” as good as it looks is one of the most important parts of development for us, and will make the most impact on your customers having a positive first experience." />
                    <AssetCell title="Crafted Architecture" src="/svg/building.svg" alt="building icon" href="/design/architecture" desc="We take “use the right tool for the job not the right job for the tool” to heart. Your unique problems will require unique solutions, and our flexibility in using whatever frameworks or software design that your problems require represents that." />
                    <AssetCell title="Native Experiences" src="/svg/devices.svg" alt="desktop and mobile devices" href="/design/architecture" desc="When deciding what tools we will use to build your applications, we give high weight to truly native experiences. We stick to natively compiled mobile applications, Typescript for web development, Swift for Apple ecosystems, and Go or Dart for backend services. These choices enhance the feel and speed of our products exponentially." />
                </div>
            </div>
        </section>
    </>
}

export default Design