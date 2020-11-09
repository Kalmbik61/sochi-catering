import React from "react";
import MainContent from "../../components/main_content/mainContent";
import Timer from "../../components/timer/timer";
import About from "../../components/about/about";
import Portfolio from "../../components/portfolio/porfolio";

const Home = () => {
  return (
    <>
      <MainContent />
      <Timer />
      <About />
      <Portfolio />
    </>
  );
};
export default Home;
