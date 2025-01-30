// import React, { useEffect, useRef, useState } from "react";
import { useRef } from "react";
import NavigationBar from "../components/NavigationBar";
import Landing from "../components/Landing";
import "../App.css";

const Homepage = () => {
  // Refs for each section
  const introRef = useRef<HTMLDivElement>(null);
  const productRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const reviewRef = useRef<HTMLDivElement>(null);
  return (
    <>
      <div className=" transition ease-in-out duration-500 delay-10 overflow-hidden sborder-4">
        <div
          className="z-50 w-[100%] sborder-4 border-black rounded-lg"
          data-aoss="fade-down"
          data-aos-duration="3400"
        >
          <NavigationBar
            introRef={introRef}
            productRef={productRef}
            servicesRef={servicesRef}
            aboutRef={aboutRef}
            reviewRef={reviewRef}
          />
          {/* ss */}
        </div>
        <div ref={introRef} className="">
          <Landing />
        </div>
      </div>
    </>
  );
};

export default Homepage;
