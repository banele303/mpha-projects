import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
         
        
         
       
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
                page_path: window.location.pathname,
            });
            `,
            }}
          />
          <script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async></script>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
          <link
            href="https://fonts.googleapis.com/css2?family=Alumni+Sans+Inline+One:ital@0;1&family=Lobster&family=Oleo+Script+Swash+Caps&family=Poppins:wght@100;200;300&display=swap"
            rel="stylesheet"
          />
         
        </Head>
        <body>
          <Main />
          <NextScript />
         
        </body>
      </Html>
    );
  }
}

export default MyDocument;
