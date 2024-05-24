import React from "react";
import styles from "./Ga.module.css";

export default function Ga() {
  return (
    <>
      <section>
        <div className={styles.ga_project}>
          <div className={styles.ga_container}>
            <div className={styles.ga_in1}>
              <img src="./img/gabg.png" alt="ga" width="80%" height="80%" />
              <div className={styles.ga_inside}>April 2023 To Present</div>
              <div className={styles.ga_inside}>
                Drone Technology Marking & spray land
              </div>
              <div className={styles.ga_inside}>
                <a href="https://generalaeronautics.com/" target="_blank">
                  https://generalaeronautics.com/
                </a>
              </div>
            </div>
            <div className={styles.ga_in2}>
              <ul>
                <li>
                  GA provides a total crop protection solution that’s built on
                  the best of Drone technology, Artificial Intelligence, and
                  crop science.
                </li>
                <li>
                  The main purpose is to mark the field then a.c to marked spray
                  with various method. it depended on field area/ season/ crops/
                  pesticide/ organic pests etc
                </li>
                <li>
                  code is deploy first in dev then stage finally production
                  environment so several times testing involve to improve
                  quality & give satisfaction results
                </li>
                <li>
                  this is on-live project to checkout visit the website for more
                  details about project
                </li>
                <li>
                  this one project have several sub-project which manage by
                  several technical team
                </li>
                <li>
                  Every sprint has to updated to enhance & added new feature so
                  end user used one platform to fulfil their requirement
                </li>
                <li>
                  Testing environment: - web base/ android based/ ios based/
                  multi cross browser & many more
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
