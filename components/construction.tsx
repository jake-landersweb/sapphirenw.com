import Header from "./header";
import Image from "./image";

export default function Construction() {
    return <div className="">
        <Header />
        <div className="grid place-items-center px-4 pt-16">
            <p className="text-lg pb-16 text-center max-w-2xl">Oops! This page is still under construction. Feel free to explore the rest of our site!</p>
            <Image props={{
                src: "/svg/construction.svg",
                alt: "Under construction",
                divClass: "max-w-[800px]",
                imgClass: ""
            }} />
        </div>
    </div>
}