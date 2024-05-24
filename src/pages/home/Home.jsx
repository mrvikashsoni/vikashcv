import React from "react";

import HeroSection from "./homeComponents/heroSection/HeroSection";
import WhyHireMe from "./homeComponents/whyHireMe/WhyHireMe";
import OneOfProject from "./homeComponents/oneOfProject/OneOfProject";
import CurrentCompany from "./homeComponents/currentCompany/CurrentCompany";
import Footer from "./homeComponents/footer/Footer";

export default function Home() {
  return (
    <>
      <HeroSection />
      <WhyHireMe />
      <OneOfProject />
      <CurrentCompany />
      <Footer />
    </>
  );
}
