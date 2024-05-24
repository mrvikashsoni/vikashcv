import React from "react";
import styles from "./Hobbies.module.css";

export default function Hobbies() {
  return (
    <>
      <section className={styles.hob_web}>
        <div className={styles.hobbies_container}>
          <div className={styles.hobbies_in}>
            <img
              src="./img/hobbies.png"
              alt="hobbies"
              width="60%"
              height="60%"
            />
          </div>
          <div className={styles.hobbies_in}>
            <p>Hobbies</p>
          </div>

          <div className={styles.hobbies_in}>
            <ul>
              <li>Watch Movies : - sci-fi / Horror/ mystery</li>
              <li>
                Reading : - Motivation book / nobles= 2 stages/ zero to Hero etc
              </li>
              <li>Gaming: - candy clash /free fire/ pug G</li>
              <li>Biking: - long drive</li>
              <li>Cooking: - chicken fries / panner</li>
              <li>Gardening : - Take care of plants</li>
            </ul>
          </div>
        </div>
      </section>
      {/* ---------for mob */}
      <section className={styles.hob_mob}>
        <ul className="list-group container my-3">
          <li
            className="list-group-item active text-center"
            aria-current="true"
          >
            Hobbies
          </li>
          <li className="list-group-item">
            Reading : - Motivation book / nobles= 2 stages/ zero to Hero etc
          </li>
          <li className="list-group-item">
            Watch Movies : - sci-fi / Horror/ mystery
          </li>
          <li className="list-group-item">
            Gaming: - candy clash /free fire/ pug G
          </li>
          <li className="list-group-item">Cooking: - chicken fries / panner</li>
          <li className="list-group-item">Gardening : - Take care of plant</li>
          <li className="list-group-item">Biking: - long drive</li>
        </ul>
      </section>
    </>
  );
}
