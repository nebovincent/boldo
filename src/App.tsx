import React from "react";
import { HelmetProvider, Helmet } from "react-helmet-async";
import "./App.css";
import About from "src/components/about/About";

function App() {
  return (
    <>
      {/* SEO OPTIMIZATION WITH REACT HELMET ASYNC */}
      <HelmetProvider>
        <Helmet>
          <title>Boldo App</title>
          <link rel="canonical" href="" />
          {/* special metatag */}
          <link rel="canonical" href="" />
          <meta property="og:locale" content="en_US" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="" />
          <meta property="og:description" content="" />
          <meta property="og:url" content="" />
          <meta property="og:image" content="" />
          {/* special metatag */}
        </Helmet>
      </HelmetProvider>
      {/* SEO OPTIMIZATION WITH REACT HELMET ASYNC */}

      <About />
    </>
  );
}

export default App;
