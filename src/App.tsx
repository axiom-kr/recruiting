import SmoothScroll from "./utils/SmoothScroll";
import PageProvider from "./context/PageProvider";
import Nav from "./components/Nav";
import { css } from "../styled-system/css";
import Home from "./pages/Home";
import About from "./pages/About";
import FullPageCanvas from "./components/FullPageCanvas";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { gsap } from "gsap";
import Program from "./pages/Program";
import Recruit from "./pages/Recruit";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

function App() {
  const pageRefs = [
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
  ];
  const navRefs = [
    useRef<HTMLSpanElement>(null),
    useRef<HTMLSpanElement>(null),
    useRef<HTMLSpanElement>(null),
    useRef<HTMLSpanElement>(null),
  ];

  const setActive = (element: HTMLSpanElement | null) => {
    navRefs.forEach((nav) => {
      nav.current?.classList.remove("active");
    });
    element?.classList.add("active");
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      navRefs.forEach((nav) => {
        const element = nav.current?.children[0]?.getAttribute("href");
        console.log(element);
        const ST = ScrollTrigger.create({
          trigger: element,
          start: "top top",
        });
        ScrollTrigger.create({
          trigger: element,
          start: "top center",
          end: "bottom center",
          onToggle: (self) => self.isActive && setActive(nav.current),
        });
        nav.current?.addEventListener("click", (e) => {
          e.preventDefault();
          gsap.to(window, {
            duration: 1,
            scrollTo: ST.start,
            overwrite: "auto",
          });
        });
      });
    });
    return () => ctx.revert();
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
