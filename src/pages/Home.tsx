import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Process from '../components/sections/Process';
import Projects from '../components/sections/Projects';
import Skills from '../components/sections/Skills';
import Services from '../components/sections/Services';
import WorkWithMe from '../components/sections/WorkWithMe';
import Contact from '../components/sections/Contact';

const Home: React.FC = () => {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Process />
        <Projects />
        <Skills />
        <Services />
        <WorkWithMe />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default Home;
