import React, { useRef } from "react";
import { Routes, Route } from "react-router-dom";
import HeroHomePage from "../Components/HeroHomepage/HeroHomePage";
import AboutRevords from "../Components/AboutRevords/AboutRevords";
import CompanyIntro from "../Components/CompanyIntro/CompanyIntro";
import WhyRevords from "../Components/WhyRevords/WhyRevords";
import RevordsParts from "../Components/RevordsDevidedPart/RevordsPart";
import OverlayImageContainer from "./CommonComponents/RevordsNavigation/OverlayImageContainer";
import Clients from "./Clients/Clients";
import HowItWorks from "./HowItWorks/HowItWorks";
import ContactUs from "./ContactUs/ContactUs";

const HomePageRoutes = () => {
    // const aboutUsRef = useRef(null);

    // const scrollToAboutUs = () => {
    //     if (aboutUsRef.current) {
    //         const screenWidth = window.innerWidth;

    //         let offset;
    //         if (screenWidth <= 768) {
    //             offset = -1000; // Mobile devices
    //         } else if (screenWidth <= 1024) {
    //             offset = -900; // Tablets
    //         } else {
    //             offset = -250; // PC
    //         }

    //         const targetPosition =
    //             aboutUsRef.current.getBoundingClientRect().top + window.scrollY - offset;

    //         window.scrollTo({
    //             top: targetPosition,
    //             behavior: "smooth",
    //         });
    //     }
    // };

    return (
        <>
            <HeroHomePage
            // scrollToAboutUs={scrollToAboutUs} 
            />
            <WhyRevords />
            {/* <div ref={aboutUsRef}> */}
           
            <AboutRevords />
            <HowItWorks/>
            {/* </div> */}
            <CompanyIntro />
    
            <RevordsParts />

            <Clients />
            <OverlayImageContainer />
            <ContactUs/>
        </>
    );
};

export default HomePageRoutes;
