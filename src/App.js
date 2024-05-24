import React from "react";
import Navs from "./components/nav/Nav";
import Home from "./pages/home/Home";
import Project from "./pages/project/Project";
import About from "./pages/about/About";
import Blogs from "./pages/blogs/Blogs";
import { Route, Routes } from "react-router-dom";
import SweetAlert from "./components/sweetAlert/SweetAlert";

function App() {
  return (
    <>
      <SweetAlert />
      <Navs />

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/project" element={<Project />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/blogs" element={<Blogs />} />
      </Routes>
    </>
  );
}

export default App;
