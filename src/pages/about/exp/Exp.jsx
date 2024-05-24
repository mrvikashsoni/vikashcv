import React from "react";
import styles from "./Exp.module.css";

export default function Exp() {
  return (
    <>
      <section className={styles.exp_web}>
        <div className={styles.exp_main}>
          <div className={styles.exp_container}>
            <div className={styles.exp_in1}>
              <div className={styles.in1}>
                <p>Experience</p>
              </div>
              <div className={styles.in1}>IT Sector & NON-IT Sector</div>
            </div>
            <div className={styles.exp_in2}>
              <div className={styles.in2}>
                <ul>
                  <li>
                    <h5>
                      Current Company : - TortaLabz Innovation Private Limited &
                      General Aeronautic
                    </h5>
                  </li>
                  <li>
                    Duration :- April 2022 to Till/ approx. 2.5 years of
                    experience / work from Home
                  </li>
                  <li>Project Received or Done : - 9</li>
                  <li>Role : - Front End Dev / Test Lead</li>
                </ul>
              </div>
              <div className={styles.in2}>
                <ul>
                  <li>
                    <h5>Company : - Edingle</h5>
                  </li>
                  <li>
                    Duration :- Dec 2021 to Jan 2022 / Internship / work from
                    office Bangalore
                  </li>
                  <li>Project Received or Done : - 1 / Edu Tech Domain</li>
                  <li>Role : - Software Tester</li>
                </ul>
              </div>
              <div className={styles.in2}>
                <ul>
                  <li>
                    <h5>Company : - The Entrepreneurship Network</h5>
                  </li>
                  <li>
                    Duration :- july 2021 to Dec 2022 / Internship / work from
                    Home
                  </li>
                  <li>Project Received or Done : - 3 / E-commerce domain</li>
                  <li>Role : - Software Tester</li>
                </ul>
              </div>
              <div className={styles.in2}>
                <ul>
                  <li>
                    <h5>
                      NON-IT Sector : - supervisor / contract base / own
                      business /tutor
                    </h5>
                  </li>
                  <li>Duration :- 2016 to 2021</li>
                  <li>Project Received or Done : - varies types</li>
                  <li>
                    Learn : - communication/ leadership / up & down condition/
                    marketing
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ----------------for mob */}
      <section className={styles.exp_mob}>
        <ul className="list-group container px-2 mb-3">
          <li
            className="list-group-item active text-center"
            aria-current="true"
          >
            <h4>Experience</h4>
            IT Sector & NON-IT Sector
          </li>
          <li className="list-group-item">
            <h5>
              Current Company : - TortaLabz Innovation Private Limited & General
              Aeronautic
            </h5>
            <h6>
              Duration :- April 2022 to Till/ approx. 2.5 years of experience /
              work from Home
            </h6>
            <h6>Project Received or Done : - 9</h6>
            <h6>Role : - Front End Dev / Test Lead</h6>
          </li>
          <li className="list-group-item">
            <h5>Company : - Edingle</h5>
            <h6>
              Duration :- Dec 2021 to Jan 2022 / Internship / work from office
              Bangalore
            </h6>
            <h6>Project Received or Done : - 1 / Edu Tech Domain</h6>
            <h6>Role : - Role : - Software Tester</h6>
          </li>
          <li className="list-group-item">
            <h5>Company : - The Entrepreneurship Network</h5>
            <h6>
              Duration :- july 2021 to Dec 2022 / Internship / work from Home
            </h6>
            <h6>Project Received or Done : - 3 / E-commerce domain</h6>
            <h6>Role : - Software Tester</h6>
          </li>
          <li className="list-group-item">
            <h5>
              NON-IT Sector : - supervisor / contract base / own business /tutor
            </h5>
            <h6>Duration :- 2016 to 2021</h6>
            <h6>Project Received or Done : - varies types</h6>
            <h6>
              Role : - Learn : - communication/ leadership / up & down
              condition/ marketing
            </h6>
          </li>
        </ul>
      </section>
    </>
  );
}
