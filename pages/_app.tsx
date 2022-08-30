import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Header from '../components/header/header'
import { useEffect } from 'react';
import { ThemeProvider, useTheme } from "next-themes";
import Footer from '../components/footer';

function MyApp({ Component, pageProps }: AppProps) {
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setTheme("light")
  }, [])


  return (
    <ThemeProvider attribute="class">
      <div className="scroll-smooth text-txt dark:text-txt-dark bg-bg dark:bg-bg-dark">
        <div className="grid place-items-center">
          <div className="fixed top-0 z-50">
            <Header />
          </div>
          <div className="relative w-full min-h-screen pt-[70px] md:pt-[100px] pb-24 md:pb-36">
            <Component {...pageProps} />
          </div>
          <div className="pt-4 w-full">
            <Footer />
          </div>
        </div>
      </div>
    </ThemeProvider>
  )
}

export default MyApp
