import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head';
import { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import { NextUIProvider, createTheme } from '@nextui-org/react'
import Footer from '@/components/footer';

const theme = createTheme({
    type: "light", // it could be "light" or "dark"
    theme: {
        colors: {
            primary: '#353AB8',
            secondary: '#ff6584',
        },
    }
})

function MyApp({ Component, pageProps }: AppProps) {
    useEffect(() => {
        AOS.init({
            easing: "ease-out-cubic",
            once: true,
            offset: 50,
        });
    }, []);

    return <>
        <Head>
            <script async src="https://www.googletagmanager.com/gtag/js?id=G-L13K300MPS"></script>
            <script
                dangerouslySetInnerHTML={{
                    __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'G-L13K300MPS');
            `,
                }}
            />
        </Head>
        <main className="">
            <div className="">
                <NextUIProvider theme={theme}>
                    <Component {...pageProps} />
                </NextUIProvider>
            </div>
        </main>
    </>
}

export default MyApp