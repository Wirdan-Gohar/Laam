import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar'
import Slider from '../components/Slider'
import Carosel from '../components/Carosel'
import Deals_Carosel from '../components/Deals_of_Day/Deals_Carosel'
export default function Home() {
  return (
    <div className={styles.container}>
     <Navbar/>
     <Slider/>
     <Carosel/>
      <Deals_Carosel/>
    </div>
  )
}
