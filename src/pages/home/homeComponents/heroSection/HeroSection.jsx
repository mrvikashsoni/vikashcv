import React from "react";
import styles from "./HeroSection.module.css";

export default function HeroSection() {
  return (
    <>
      {/* <!-- -----------------------------------------------------------------------------------Hero Section --> */}
      <section className={styles.hero_section_web}>
        <div className={styles.hero_section}>
          <div className={`container ${styles.con}`}>
            <div className={styles.section_main_left}>
              <div className="left-top">
                <div className="text-top">
                  <div className={styles.text_im}>
                    <p>
                      <b>I’m</b>
                    </p>
                  </div>
                  <p>Vikash Kumar</p>
                </div>
                <div className={styles.arrow_bottom}>
                  <hr />
                </div>
              </div>
              <div className={styles.left_center}>
                <a
                  href="https://drive.google.com/file/d/1HVRkUEmjpny8PmXIwlAApjZlYMkKTjK6/view?usp=sharing"
                  target="_blank"
                  rel="noreferrer"
                >
                  Download CV
                </a>
              </div>
              <div className={styles.left_bottom}>
                <p>
                  After an existing journey in software testing and UI design,
                  transitioning to a front-end developer role has been quick and
                  impressive, especially in learning React.js. Of course,
                  initially, it was difficult, but once I cracked the
                  fundamentals, I now enjoy it and am aiming to contribute
                  innovative and user-centric designs to the digital landscape
                </p>
              </div>
            </div>
            <div className={styles.section_main_center}>
              <img src="./img/Group 1.png" alt="center img" />
            </div>
            <div className={styles.section_main_right}>
              <div className={styles.right}>
                <p>
                  As a Figma designer, our goal is to create delightful and
                  seamless user experiences that align with the product vision
                  and objectives. Collaboration, creativity, attention to
                  detail, and a user-centric mindset are key traits for success
                  in this role.
                </p>
              </div>
              <div className={styles.right}>
                <p>
                  I'm well-versed in Jira, adept at optimizing project
                  management
                  <br />
                  and collaboration. Skilled in task management, issue tracking,
                  and workflow customization for streamlined team productivity
                  and project success
                </p>
              </div>
              <div className={styles.rig_bom}>
                {/* <p>
                  I am an aspiring front-end developer on a learning journey.
                  Enthusiastically acquiring skills in HTML, CSS, and JavaScript
                  <br />
                  to create captivating and responsive web interfaces, aiming to
                  contribute innovative and user-centric designs to the digital
                  landscape
                </p> */}
                <p>
                  A professional software Tester, <br />
                  Excellent to make documentation, identifying bugs, <br />
                  enhancing user experience, and ensuring high-quality software
                </p>
              </div>
            </div>
          </div>
          <div className={styles.z_index}>
            <div className={styles.z_box}>
              <div className="z-box4">
                <img
                  src="./img/html.svg"
                  alt="coding"
                  width="25px"
                  height="25px"
                />
              </div>
              <div className="z-box4">Front-End-Dev</div>
            </div>
            <div className={styles.z_box}>
              <div className="z-box1">
                <img
                  src="./img/testing.svg"
                  alt="testing"
                  width="22px"
                  height="22px"
                />
              </div>
              <div className="z-box1">software testing</div>
            </div>
            <div className={styles.z_box}>
              <div className="z-box2">
                <img
                  src="./img/figma.svg"
                  alt="figma"
                  width="22px"
                  height="26px"
                />
              </div>
              <div className="z-box2">Figma</div>
            </div>
            <div className={styles.z_box}>
              <div className="z-box3">
                <img
                  src="./img/jira.svg"
                  alt="jira"
                  width="22px"
                  height="22px"
                />
              </div>
              <div className="z-box3">Jira</div>
            </div>
          </div>
        </div>
      </section>

      {/* --------------------------------------------------------Hero section For Mob */}
      <section className={styles.hero_section_mob}>
        <div className="container text-start my-5">
          <div className="row align-items-start justify-content-between">
            <div className="col-4">
              <div className="text-top">
                <div className={styles.text_im}>
                  <p>
                    <b>I’m</b>
                  </p>
                </div>
                <p>Vikash Kumar</p>
              </div>
              <div className={styles.arrow_bottom}>
                <hr />
              </div>
              <br />
              <div className={styles.left_center}>
                <a
                  href="https://drive.google.com/file/d/1HVRkUEmjpny8PmXIwlAApjZlYMkKTjK6/view?usp=sharing"
                  target="_blank"
                  rel="noreferrer"
                >
                  Download CV
                </a>
              </div>
            </div>
            <div className="col-8 align-items-center">
              <p>
                After an existing journey in software testing and UI design,
                transitioning to a front-end developer role has been quick and
                impressive, especially in learning React.js. Of course,
                initially, it was difficult, but once I cracked the
                fundamentals, I now enjoy it and am aiming to contribute
                innovative and user-centric designs to the digital landscape
              </p>
            </div>
          </div>
        </div>
        <div className="accordion container mb-3" id="accordionExample">
          <div className="accordion-item bg-dark">
            <h2 className="accordion-header">
              <button
                className={`accordion-button bg-dark text-white`}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                UI / UX Designer
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body ">
                As a Figma designer, our goal is to create delightful and
                seamless user experiences that align with the product vision and
                objectives. Collaboration, creativity, attention to detail, and
                a user-centric mindset are key traits for success in this role.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                Software Testing
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body bg-dark">
                A professional software Tester, Excellent to make documentation,
                identifying bugs, enhancing user experience, and ensuring
                high-quality software
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                Project Manager
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body bg-dark">
                I'm well-versed in Jira, adept at optimizing project management
                and collaboration. Skilled in task management, issue tracking,
                and workflow customization for streamlined team productivity and
                project success
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
