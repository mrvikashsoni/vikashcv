import styles from "./CurrentCompany.module.css";
import { Link } from "react-router-dom";

export default function CurrentCompany() {
  return (
    <>
      {/* <!-- -----------------------------------------------------------current company --> */}
      <div className="current-company">
        <div className={styles.company_container}>
          <div className={styles.cc_inside}>Current Company</div>
          <div className={styles.cc_inside2}>
            <div className={`${styles.cc_1st} ${styles.cc_in}`}>
              <div className={styles.cc_in1}>
                <img
                  src="./img/tortalabz.png"
                  alt="tortalabz"
                  width="30%"
                  height="28%"
                />
              </div>
              <div className={styles.cc_in1}>
                <div className="pe-3">
                  <img src="./img/web.svg" alt="search" />
                </div>
                <Link
                  to="https://tortalabz.com/"
                  target="_blank"
                  className="nav-link pe-4"
                >
                  Tortalabz
                </Link>
              </div>
            </div>
            <div className={styles.cc_in}>
              We, at Tortalabz, simplify problems with technology and
              innovation. Ideas cannot be rationalized unless built and as
              Tortans we take ideas to execution. We don’t engage in disrupting
              the fabric of mankind, but innovate to bridge the gap with
              technology, clearly distinguishing real and virtual spaces. We
              believe that too much or too less information are equally harmful
              to changing consumer behaviors. We believe in a rightly informed
              customer and the decisions they take. Failures and success are
              incorporated in our journey together, in breaking and building a
              pentagon of five senses. Defined by irrationality, convinced to
              solve. We delight customers with our simplicity.
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
