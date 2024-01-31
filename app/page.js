"use client";

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
  <Header handleNavigation={handleNavigation}/>
  {renderBody()}
   </>
  );
}

export default Home;