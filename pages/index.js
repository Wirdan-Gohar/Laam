import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar2 from '../components/Navbar'
import MyNavbar from '../components/Navbar2'
import Slider from '../components/Slider'
import Carosel from '../components/Carosel'
import Deals_Carosel from '../components/Deals_of_Day/Deals_Carosel'
import Features from '../components/Featured _Brands/Features'
import Finish_Touch from '../components/Finishing_Touch/Finish_Touch'
import Shop_By_Price from '../components/Shop_By_Price/Shop_By_Price'
import Footer from '../components/foot/Footer'
import Newsletter from "../components/foot/Newsletter";
import ArrivalCarosel from '../components/New_Arrival/ArrivalCarosel'
import 'bootstrap/dist/css/bootstrap.css'


export default function Home() {
  return (
    <>
    <Head>
        <title>Pernia</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com"  />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@200;400&display=swap"
          rel="stylesheet"
        />
      </Head>
    <div className={styles.container}>
     <Navbar2/>
     <Slider/>
     <ArrivalCarosel/>
      <Deals_Carosel/>
      <Features/>
      <Finish_Touch/>
      <Shop_By_Price/>
      <Newsletter/>
      <Footer />
    </div>
    </>
  )
}
