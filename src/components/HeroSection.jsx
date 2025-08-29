import { motion } from "framer-motion";
import Spline from "@splinetool/react-spline";
const HeroSection = () => {
  return (
      <section className="h-screen bg-gradient-to-b
      from-violet-900 to-black flex xl:flex-row
      flex-col-reverse items-center justify-between
      lg:px-24 px-10 relative overflow-hidden">
       
       {/*Left Section */}
        <div className="z-40 xl:mb-0 mb-[20%]">
            <motion.h1 
              initial={{ opacity: 0, y: 80}}
              animate={{ opacity: 1, y: 0}}
              transition={{
                   type: "spring",
                   stiffness: 40,
                   damping: 25,
                   delay: 1.3,
                   duration: 1.5,
              }}
            className="text-5xl md:text-7xl
            lg:text-8xl font-bold z-10 mb-6">
             Fast Builds <br /> Reliable Results
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 80}}
              animate={{ opacity: 1, y: 0}}
              transition={{
                   type: "spring",
                   stiffness: 40,
                   damping: 25,
                   delay: 1.8,
                   duration: 1.5,
              }}
            className="text-xl md:text-1xl
            lg:text-2xl text-purple-200 max-w-2xl">
               Hi,I'm Samuel. I build fast, reliable websites and web apps that work well on all devices. 
                I focus on clean code, modern design, and meeting deadlines. From marketing sites to
                full redesigns, I create easy-to-use, scalable solutions. If you need a developer
                who communicates clearly, pays attention to detail, and delivers on time, 
                let's connect.
            </motion.p>
        </div>
        
       {/* Right Section */}

        <Spline className="absolute xl:right-[-28%] right-0 top-[-28%] lg:top-0" scene="https://prod.spline.design/j2Hg3U4hEVPB6zs6/scene.splinecode" />

          
      </section>
      
  )
  
}

export default HeroSection