import Image from "./image"

const SapphireWay = () => {
    return <>
        <div className="grid place-items-center max-w-[1000px] border border-bg-300 dark:border-bg-dark-500 rounded-md p-4">
            <div className="flex space-x-2">
                <Image props={{
                    src: "/svg/sapphire.svg",
                    alt: "sapphire logo",
                    divClass: "h-[40px] w-[40px]",
                    imgClass: "h-[40px] w-[40px]"
                }} />
                <h3 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">The Sapphire Way</h3>
            </div>
            <p className="text-lg font-light text-gray-500 dark:text-gray-400 text-center">Sapphire prides itself on user experience above all else while ensuring the proper tools are used for the job. Whether that is building your product from the ground up or taking your current infrastructure to the next level, Sapphire will ensure your products meet the ever-growing demands of your customers. With 20+ years of professional development experience at the top tech companies in the world, your software experiences will be held to the same high standards we hold ourselves to.</p>
        </div>
    </>
}

export default SapphireWay