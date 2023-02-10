import styles from "./ResumeComp.module.css";
import React, { useState } from "react";
import atSign from "../../assets/alternate-email.png";
import phoneSign from "../../assets/phone-fill.png";
import plus from "../../assets/LOGO-12.png";
const ResumeComp = ({ data, preview }) => {
  const [toggleResume, setToggleResume] = useState(true);

  return (
    <div className={styles.container}>
        <div className={styles.sibling_box}>
      {toggleResume && ( <>
          <div className={styles.info_box}>
            <div className={styles.name_box}>
              <p
                className={`${
                  data.name.length + data.surname.length < 19
                    ? styles.name
                    : styles.name_small
                }`}
              >
                {data.name} {data.surname}
              </p>
            </div>
            <div className={styles.mail_box}>
              {data.email && <img src={atSign} alt={"email-logo"} />}
              <p className={styles.phone_number}>{data.email}</p>
            </div>
            <div className={styles.mail_box}>
              {data.phone_number && <img src={phoneSign} alt="phone-logo" />}
              <p className={styles.phone_number}>{data.phone_number}</p>
            </div>
            <div>
              {data.about_me && <p className={styles.about}>ჩემ შესახებ</p>}
              <p className={styles.about_paper}>{data.about_me}</p>
            </div>
          </div>

          <div className={styles.img_box}>
            {data.image && (
              <img src={data.image} className={styles.cv_pic} alt="CV-face" />
            )}
          </div>
          </>
          )}
        </div>
     

      <button
        style={{ backgroundColor: "transparent", border: "none", display: "flex", justifyContent: "flex-start", marginLeft:"75px"}}
              
        onClick={() => setToggleResume(!toggleResume)}
      >
        <img src={plus} className={styles.toggle} alt="toggle" />
      </button>
    </div>
  );
};

export default ResumeComp;
