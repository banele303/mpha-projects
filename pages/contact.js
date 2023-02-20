import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Head from "next/head";

import Calendly from "../components/Calendly";

const contact = () => {
  <Head>
  <title>
        Contact the best Marketing Agency Chiropractors & Osteopaths | South Flow 
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
 <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff"></meta>
  <meta name="description" content="making online presence simple" />
  <link rel="icon" href="/favicon.ico" />
</Head>
  return (
    <div className="relative flex flex-col">
      <Navbar />
      <div className="bg-contact w-full h-[500px]">
        
      </div>

      <div className=" -mt-[16rem] md:-mt-[22rem] md:ml-[19rem] pb-[3rem]">
<Calendly/>

      </div>

      <Footer />
    </div>
  );
};

export default contact;