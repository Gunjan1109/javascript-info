"use client";

import Head from "next/head";
import EcmaScript from "./components/ecmascript";
import Future from "./components/future";
import Header from "./components/header";
import History from "./components/history";
import Main from "./components/main";
import { useState } from "react";

const Home = () => {
  const [component, setComponent] = useState("main");

  const handleNavigation = (component) => {
    setComponent(component);
  }

  const renderBody = () => {
    switch (component) {
      case "main":
        return <Main handleNavigation={handleNavigation}/>
      case "history":
        return <History />
      case "ecmascript":
        return <EcmaScript />
      case "future":
        return <Future />    
      default:
        break;
    }
  }

  return (
   <>
   <Head>
    <title>Javascript Info</title>
   <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1219299340590086"
     crossorigin="anonymous"></script>
   </Head>
  <Header handleNavigation={handleNavigation}/>
  {renderBody()}
   </>
  );
}

export default Home;