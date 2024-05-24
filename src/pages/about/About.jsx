import React from "react";
import Graph from "./graph/Graph";
import Exp from "./exp/Exp";
import Edu from "./edu/Edu";
import Hobbies from "./hobbies/Hobbies";
import Footer from "../home/homeComponents/footer/Footer.jsx";

export default function About() {
  return (
    <>
      <Graph />
      <Exp />
      <Edu />
      <Hobbies />
      <Footer />
    </>
  );
}
