import React from "react";
import styles from "./WhyHireMe.module.css";

export default function WhyHireMe() {
  return (
    <>
      {/* <!-- --------------------------------------------------------------------Why hire me web --> */}
      <section className={styles.why_web}>
        <div className={styles.why_hire}>
          <div className={styles.hire_container}>
            <div className={styles.hire_top}>
              <div className={styles.hire_top_left}>
                <div className="left-inside">
                  <p>
                    Multi Skills: - <br />
                    which differentiate with other, & Both IT & NoN IT
                    Background
                  </p>
                </div>
                <div className="left-inside">
                  Strong technical skills: - <br />I possess a solid
                  understanding of JavaScript, HTML, and CSS (Framework), which
                  are essential for building React applications,
                </div>
                <div className="left-inside">
                  Various types of Testing:-
                  <br /> Both understanding Black box & white box Testing
                </div>
              </div>
              <div className={styles.hire_top_center}>
                <img
                  src="./img/why hire me.png"
                  alt="why hire"
                  width="80%"
                  height="80%"
                />
              </div>
              <div className={styles.hire_top_right}>
                <div className="right-inside">
                  <p>
                    Team player: -<br /> I thrive in collaborative environments
                    and enjoy working closely with designers, product managers,
                    and other developers to deliver high-quality solutions on
                    time
                  </p>
                </div>
                <div className="right-inside">
                  <p>
                    Problem-solving ability: - <br />I excel at solving complex
                    problems and implementing efficient solutions using React's
                    ecosystem of tools and libraries
                  </p>
                </div>
                <div className="right-inside">
                  <p>
                    Strong communication:- <br />I have excellent communication
                    skills, enabling me to articulate complex technical concepts
                    clearly and effectively collaborate with stakeholders
                  </p>
                </div>
                <div className="right-inside">
                  <p>
                    Integration expertise: -<br />I am skilled in integrating
                    React applications with backend services, APIs, and
                    third-party libraries to create fully functional and dynamic
                    web applications
                  </p>
                </div>
              </div>
            </div>
            <div className={styles.hire_bottom}>
              <p>
                <b id={styles.b}>Portfolio of successful projects:-</b> I have a
                portfolio showcasing my past projects, demonstrating my ability
                to deliver high-quality React applications that meet client
                requirements and user needs
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------Why hire me mob */}
      <section className={styles.why_mob}>
        <ul className="list-group container px-2 mb-3">
          <li
            className="list-group-item active text-center"
            aria-current="true"
          >
            Why Hire Me ?
          </li>
          <li className="list-group-item">
            Multi Skills: - Front End Dev, Software Testing, Figma Design,
            Project coordinator ....
          </li>
          <li className="list-group-item">
            More than 2.5 Years of IT Experience & Non IT Background too ....
          </li>
          <li className="list-group-item">
            Upgrade Skills: - i am keep learner to adobe New skills
          </li>
          <li className="list-group-item">
            Effective Collaboration: - with dev team, stockholder, product
            coordinator, client ....
          </li>
        </ul>
      </section>
    </>
  );
}
