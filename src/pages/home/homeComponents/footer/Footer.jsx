import React from "react";
import styles from "./Footer.module.css";
import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <>
      {/* <!-- ---------------------------------------------------------------Footer --> */}
      <footer>
        <div className="footer">
          <div className={styles.foot_container1}>
            <div className={styles.foot1}>
              <ul>
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
              </ul>
            </div>
            <div className={styles.foot1}>
              <ul>
                <li>
                  <NavLink className={styles.nav_link} to="/blogs">
                    React Js
                  </NavLink>
                </li>
                <li>
                  <NavLink className={styles.nav_link} to="//blogs">
                    Testing
                  </NavLink>
                </li>
                <li>
                  <NavLink className={styles.nav_link} to="/blogs">
                    Figma
                  </NavLink>
                </li>
                <li>
                  <NavLink className={styles.nav_link} to="/blogs">
                    Jira
                  </NavLink>
                </li>
              </ul>
            </div>
            <div className={styles.foot1}>
              <ul>
                <li>
                  <NavLink
                    className={styles.nav_link}
                    to="https://www.linkedin.com/in/mrvikashkr/"
                    target="_blank"
                  >
                    LINKDIN
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className={styles.nav_link}
                    to="https://www.facebook.com/mrvikashkrsoni"
                    target="_blank"
                  >
                    FACEBOOK
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className={styles.nav_link}
                    to="https://github.com/mrvikashsoni"
                    target="_blank"
                  >
                    GITHUB
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className={styles.nav_link}
                    to="/blogs"
                    target="_blank"
                  >
                    WEBSITE
                  </NavLink>
                </li>
              </ul>
            </div>
            <div className={styles.foot1}>
              <p>7764827252 / 7717728653</p>

              <p>vikashjobprofile@gmail.com</p>

              <p>vikash@tortalabz.com</p>
            </div>
          </div>
          <div className={styles.foot_container2}>
            <hr />
          </div>
          <div className={styles.foot_container3}>
            <div className={styles.foot_3}>
              <img
                src="./img/copyright.svg"
                alt="copyright"
                width="60%"
                height="60%"
              />
            </div>
            <div className={styles.foot_3}>
              <div className={styles.foot_3p1}>vikash kumar</div>
              <div className="foot_3p">all rights reserved</div>
            </div>
          </div>
        </div>
      </footer>
      {/* <!-- =====================================================================================Home Page End --> */}
    </>
  );
}
