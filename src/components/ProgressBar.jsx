import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

const ProgressBar = () => {
        const progressBarRef = useRef(null)
        const progressFillterRef = useRef(null)
        
        useEffect(() => {
            gsap.registerPlugin(ScrollTrigger)
            // create a GSAP animation that update the width of the progress bar
            // based on the scroll position
            gsap.to(progressFillterRef.current, {
                width: "100%",
                ease: "none",
                scrollTrigger: {
                    trigger: document.body,
                    start: "top top",
                    end: "bottom bottom",
                    scrub: 0.3,
                    onUpdate: (self) => {
                        // Optional: you can add  additional effects based on progress
                        const progress = self.progress.toFixed(2)

                        //Change color based on progress
                        if (progress > 0.75) {
                            gsap.to(progressFillterRef.current, { backgroundColor: "#7E22CE", duration: 0.5})
                        } else if (progress > 0.5) {
                            gsap.to(progressFillterRef.current, { backgroundColor: "#A855F7", duration: 0.5})
                        } else if (progress > 0.10) {
                            gsap.to(progressFillterRef.current, { backgroundColor: "#B53389", duration: 0.5})
                        }  else {
                            gsap.to(progressFillterRef.current, { backgroundColor: "#C54BBC", duration: 0.5})
                        }
                    }
                }
            })

            return () => {
                //clean up scrollTrigger
                ScrollTrigger.getAll().forEach((trigger) => {
                    if (trigger.vars.trigger === document.body){
                        trigger.kill()
                    }
                })
            }
        }, [])

  return (
    <div ref={progressBarRef} className="fixed top-0 left-0 w-full h-[5px] bg-gray-800 z-50">
        <div
          ref={progressFillterRef}
          className="h-full w-0 bg-[#A1045a] transition-colors
          duration-300"
          style={{width: "0%" }}
        />
    </div>
  )
}

export default ProgressBar