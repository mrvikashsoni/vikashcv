import React from "react";
import styles from "./Supplysutra.module.css";

export default function Supplysutra() {
  return (
    <>
      <section>
        <div className={styles.supplySutra_project}>
          <div className={styles.supplySutra_container}>
            <div className={styles.supplySutra_in1}>
              <div className={styles.supplySutra_inside_a}>Nkindl</div>
              <div className={styles.supplySutra_inside_b}>
                March 2022 To Nov 2023
              </div>
              <div className="supplySutra-inside">E-commerce supply chain</div>
            </div>
            <div className={styles.supplySutra_in2}>
              <ul>
                <li>
                  This project related to manufacture/ stockiest/ distributor/
                  retail. All to mapping to each other
                </li>
                <li>
                  Buy & Sell product / a/c to quantity & their location product
                  price decide ; mean high quantity low price & far location
                  high price visa versa
                </li>
                <li>
                  Authorization: - one site but multiple user portal & each user
                  have separate UI/ functionality/ responsibility
                </li>
                <li>
                  End user can used Nkindl android apk for purchase the product
                </li>
                <li>
                  Analysis feature :- that helps the user to track their income/
                  sells/ Purchases
                </li>
                <li>
                  Payment mode:- cash/ UPI/ debit/ credit card/ Bank transfer
                  option
                </li>
                <li>
                  Notification :- track their product delivery/return status
                </li>
                <li>& many more</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
