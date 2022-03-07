import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar'
import Slider from '../components/Slider'
import Carosel from '../components/Carosel'
import Deals_Carosel from '../components/Deals_of_Day/Deals_Carosel'
import Features from '../components/Featured _Brands/Features'
import Finish_Touch from '../components/Finishing_Touch/Finish_Touch'
import Shop_By_Price from '../components/Shop_By_Price/Shop_By_Price'
export default function Home() {
  return (
    <div className={styles.container}>
     <Navbar/>
     <Slider/>
     <Carosel/>
      <Deals_Carosel/>
      <Features/>
      <Finish_Touch/>
      <Shop_By_Price/>
    </div>
  )
}
