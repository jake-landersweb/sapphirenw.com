import type { NextPage } from 'next'
import { useTheme } from 'next-themes'
import Head from 'next/head'
import { useEffect } from 'react'
import BoundsWrapper from '../components/boundsWrapper'
import ButtonAction from '../components/buttons/buttonAction'
import ButtonSub from '../components/buttons/buttonSub'
import Image from '../components/image'
import Design from '../components/index/design'
import Landing from '../components/index/landing'
import Services from '../components/index/services'
import Solutions from '../components/index/solutions'
import Statement from '../components/index/statement'
import SapphireWay from '../components/sapphireWay'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {

  const properties: React.CSSProperties = {
    // position: "absolute",
    top: "0",
    bottom: "0",
    right: "0",
    left: "0",
    width: "100%",
    height: "200px",
    background: "#2c3e50",
    zIndex: "0",
    transform: "skewY(8deg)",
    // transformOrigin: "top right",
  }

  return (
    <div className="space-y-16 md:space-y-32 grid place-items-center">
      <BoundsWrapper><Landing /></BoundsWrapper>
      <BoundsWrapper><Statement /></BoundsWrapper>
      <BoundsWrapper><Services /></BoundsWrapper>
      <Solutions />
      <BoundsWrapper><Design /></BoundsWrapper>
      <BoundsWrapper><SapphireWay /></BoundsWrapper>
    </div>
  )
}

export default Home
