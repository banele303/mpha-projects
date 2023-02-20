import React from 'react'


const servicesSeo = () => {
  return (
    <div>
       <Head>
       <title>
        About  SouthFlow ,  Agency For Chiropractors & Osteopaths
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
      </Head>
      <Navbar/>
      
        <Seo/>
        <Calendly/>
        <Footer/>
    </div>
  )
}

export default servicesSeo
