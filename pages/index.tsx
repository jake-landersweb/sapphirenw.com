import type { NextPage } from 'next'
import { useTheme } from 'next-themes'
import Head from 'next/head'
import { useEffect } from 'react'
import BoundsWrapper from '../components/boundsWrapper'
import ButtonAction from '../components/buttons/buttonAction'
import ButtonSub from '../components/buttons/buttonSub'
import Form from '../components/form/form'
import Image from '../components/image'
import Design from '../components/index/design'
import Landing from '../components/index/landing'
import Services from '../components/index/services'
import Solutions from '../components/index/solutions'
import Statement from '../components/index/statement'
import SapphireWay from '../components/sapphireWay'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {

  return (
    <>
      <Head>
        <title key="title">Sapphire - PWN Software Company</title>
        <meta name="keywords" id="keywords" content="Pacific Northwest Development,Portland Software Development,Oregon Software Development,Local Web Development,Mobile App Development,Portland Mobile App Development,Pretty Software,Ellegant UI,Luxury Software Development" />
      </Head>
      <div className="space-y-16 md:space-y-32 grid place-items-center">
        <BoundsWrapper><Landing /></BoundsWrapper>
        <BoundsWrapper><Statement /></BoundsWrapper>
        <BoundsWrapper><Services /></BoundsWrapper>
        <Solutions />
        <BoundsWrapper><Design /></BoundsWrapper>
        <BoundsWrapper><SapphireWay /></BoundsWrapper>
        <BoundsWrapper><Form props={{
          nameLabel: undefined,
          emailLabel: undefined,
          bodyLabel: undefined,
          tag: "from index page"
        }} /></BoundsWrapper>
      </div>
    </>
  )
}

export default Home
