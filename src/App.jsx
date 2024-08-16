import React, { useEffect, useState } from "react";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import StickerRow from "./Components/StickerRow";
import SLC from "./Components/SecondLastComponent";
import FinalComponent from "./Components/FinalComponent";
import Footer from "./Components/Footer";
import Loader from "./Components/Loader";
import './App.css';
import './Media.css'


function App() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); // 1 second delay

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  } 


  return (
    <>
      <Header />
      <Hero />
      <div className="hs2 FHL" id="2">
        <div className="content">
          A teaching experience that is all about you!
        </div>

        <div className="line">

        </div>

        <div className="content">
          Get a Maths Diagnostic before we begin.
        </div>

        <div className="line fjfjfjff">

        </div>

        <div className="content">
          Mastering the art of zen while taking exams.
        </div>

        <div className="line">

        </div>

        <div className="content">
          Engaging with maths IRL, to learn and to love it!
        </div>
      </div>
      <StickerRow />
      <SLC/>
      <FinalComponent/>
      <Footer/>
    </>
  );
}

export default App;
