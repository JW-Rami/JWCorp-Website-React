import React from "react";
import "./Animations-Component.css";
import { delay, motion, useScroll } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
// import { ScrollSmoother } from "gsap/ScrollSmoother";
import { useEffect, useRef } from "react";

function AnimationsComponent() {
  const { scrollYProgress } = useScroll();

  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);


  const slideInTop = (element) => {
    gsap.fromTo(
      element,
      {
        opacity: 0,
        y: -200,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        scrollTrigger: {
          trigger: element,
          start: "20px 80%",
          end: "bottom center",
          toggleActions: "restart none none none",
        },
      }
    );
  };



  useEffect(() => {
    slideInTop("#cta-form-text");
  }, []);
  useEffect(() => {
    slideInTop("#form");
  }, []);

  const slideInLeft = (element) => {
    gsap.fromTo(
      element,
      {
        opacity: 0,
        x: -200,
      },
      {
        opacity: 1,
        x: 0,
        duration: 0.6,
        scrollTrigger: {
          trigger: element,
          start: "20px 80%",
          end: "bottom center",
          toggleActions: "restart none none none",
        },
      }
    );
  };
  useEffect(() => {
    slideInLeft("#cta-contact-us");
  }, []);

  // Animations "Nos Services" in NotreMission --> Blocs de textes
  const slideInLeftServiceTitle = (element) => {
    gsap.fromTo(
      element,
      {
        opacity: 0,
        x: -200,
      },
      {
        opacity: 1,
        x: 0,
        duration: 0.6,
        scrollTrigger: {
          trigger: element,
          start: "20px 60%",
          end: "bottom center",
          // toggleActions: "restart none none none",
        },
      }
    );
  };
  useEffect(() => {
    slideInLeftServiceTitle("#notre-mission-title");
  }, []);

  // const slideInLeftServiceConseil = (element) => {
  //   gsap.fromTo(
  //     element,
  //     {
  //       opacity: 0,
  //       x: -200,
  //     },
  //     {
  //       opacity: 1,
  //       x: 0,
  //       delay: 0.6,
  //       duration: 0.6,
  //       scrollTrigger: {
  //         trigger: element,
  //         start: "20px 60%",
  //         end: "bottom center",
  //         // toggleActions: "restart none none none",
  //       },
  //     }
  //   );
  // };
  // useEffect(() => {
  //   slideInLeftServiceConseil("#conseil-paragraph");
  // }, []);

  const slideInLeftServiceDev = (element) => {
    gsap.fromTo(
      element,
      {
        opacity: 0,
        x: -200,
      },
      {
        opacity: 1,
        x: 0,
        delay: 1,
        duration: 0.6,
        scrollTrigger: {
          trigger: element,
          start: "20px 60%",
          end: "bottom center",
          // toggleActions: "restart none none none",
        },
      }
    );
  };
  useEffect(() => {
    slideInLeftServiceDev("#notre-mission-animation");
  }, []);

  // const slideInLeftServiceAudit = (element) => {
  //   gsap.fromTo(
  //     element,
  //     {
  //       opacity: 0,
  //       x: -200,
  //     },
  //     {
  //       opacity: 1,
  //       x: 0,
  //       delay: 1.9,
  //       duration: 0.6,
  //       scrollTrigger: {
  //         trigger: element,
  //         start: "20px 80%",
  //         end: "bottom center",
  //         // toggleActions: "restart none none none",
  //       },
  //     }
  //   );
  // };
  // useEffect(() => {
  //   slideInLeftServiceAudit("#audit");
  // }, []);

  // const slideInLeftServiceRecherche = (element) => {
  //   gsap.fromTo(
  //     element,
  //     {
  //       opacity: 0,
  //       x: -200,
  //     },
  //     {
  //       opacity: 1,
  //       x: 0,
  //       delay: 2.5,
  //       duration: 0.6,
  //       scrollTrigger: {
  //         trigger: element,
  //         start: "20px 80%",
  //         end: "bottom center",
  //         // toggleActions: "restart none none none",
  //       },
  //     }
  //   );
  // };
  // useEffect(() => {
  //   slideInLeftServiceRecherche("#recherche-developpement");
  // }, []);
  // Animation "lineAnimation" in Formulaire --> Lines
  const lineTriggerTop = (element) => {
    gsap.fromTo(
      element,
      {
        x: -350,
      },
      {
        x: 0,
        duration: 0.6,
        scrollTrigger: {
          trigger: element,
          start: "10px 90%",
          end: "bottom center",
          toggleActions: "restart none none none",
        },
      }
    );
  };
  useEffect(() => {
    lineTriggerTop(".line-animation-top");
  }, []);

  const lineTriggerBottom = (element) => {
    gsap.fromTo(
      element,
      {
        x: "100%",
      },
      {
        x: "0%",
        duration: 0.6,
        scrollTrigger: {
          trigger: element,
          start: "20px 90%",
          end: "bottom center",
          toggleActions: "restart none none none",
        },
      }
    );
  };
  useEffect(() => {
    lineTriggerBottom(".line-animation-bottom");
  }, []);

  return (
    <>
      <>
        <motion.div
          className="progress-bar"
          style={{
            scaleX: scrollYProgress,
          }}
        />
      </>
    </>
  );
}
export default AnimationsComponent;