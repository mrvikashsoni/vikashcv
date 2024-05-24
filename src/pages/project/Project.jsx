import React from "react";
import Responsibility from "./projectComponent/responsibility/Responsibility";
import Ga from "./projectComponent/ga/Ga";
import Elel from "./projectComponent/elel/Elel";
import Supplysutra from "./projectComponent/supplysutra/Supplysutra";
import Footer from "../home/homeComponents/footer/Footer";
import OtherProject from "./projectComponent/otherProject/OtherProject";

export default function Project() {
  return (
    <>
      <Responsibility />
      <Ga />
      <Elel />
      <Supplysutra />
      <OtherProject />
      <Footer />
    </>
  );
}
