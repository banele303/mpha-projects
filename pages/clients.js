import React from 'react'
import ClientHero from '../components/ClientHero'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Head from "next/head";
import Testimonials2 from '../components/Testimonials2';
const clients = () => {
  return (
    <div>
       <Head>
       <title>
        What clients are saying about the best Marketing Agency Chiropractors & Osteopaths | South Flow 
        </title>
        <meta
          name="description"
          content="SouthFlow is the best Digitam Marketing Agency in  South Africa for Chiropractors and Osteopath"
        />
        <meta property="og:type" content="website" />

       
        <link
          rel="icon"
          type="image/svg"
          sizes="32x32"
          href="/assets/v2.svg"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff"></meta>
        <meta name="description" content="making online presence simple" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <Navbar/>
        <ClientHero/>
        <Testimonials2/>
        <Footer/>
    </div>

  )
}

export default clients