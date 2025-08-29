import { useEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import CustomCursor from "./components/CustomCursor";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import ProgressBar from "./components/ProgressBar";


export default function App() {

  useEffect(() => {
    // register scrolltrigger plugin
    gsap.registerPlugin(ScrollTrigger)

    // refresh scrolltrigger when the page is fully loaded
    ScrollTrigger.refresh()

    //clean up scrolltrigger on component unmount
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill ())
    }

  }, [])


  
  return (
    <>
      <Header />
      <CustomCursor />
      <ProgressBar />

      <main>
        <section id="home">
          <HeroSection />
        </section>

        <section id="about">
          <AboutSection />
        </section>

        <section id="projects">
          <ProjectsSection />
        </section>


<section
  id="experience"
  className="min-h-screen bg-gray-100 text-gray-900 flex flex-col items-center p-6"
>
  <h1 className="text-3xl font-bold mb-6">My Experience</h1>
  <p className="mb-4 text-center">
    Below is my CV. You can read it directly here or download it for later:
  </p>

  {/* Embedded CV Viewer */}
  <div className="w-full max-w-4xl h-[600px] border rounded-xl shadow-lg overflow-hidden">
    <iframe
      src="/CV.pdf"
      title="My CV"
      className="w-full h-full"
    ></iframe>
  </div>

  {/* Download Button */}
  <a
    href="/CV.pdf"
    download="CV.pdf"
    className="mt-6 px-6 py-3 bg-green-600 text-white rounded-xl shadow hover:bg-green-700 transition"
  >
    Download CV
  </a>
</section>




        <section id="contact">
          <ContactSection />
        </section>
      </main>

      <Footer />
    </>
  )

  
}



