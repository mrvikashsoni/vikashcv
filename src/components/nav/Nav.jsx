import React from "react";
import styles from "./Nav.module.css";
import { NavLink } from "react-router-dom";

export default function Navs() {
  return (
    <nav className="navbar navbar-expand-lg ">
      <div className={`container ${styles.header}`}>
        <div className={styles.logo}>
          <div className={styles.logo_img}>
            <img
              src="./img/Screenshot 2023-09-27 151323.png"
              alt="img logo"
              width="36px"
              height="36px"
            />
          </div>
          <div className={styles.name}>
            <NavLink className={styles.nav_link} to="/">
              <small>Front End Developer</small>
            </NavLink>
          </div>
        </div>
        <button
          className={`navbar-toggler ${styles.navtog} `}
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="fa-solid fa-bars-staggered "></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className={`navbar-nav ms-auto mb-2 mb-lg-0 ${styles.navs}`}>
            <li>
              <NavLink className={styles.nav_link} to="/home">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink className={styles.nav_link} to="/project">
                Project
              </NavLink>
            </li>
            <li>
              <NavLink className={styles.nav_link} to="/about">
                About
              </NavLink>
            </li>
            <li>
              <NavLink className={styles.nav_link} to="/blogs">
                Blogs
              </NavLink>
            </li>
            <li className="nav-item mt-1 ms-3">
              <a
                href="https://www.linkedin.com/in/mrvikashkr/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="./img/linkdin.svg"
                  alt="ln icon"
                  width="25rem"
                  height="25rem"
                />
              </a>
              <a
                href="https://www.facebook.com/mrvikashkrsoni"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="./img/fb.svg"
                  alt="fb icon"
                  width="25rem"
                  height="25rem"
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
