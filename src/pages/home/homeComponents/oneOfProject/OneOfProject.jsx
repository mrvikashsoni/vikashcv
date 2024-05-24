import React from "react";
import styles from "./OneOfProject.module.css";
import { Link } from "react-router-dom";

export default function OneOfProject() {
  return (
    <>
      {/* <!-- -------------------------------------------------------------------------------------one of projects web --> */}
      <section className={styles.project_web}>
        <div className={styles.project}>
          <div className={styles.project_container}>
            <div className={styles.container_inside_top}>One of Projects</div>
            <div className={styles.container_inside_bot}>
              <div
                className="card bg-dark text-end "
                style={{ width: "25rem" }}
              >
                <img
                  src="./img/gabg.png"
                  alt="ga"
                  width="80%"
                  height="80%"
                  className="mx-auto"
                />
                <div className="card-body">
                  <p className="card-text">
                    GA provides a total crop protection solution that’s built on
                    the best of Drone technology, Artificial Intelligence,and
                    crop science. The solution enables precision agriculture
                    through a 4 step integrated process
                  </p>
                  <Link to="/project" className="btn btn-primary">
                    Know More
                  </Link>
                </div>
              </div>
              <div
                className="card bg-dark text-end pt-3"
                style={{ width: "25rem" }}
              >
                <img
                  src="./img/elel.png"
                  alt="ga"
                  width="70%"
                  height="90%"
                  pb-2
                  className="mx-auto img-fluid pt-2"
                />
                <div className="card-body">
                  <p className="card-text">
                    Our team of passionate individuals understands the unique
                    challenges that come with organizing events in Africa.
                    That's why we've created an accessible and affordable
                    platform that connects event organizers and attendees
                    seamlessly
                  </p>
                  <Link to="/project" className="btn btn-primary">
                    Know More
                  </Link>
                </div>
              </div>
              <div
                className="card bg-dark text-end pt-2"
                style={{ width: "25rem" }}
              >
                <img
                  src="./img/supplysutra.png"
                  alt="ga"
                  width="50%"
                  height="50%"
                  className="mx-auto"
                />
                <div className="card-body">
                  <p className="card-text">
                    this is on going project in e-commerce domain. this supply
                    chain manufacture to retail. four major branch & several
                    user roles. this role have different responsibility to
                    handle it so process goes smoothly
                  </p>
                  <Link to="/project" className="btn btn-primary">
                    Know More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------- project mob */}
      <section className={styles.project_mob}>
        <div className="text-center text-warning my-3 fs-1">Projects</div>
        <div className="d-flex justify-content-between ">
          <div className="card ms-5  mb-3 bg-dark" style={{ width: "40%" }}>
            <img
              src="./img/gabg.png"
              alt="ga"
              width="80%"
              height="80%"
              className="mx-auto"
            />
            <div className="card-body">
              <p className="card-text">
                GA provides a total crop protection solution that’s built on the
                best of Drone technology, Artificial Intelligence,and crop
                science. The solution enables precision agriculture through a 4
                step integrated process
              </p>
              <Link to="/project" className="btn btn-primary">
                Know More
              </Link>
            </div>
          </div>
          <div className="card me-5 mb-3 bg-dark pt-2" style={{ width: "40%" }}>
            <img
              src="./img/supplysutra.png"
              alt="ga"
              width="50%"
              height="50%"
              className="mx-auto"
            />
            <div className="card-body">
              <p className="card-text">
                this is on going project in e-commerce domain. this supply chain
                manufacture to retail. four major branch & several user roles.
                this role have different responsibility to handle it so process
                goes smoothly
              </p>
              <Link to="/project" className="btn btn-primary">
                Know More
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
