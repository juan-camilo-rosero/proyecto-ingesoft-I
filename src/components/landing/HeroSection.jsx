"use client";

import { useContext } from "react";
import { SectionContext } from "@/context/SectionContext";
import Button from "../general/Button";
import InfiniteScroller from "./InfiniteScroller";

function HeroSection() {
  const { setSignUpOpen, setLoginOpen } = useContext(SectionContext);
  return (
    <section className="w-screen min-h-screen pt-20 px-8 flex flex-col items-center justify-center md:w-2/3 md:mx-auto lg:pt-32">
      <h1 className="text-center text-3xl font-bold text-black  lg:text-5xl">
        Aprende dialectos de forma{" "}
        <span className="text-tblue-700">rápida y divertida</span>
      </h1>
      <h2 className="text-fgray-600 text-center mt-10 font-semibold md:text-xl">
        El mejor contenido para que puedas aprender sin aburrirte ni frustrate
      </h2>
      <div className="w-full mt-8 flex flex-col items-center gap-6 md:mt-20 lg:flex-row lg:gap-12 lg:justify-center lg:mt-12">
        <Button
          text="Iniciar sesión"
          type="secondary"
          size="xl"
          func={(e) => setLoginOpen(true)}
          aditionalStyles="w-full lg:w-auto lg:text-xl lg:px-16"
        />
        <Button
          text="Empezar ahora"
          type="primary"
          size="xl"
          func={(e) => setSignUpOpen(true)}
          aditionalStyles="w-full lg:w-auto lg:text-xl lg:px-16"
        />
      </div>
      <div className="w-screen mt-20 flex flex-col items-center gap-6">
        <InfiniteScroller
          words={["qué chévere", "pura vida", "no manches", "qué bacán", "dale pues", "qué paja", "ándale güey", "está chido", "oye parcero", "harto weón", "qué chimba"]
          }
        />
        <InfiniteScroller
          words={["parcero", "cuateando", "chismosear", "despapaye", "carajearse", "alburero", "tiradera", "pachangón", "botijona", "chavorruco", "guapachoso"]
          }
          direction="right"
        />
      </div>
    </section>
  );
}

export default HeroSection;
