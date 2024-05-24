import React from "react";
import styles from "./Responsibility.module.css";

export default function Responsibility() {
  return (
    <>
      <section className={styles.res_web}>
        <div className={styles.hero_section}>
          <div className={`container ${styles.cont}`}>
            <div className={styles.section_main_left}>
              <div className={styles.rig_bom}>
                <p>
                  <h5>As a Front End Developer : -</h5> <br />
                  Writing clean code/ maintainable/ scalable code/performance
                  optimizations/ Utilizing version control / Providing technical
                  guidance/ React/ redux for state Management/ Translating UI/UX
                  designs into code/ Conducting usability tests ....
                </p>
              </div>
              <div>
                <p>
                  <h5>Collaboration:-</h5> <br />
                  Daily scrum meeting/ Dev/QA session/ client meet/ <br />
                  stakeholder/ BA/ feedback other related project consult
                </p>
              </div>

              <div className={styles.left_bottom}>
                <p>
                  <h5>Dev / Test Environment: -</h5> <br />
                  Device=window/android/Table Browser=chrome/Firefox/mob browser
                  application= web base/android apk internet=
                  WIFI/5g/4g/3g/offline test Tools=Jira/ Trello/ Figma/ ms
                  office/ postman & many more
                </p>
              </div>
            </div>
            <div className={styles.section_main_center}>
              <img src="./img/responsibility.png" alt="center img" />
            </div>
            <div className={styles.section_main_right}>
              <div className="right">
                <p>
                  <h5>Jira: -</h5> Agile & Scrum methodology/ <br />
                  Test scenario/cases/set/Report/ Test management/sprint/track &
                  many more
                </p>
              </div>
              <div className="right">
                <p>
                  <h5>Continuous Learning and Improvement:-</h5> Staying updated
                  on the latest trends and technologies/ Experimenting with new
                  tools and frameworks /Actively participating in developer
                  communities, sharing knowledge, and contributing to
                  open-source projects when possible
                </p>
              </div>
              <div className={` right ${styles.rig_bom}`}>
                <p>
                  <h5>As a Tester: -</h5> it is lot of responsibility before in
                  production phase...
                  <br /> Do a repeat same test again & again
                  (dev/stage/production) <br />
                  so bugs not getting by end users... it was a time where i can
                  handle multiple projects also delivered at a time but good
                  part when you received appreciation 😊
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ------------------for mob */}
      <section className={styles.res_mob}>
        <ul className="list-group container px-2 my-3">
          <li
            className="list-group-item active text-center"
            aria-current="true"
          >
            Responsibility
          </li>
          <li className="list-group-item">
            <h5>As a Front End Developer : -</h5>
            Writing clean code/ maintainable/ scalable code/performance
            optimizations/ Utilizing version control / Providing technical
            guidance/ React/ redux for state Management/ Translating UI/UX
            designs into code/ Conducting usability tests ....
          </li>
          <li className="list-group-item">
            <h5>Collaboration:-</h5>
            Daily scrum meeting/ Dev/QA session/ client meet/ stakeholder/ BA/
            feedback other related project consult....
          </li>
          <li className="list-group-item">
            <h5>Dev / Test Environment: -</h5>
            Device=window/android/Table Browser=chrome/Firefox/mob browser
            application= web base/android apk internet= WIFI/5g/4g/3g/offline
            test Tools=Jira/ Trello/ Figma/ ms office/ postman & many more
          </li>
          <li className="list-group-item">
            <h5>Jira: -</h5> Agile & Scrum methodology/ Test
            scenario/cases/set/Report/ Test management/sprint/track & many more
          </li>
          <li className="list-group-item">
            <h5>Continuous Learning and Improvement:-</h5> Staying updated on
            the latest trends and technologies/ Experimenting with new tools and
            frameworks /Actively participating in developer communities, sharing
            knowledge, and contributing to open-source projects when possible
          </li>
          <li className="list-group-item">
            <h5>As a Tester: -</h5> it is lot of responsibility before in
            production phase...
            <br /> Do a repeat same test again & again (dev/stage/production){" "}
            <br />
            so bugs not getting by end users... it was a time where i can handle
            multiple projects also delivered at a time but good part when you
            received appreciation 😊
          </li>
        </ul>
      </section>
    </>
  );
}
