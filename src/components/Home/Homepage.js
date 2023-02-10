import React from "react";
import logo from "../../assets/Logo-R.png";
import styles from "./Homepage.module.css";


const HomePage = () => {
  return (
    <div className={styles.homeBox}>
      <div className={styles.logo_box}>
        <img src={logo} className={styles.logo} alt="logo" />
        <div className={styles.logo_line}>
        </div>
      </div>
      <div className={styles.btn_box}>
        <button className={styles.btn} onClick={() => {}}>
          რეზიუმეს დამატება
        </button>
      </div>
    </div>
  );
};

export default HomePage;
