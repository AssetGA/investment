import Head from "next/head";

function IndexPage() {
  return (
    <div>
      <Head>
        <title>Meta Tag Example</title>
        <meta name="google" content="nositelinkssearchbox" key="sitelinks" />
        <meta name="google" content="notranslate" key="notranslate" />
        <meta
          name="google-site-verification"
          content="llKqjOUP6U9uLUC3o_Xyp9jHfTS53I0gRJ4UrxWiGoU"
        />
      </Head>
      <p>Here we show some meta tags off!</p>
    </div>
  );
}

export default IndexPage;
