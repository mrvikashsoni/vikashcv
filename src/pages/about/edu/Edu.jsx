import React from "react";
import styles from "./Edu.module.css";

export default function Edu() {
  return (
    <>
      <section className={styles.edu_web}>
        <div className={styles.project_container}>
          <div className={styles.container_inside_top}>
            Education Background
          </div>
          <div className={styles.container_inside_bot}>
            <div className={styles.project_bottom}>
              <div className={`${styles.pb3}, ${styles.pbb}`}>Graduation</div>
              <div className={styles.pb}>
                <ul>
                  <li>Dr MGR University Chennai</li>
                  <li>session : - 2010 -2014</li>
                  <li>course : - Mechanical Engineer</li>
                  <li>percentage : - 76%</li>
                  <li>
                    Achievement Topper in class on <br />
                    campus placement several event participate <br />
                    several seminar conduct & many more
                  </li>
                </ul>
              </div>
            </div>
            <div className={styles.project_bottom}>
              <div className={`${styles.pb3}, ${styles.pbb}`}>12th Board</div>
              <div className={styles.pb}>
                <ul>
                  <li>A N College Patna</li>
                  <li>session : - 2007 -2009</li>
                  <li>course : - Science (Math)</li>
                  <li>percentage : - 65%</li>
                  <li>Achievement Pass KIT University Exam & Other</li>
                </ul>
              </div>
            </div>
            <div className={styles.project_bottom}>
              <div className={`${styles.pb3}, ${styles.pbb}`}>10th Board</div>
              <div className={styles.pb}>
                <ul>
                  <li>R B R High School RFJ</li>
                  <li>session : - 2007</li>
                  <li>course : - All Subject</li>
                  <li>percentage : - 66%</li>
                  <li>Achievement Pass local exam</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==============for mob */}
      <section className={styles.edu_mob}>
        <div className="container my-3">
          <h3 className="text-center text-white bg-primary rounded-top py-2">
            Eduction
          </h3>
          <div className="row  row-cols-1 row-cols-md-3 align-items-start g-3">
            <div className="col justify-content-center d-flex">
              <div
                className="card bg-dark text-white"
                // style={{ width: "18rem" }}
              >
                <div className="card-body ">
                  <h5 className="card-title">Graduation</h5>

                  <ul className="list-group">
                    <li className="list-group-item">
                      Dr MGR University Chennai
                    </li>
                    <li className="list-group-item">session : - 2010 -2014</li>
                    <li className="list-group-item">
                      course : - Mechanical Engineer
                    </li>
                    <li className="list-group-item">percentage : - 76%</li>
                    <li className="list-group-item">
                      Achievement Topper in class on campus placement several
                      event participate several seminar conduct & many more
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col justify-content-center d-flex">
              <div
                className="card bg-dark text-white container"
                // style={{ width: "18rem" }}
              >
                <div className="card-body ">
                  <h5 className="card-title">12th Board</h5>

                  <ul className="list-group">
                    <li className="list-group-item">A N College Patna</li>
                    <li className="list-group-item">session : - 2007 -2009</li>
                    <li className="list-group-item">
                      course : - Science (Math)
                    </li>
                    <li className="list-group-item">percentage : - 65%</li>
                    <li className="list-group-item">
                      Achievement Pass KIT University Exam & Other
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col  justify-content-center d-flex">
              <div
                className="card bg-dark text-white container"
                // style={{ width: "18rem" }}
              >
                <div className="card-body ">
                  <h5 className="card-title">10th Board</h5>

                  <ul className="list-group">
                    <li className="list-group-item">R B R High School RFJ</li>
                    <li className="list-group-item">session : - 2007</li>
                    <li className="list-group-item">course : - All Subject</li>
                    <li className="list-group-item">percentage : - 66%</li>
                    <li className="list-group-item">
                      Achievement Pass local exam
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
