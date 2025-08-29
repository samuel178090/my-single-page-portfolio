import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const ProjectsSection = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const titleLineRef = useRef(null);
  const triggerRef = useRef(null);
  const horizontalRef = useRef(null);
  const panelRefs = useRef([]);

  const projectImages = [
    { id: 1, title: "Vocational E-learning System", imageSrc: "/images/project-1.png" },
    { id: 2, title: " Video Uploading Startup App", imageSrc: "/images/project-2.png" },
 
    { id: 3, title: "Gaming Landing page Website", videoSrc: "/images/project-3.mp4" },
    { id: 4, title: "Portfolio Website", videoSrc: "/images/project-4.mp4" },
  ];

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Section title animation
    gsap.fromTo(
      titleRef.current,
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Title line animation
    gsap.fromTo(
      titleLineRef.current,
      { width: "0%", opacity: 0 },
      {
        width: "100%",
        opacity: 1,
        duration: 1.5,
        ease: "power3.inOut",
        delay: 0.3,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Section entrance
    gsap.fromTo(
      triggerRef.current,
      { y: 100, rotationX: 20, opacity: 0 },
      {
        y: 0,
        rotationX: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
        delay: 0.2,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Parallax background effect
    gsap.fromTo(
      sectionRef.current,
      { backgroundPosition: "50% 0%" },
      {
        backgroundPosition: "50% 100%",
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      }
    );

    // Horizontal scrolling
    const horizontalScroll = gsap.to(panelRefs.current, {
      xPercent: -100 * (projectImages.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: triggerRef.current,
        start: "top top",
        end: () => `+=${horizontalRef.current?.offsetWidth || 0}`,
        pin: true,
        scrub: 1,
        snap: {
          snapTo: 1 / (projectImages.length - 1),
          duration: { main: 0.2, max: 0.3 },
          delay: 0.1,
        },
        invalidateOnRefresh: true,
      },
    });

    // Image & title animation for each panel
    panelRefs.current.forEach((panel) => {
      const image = panel.querySelector(".project-image");
      const imageTitle = panel.querySelector(".project-title");

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: panel,
          containerAnimation: horizontalScroll,
          start: "left right",
          end: "right left",
          scrub: true,
        },
      });

      tl.fromTo(image, { scale: 0.8, rotate: -10 }, { scale: 1, rotate: 0, duration: 0.5 });

      if (imageTitle) {
        tl.fromTo(imageTitle, { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.3 }, 0.2);
      }
    });

    ScrollTrigger.refresh();

    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, [projectImages.length]);

  return (
    <section
      ref={sectionRef}
      id="horizontal-section"
      className="relative py-20 bg-[#f6f6f6] overflow-hidden"
    >
      {/* Section title */}
      <div className="container mx-auto px-4 mb-16 relative z-10">
        <h2
          ref={titleRef}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-black text-center mb-4 opacity-0"
        >
          Featured Projects
        </h2>
        <div
          ref={titleLineRef}
          className="w-0 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto opacity-0"
        ></div>
      </div>

      {/* Horizontal scroll section */}
      <div ref={triggerRef} className="overflow-hidden opacity-0">
        <div ref={horizontalRef} className="horizontal-section flex md:w-[400%] w-[420%]">
          {projectImages.map((project, index) => (
            <div
              key={project.id}
              ref={(el) => (panelRefs.current[index] = el)}
              className="panel relative flex items-center justify-center"
            >
              <div className="relative w-full h-full flex flex-col items-center justify-center p-4 sm:p-8 md:p-12">
                {project.videoSrc ? (
                  <video
                    id={`projectVideo${project.id}`}
                    className="project-image max-w-full max-h-full rounded-2xl object-cover"
                    src={project.videoSrc}
                    controls
                  />
                ) : (
                  <img
                    className="project-image max-w-full max-h-full rounded-2xl object-cover"
                    src={project.imageSrc}
                    alt={project.title}
                  />
                )}

                <h2 className="project-title flex items-center gap-3 md:text-3xl text-sm md:font-bold text-black mt-6 z-50 text-nowrap hover:text-gray-400 transition-colors duration-300 cursor-pointer">
                  {project.title}
                </h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
