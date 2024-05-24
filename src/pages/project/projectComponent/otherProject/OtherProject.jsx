import React from "react";
import styles from "./OtherProject.module.css";

export default function OtherProject() {
  return (
    <div className="container my-3 d-flex justify-content-center">
      <div className="row row-cols-lg-4  row-cols-sm-2 g-4 ">
        <div className="col align-items-center d-flex justify-content-center">
          <div className={`card ${styles.cardCss}`} style={{ width: "18rem" }}>
            <div className="card-body">
              <h5 className="card-title">Metadella Project</h5>
              <ul className="list-group ">
                <li className="list-group-item bg-dark text-white">
                  Dubai base client
                </li>
                <li className="list-group-item bg-dark text-white">
                  Buy/ sell old cars
                </li>
                <li className="list-group-item bg-dark text-white">
                  their equipment's
                </li>
                <li className="list-group-item bg-dark text-white">
                  Bulks/ one
                </li>
                <li className="list-group-item bg-dark text-white">
                  handover to client
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col align-items-center d-flex justify-content-center">
          <div className={`card ${styles.cardCss}`} style={{ width: "18rem" }}>
            <div className="card-body">
              <h5 className="card-title">DOC EMR Project</h5>
              <ul className="list-group">
                <li className="list-group-item">India base client</li>
                <li className="list-group-item">kids hospital</li>
                <li className="list-group-item">new born babies</li>
                <li className="list-group-item">they track till 3 yrs</li>
                <li className="list-group-item">appointment book</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col align-items-center d-flex justify-content-center">
          <div className={`card ${styles.cardCss}`} style={{ width: "18rem" }}>
            <div className="card-body">
              <h5 className="card-title">Locus Project</h5>
              <ul className="list-group">
                <li className="list-group-item bg-dark text-white">
                  US base client
                </li>
                <li className="list-group-item bg-dark text-white">
                  insurance domain
                </li>
                <li className="list-group-item bg-dark text-white">
                  license/state wise
                </li>
                <li className="list-group-item bg-dark text-white">
                  renew feature
                </li>
                <li className="list-group-item bg-dark text-white">
                  Training/ join season
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col align-items-center d-flex justify-content-center">
          <div className={`card ${styles.cardCss}`} style={{ width: "18rem" }}>
            <div className="card-body">
              <h5 className="card-title">Kukoo Project</h5>
              <ul className="list-group">
                <li className="list-group-item">India base client</li>
                <li className="list-group-item">Music instrument</li>
                <li className="list-group-item">Kids learning</li>
                <li className="list-group-item">subscription plan</li>
                <li className="list-group-item">AI base audio</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
