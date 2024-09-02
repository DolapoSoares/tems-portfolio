import Head from "next/head";
import type { NextPage } from "next";
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Experience from "../components/Experience";
import Skills from "../components/Skills";
import Projects from "../components/Projects"
import ContactMe from "../components/ContactMe";
import Volunteer from "../components/Volunteer";

const Home: NextPage = () => {
  return (
    <div className="bg-[rgb(255,255,255)] text-black h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-slate-400/20 scrollbar-thumb-[#f7ab0a]">
      <Head>
        <title>Temi&rsquo;s Portfolio </title>
      </Head>

      <Header />
      <section id="hero" className="snap-start">
        <Hero />
      </section>

      <section id="about" className="snap-center">
        <About />
      </section>

      <section id="experience" className="snap-center">
      <Experience  />
      </section>

      <section id="skills" className="snap-start">
        <Skills />
      </section>
      
      <section id="projects" className="snap-start">
        <Projects />
      </section>

      <section id="volunteer" className="snap-start">
        <Volunteer />
      </section>
     
      <section id="contactMe" className="snap-start">
        <ContactMe />
      </section>
    </div>
  );
};
export default Home;
