import { BsLinkedin } from 'react-icons/bs'
import SafeArea from './safeArea'
import Form from './form'
import { Collapse, createTheme } from '@nextui-org/react'

export type CollapseProps = {
    title: string
    description: string
}

export default function Footer({ collapseItems, initTopic }: { collapseItems: CollapseProps[], initTopic?: string }) {

    const getItems = () => {
        const items = []

        for (let i = 0; i < collapseItems.length; i++) {
            items.push(
                <Collapse title={collapseItems[i].title}>
                    <p>{collapseItems[i].description}</p>
                </Collapse>
            )
        }
        return items
    }

    return <div className="">
        <div className="hidden md:block h-[200px] bg-lt-200" />
        <div id="contact" className="bg-main-900 p-4 text-lt md:py-16">
            <SafeArea className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <div className="md:mt-[-200px] order-last md:order-first">
                    <Form initTopic={initTopic} />
                </div>
                <div className={createTheme({
                    type: "dark", // it could be "light" or "dark"
                    theme: {
                        colors: {
                            primary: '#3C63EC',
                            secondary: '#A47DE2',
                        },
                    }
                })}>
                    <Collapse.Group bordered>
                        {getItems()}
                    </Collapse.Group>
                </div>
            </SafeArea>
        </div>
        <div className="py-6 px-4 bg-dk-700 text-lt-400 flex items-center justify-between z-50">
            <span className="text-sm text-gray-300 sm:text-center">
                © 2023 Portland AI™. All Rights Reserved.
            </span>
            <a href="https://www.linkedin.com/company/sapphire-nw/" target="_blank" rel="noopener noreferrer"><BsLinkedin size={30} className="text-gray-600 hover:text-gray-500 transition-colors" /></a>
        </div>
    </div>
}