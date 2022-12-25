import Cta from "../../components/Cta/Cta";
import "./Home.css";
import React, { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import Navbar from "../../components/Navbar/Navbar";
import LandingPage from "../../components/LandingPage/LandingPage";
import NotreMission from "../../components/NotreMission/NotreMission";
import NosValeurs from "../../components/NosValeurs/NosValeurs";
import Google from "../../components/Googlemaps/Google";
import Footer from "../../components/Footer/Footer";
import AnimationsComponent from "../../components/AnimationsComponent/AnimationsComponent";
import Formulaire from "../../components/Formulaire/Formulaire";

function Home({handlingLangage, langageState}) {
  return (
    <>
      <LandingPage langageState={langageState} />
      <NotreMission langageState={langageState} />
      <Cta langageState={langageState} />
      <NosValeurs langageState={langageState} />
      <Formulaire langageState={langageState} />
      <Google langageState={langageState} />
      <Footer langageState={langageState} />
      <AnimationsComponent langageState={langageState} />
    </>
  );
}

export default Home;