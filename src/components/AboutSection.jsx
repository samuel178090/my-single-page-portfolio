import { useRef, useEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import {
  FiPhone,
  FiMail,
  FiMapPin,
  FiCalendar,
  FiGlobe,
  FiUserCheck,
  FiUser,
} from "react-icons/fi"

const AboutSection = () => {
  const sectionRef = useRef(null)
  const titleRef = useRef(null)
  const introRef = useRef(null)
  const starsRef = useRef([])

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    // Title Animation
    gsap.fromTo(
      titleRef.current,
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          toggleActions: "play none none reverse",
        },
      }
    )

    // Intro Animation
    gsap.fromTo(
      introRef.current,
      { y: 100, opacity: 0, filter: "blur(10px)" },
      {
        y: 0,
        opacity: 1,
        filter: "blur(0px)",
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 60%",
          toggleActions: "play none none reverse",
        },
      }
    )

    // Stars Animation
    starsRef.current.forEach((star, index) => {
      const direction = index % 2 === 0 ? 1 : -1
      const speed = 0.5 + Math.random() * 0.5

      gsap.to(star, {
        x: `${direction * (100 + index * 20)}`,
        y: `${direction * -50 - index * 10}`,
        rotation: direction * 360,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: speed,
        },
      })
    })

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.vars.trigger === sectionRef.current) {
          trigger.kill()
        }
      })
    }
  }, [])

  const addToStars = (el) => {
    if (el && !starsRef.current.includes(el)) {
      starsRef.current.push(el)
    }
  }

  return (
    <section
      ref={sectionRef}
      className="min-h-screen relative overflow-hidden bg-gradient-to-b from-black to-[#9a74cf50] py-20"
    >
      {/* Stars */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(10)].map((_, i) => (
          <div
            ref={addToStars}
            key={`star-${i}`}
            className="absolute rounded-full"
            style={{
              width: `${10 + i * 3}px`,
              height: `${10 + i * 3}px`,
              backgroundColor: "white",
              opacity: 0.2 + Math.random() * 0.4,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* Title */}
      <div className="container mx-auto px-4 flex flex-col items-center justify-center">
        <h1
          ref={titleRef}
          className="text-4xl md:text-6xl font-bold mb-12 text-center text-white opacity-0"
        >
          About Me
        </h1>
      </div>

      {/* Intro */}
      <div
        ref={introRef}
        className="relative w-full flex md:flex-row flex-col justify-between lg:px-24 px-5 items-center opacity-0"
      >
        {/* Text */}
        <div className="flex-1">
          <h3
            className="text-sm md:text-xl font-semibold text-purple-200 z-50 
                       lg:max-w-[45rem] max-w-[27rem] tracking-wide mb-8 md:mb-0 leading-relaxed"
          >
            Hi, I’m <span className="text-purple-400">Samuel Ajewole</span>, a
            full-stack web developer passionate about speed, polish, and
            performance.
            <br />
            <br />
            I have a strong foundation in Mathematical Sciences (Computer
            Science), and I build responsive, user-friendly web interfaces using
            modern technologies such as React, Tailwind CSS, JavaScript, PHP,
            and Laravel.
            <br />
            <br />
            From sleek landing pages to full-scale web applications, I focus on
            writing clean, efficient code, delivering projects quickly, and
            creating seamless user experiences.
          </h3>

          <ul className="text-sm md:text-lg text-purple-300 mt-6 space-y-3 leading-relaxed">
            <li className="flex items-center gap-2">
              <FiCalendar className="text-purple-400" />
              <strong>Birthday:</strong> November 22
            </li>
            <li className="flex items-center gap-2">
              <FiPhone className="text-purple-400" />
              <strong>Phone:</strong> +2348159217148
            </li>
            <li className="flex items-center gap-2">
              <FiMail className="text-purple-400" />
              <strong>Email:</strong> josephsammy1994@gmail.com
            </li>
            <li className="flex items-center gap-2">
              <FiMapPin className="text-purple-400" />
              <strong>From:</strong> Osun State, Nigeria
            </li>
            <li className="flex items-center gap-2">
              <FiMapPin className="text-purple-400" />
              <strong>Address:</strong> Ondo State, Nigeria
            </li>
            <li className="flex items-center gap-2">
              <FiGlobe className="text-purple-400" />
              <strong>Languages:</strong> English, Yoruba
            </li>
            <li className="flex items-center gap-2">
              <FiUserCheck className="text-purple-400" />
              <strong>Full-time:</strong> Active
            </li>
            <li className="flex items-center gap-2">
              <FiUser className="text-purple-400" />
              <strong>Freelance:</strong> Available
            </li>
          </ul>
        </div>

        {/* Image */}
        <div className="flex-1 flex justify-center md:justify-end">
          <img
            className="lg:h-[40rem] md:h-[25rem] h-[18rem] mix-blend-lighten mt-8 md:mt-0"
            src="images/person.png"
            alt="profile-img"
          />
        </div>
      </div>
    </section>
  )
}

export default AboutSection
