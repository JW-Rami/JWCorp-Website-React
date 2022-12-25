import React from 'react'
import './Services.css';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import LandingServices from '../../components/LandingServices/LandingServices';
import ContentServicesPage from '../../components/ContentServicesPage/ContentServicesPage';
import Google from '../../components/Googlemaps/Google';
import Formulaire from '../../components/Formulaire/Formulaire';
const Services = ({langageState}) => {
  return (
    <>
      {/* <Navbar langageState={langageState}/> */}
      <LandingServices langageState={langageState}/>
      <ContentServicesPage langageState={langageState}/>
      <Formulaire langageState={langageState}/>
      <Google langageState={langageState}/>
      <Footer langageState={langageState}/>

    </>
  )
}

export default Services
