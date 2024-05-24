import React from "react";
import styles from "./Elel.module.css";

export default function Elel() {
  return (
    <>
      <section>
        <div className={styles.elel_project}>
          <div className={styles.elel_container}>
            <div className={styles.elel_in2}>
              <ul>
                <li>
                  Welcome to our ticket selling platform! We're excited to be
                  part of Africa's digitalization journey, and we're committed
                  to making event planning and attendance easier than ever
                  before. Our team of passionate individuals understands the
                  unique challenges that come with organizing events in Africa.
                  That's why we've created an accessible and affordable platform
                  that connects event organizers and attendees seamlessly.
                </li>
                <li>
                  this project have 3 web portal & 1 mobile apps which can
                  manage by admin/ manager for end user
                </li>
                <li>
                  access from world wide so multiple country & their states with
                  multiple currency support system
                </li>
                <li>
                  End user can buy a event ticket/ create account/ see past post
                  & many more...
                </li>
              </ul>
            </div>
            <div className={styles.elel_in1}>
              <img src="./img/elel.png" alt="ga" width="80%" height="80%" />
              <div className={`${styles.elel_inside}, ${styles.date}`}>
                Jan 2023 To Present
              </div>
              <div className={styles.elel_inside}>
                Event Organization platform
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
