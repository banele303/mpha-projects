import Head from 'next/head'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Aboutmore from '../components/Aboutmore';
import Vision from '../components/Vision';
import Footer from '../components/Footer';


export default function Home() {
  return (
    <div >
      <Head>
        <title>Mpha projects</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

    <Navbar/>
    <Hero/>
    <Aboutmore/>
    <Vision/>
    <Footer/>
    </div>
  )
}
