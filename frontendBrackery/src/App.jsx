import React, {useEffect} from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from './Components/Navbar'
import Home from './Components/Home';
import './index.css';
import Logo from './assets/logo.png';
import Services from './Components/Services';
import Service1 from './Components/Service1';

import './App.css'
import Footer from './Components/Footer';
import Banner from './Components/Banner';
import {BrowserRouter as Router, Routes, } from 'react-router-dom';


const App= () => {
  useEffect(() => {
    AOS.init({
      offset: 120,
      duration: 700,
      easing: 'ease-in-out',
      delay: 100,
    });
  }, []);

  return (
    <>
      <div className='overflow-x-hidden'>

      <Navbar />
      <Home />
      <Banner />
      <Service1 />
      <Services />
      <Footer />
      </div>
    </>
  )
}

export default App
