import { useEffect, useRef, useState } from "react";
import Header from "./components/Header";
import Intro from "./components/Intro";
import IntroText from "./components/IntroText";
import PersonalProjects from "./components/PersonalProjects";
import ModalProjects from "./components/ModalProjects";
import Experience from "./components/Experience";
import DownloadCV from "./components/DownloadCV";

function App() {
  const [scrollPosition, setScrollPosition] = useState(0);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const currentPosition = window.scrollY;
  //     setScrollPosition(currentPosition);
  //   };

  //   window.addEventListener("scroll", handleScroll);

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []); Esto lo podemos utilizar para saber en donde esta nustro scroll en la pagina
  const elementRef = useRef(null);
  const elementRef2 = useRef(null);
  const elementRef3 = useRef(null);
  const elementRef4 = useRef(null);
  const elementRef5 = useRef(null);
  const elementRef6 = useRef(null);
  const elementRef7 = useRef(null);

  const [ref1, setRef1] = useState(0);
  const [ref2, setRef2] = useState(0);
  const [ref3, setRef3] = useState(0);
  const [ref4, setRef4] = useState(0);
  const [ref5, setRef5] = useState(0);
  const [ref6, setRef6] = useState(0);
  const [ref7, setRef7] = useState(0);

  /** Este lo utilizamos para poder saber en que posicion se encuentra nuestro ref en este caso podemos hacer un ref para cada uno que utilizaremos */
  useEffect(() => {
    const handleScrollOrResize = () => {
      if (elementRef.current) {
        const rect1 = elementRef.current.getBoundingClientRect();
        const rect2 = elementRef2.current.getBoundingClientRect();
        const rect3 = elementRef3.current.getBoundingClientRect();
        const rect4 = elementRef4.current.getBoundingClientRect();
        const rect5 = elementRef5.current.getBoundingClientRect();
        const rect6 = elementRef6.current.getBoundingClientRect();
        const rect7 = elementRef7.current.getBoundingClientRect();

        setRef1(rect1.top);
        setRef2(rect2.top);
        setRef3(rect3.top);
        setRef4(rect4.top);
        setRef5(rect5.top);
        setRef6(rect6.top);
        setRef7(rect7.top);
      }
    };

    // Llamarlo una vez para inicializar los valores
    handleScrollOrResize();

    // Agregar listeners para scroll y resize
    window.addEventListener("scroll", handleScrollOrResize);
    window.addEventListener("resize", handleScrollOrResize);

    // Limpieza de los listeners
    return () => {
      window.removeEventListener("scroll", handleScrollOrResize);
      window.removeEventListener("resize", handleScrollOrResize);
    };
  }, []);

  return (
    <div>
      <div className=" z-40">
        <Header />
      </div>
      <div className="w-full">
        <div
          className={`transition-all  duration-1000 mx-5  ${
            ref1 < 50 ? "lg:mx-[5%]" : "lg:mx-[25%] "
          } md:mx-[10%] mt-28`}
        >
          <Intro
            elementRef={elementRef}
            elementRef2={elementRef2}
            ref1={ref1}
            ref2={ref2}
          />
        </div>
      </div>
      <div>
        <IntroText elementRef3={elementRef3} ref3={ref3} />
      </div>
      <div id="projects">
        <PersonalProjects
          elementRef4={elementRef4}
          elementRef5={elementRef5}
          ref4={ref4}
          ref5={ref5}
        />
      </div>
      <div>
        <ModalProjects />
      </div>
      <div></div>
      <div
        ref={elementRef6}
        className={` transition-all duration-1000 ${
          ref6 < 350 ? " opacity-100" : " opacity-0"
        }`}
        id="experience"
      >
        {" "}
        <Experience />
      </div>
      <div id="contact">
        <DownloadCV elementRef7={elementRef7} ref7={ref7} />
      </div>
    </div>
  );
}

export default App;
