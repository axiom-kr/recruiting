import SmoothScroll from "./utils/SmoothScroll";
import PageProvider from "./context/PageProvider";
import Nav from "./components/Nav";
import { css } from "../styled-system/css";
import Home from "./pages/Home";
import About from "./pages/About";
import FullPageCanvas from "./components/FullPageCanvas";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap";
import Program from "./pages/Program";
import Recruit from "./pages/Recruit";

gsap.registerPlugin(ScrollTrigger);

function App() {
  const pageRefs = [
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
  ];
  const navRefs = [
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
  ];

  useEffect(() => {
    for (let i = 3; i > 0; i++) {
      gsap.fromTo(
        navRefs[i - 1].current,
        { color: "white" },
        {
          color: "#656565",
          duration: 0.3,
          scrollTrigger: {
            trigger: pageRefs[i].current,
            start: "-30px top",
            toggleActions: "play none none none",
          },
        }
      );

      gsap.fromTo(
        navRefs[i].current,
        { color: "#656565" },
        {
          color: "white",
          duration: 0.3,
          scrollTrigger: {
            trigger: pageRefs[i].current,
            start: "-30px top",
            markers: {
              startColor: "purple",
              endColor: "fuchsia",
              fontSize: "3rem",
            },
            toggleActions: "play none none none",
          },
        }
      );
    }
  }, []);
  return (
    <>
      <SmoothScroll>
        <PageProvider>
          <div
            className={css({
              backgroundColor: "black",
              width: "100%",
            })}
          >
            <Nav
              firstRef={navRefs[0]}
              secondRef={navRefs[1]}
              thirdRef={navRefs[2]}
              fourthRef={navRefs[3]}
            />
            <Home ref={pageRefs[0]} />
            <About ref={pageRefs[1]} />
            <Program ref={pageRefs[2]} />
            <Recruit ref={pageRefs[3]} />
          </div>
        </PageProvider>
      </SmoothScroll>
      <FullPageCanvas />
    </>
  );
}

export default App;
