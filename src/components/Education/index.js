import React from "react";
import styles from "./styles.module.css";
import styles_section from "../../assets/css/section.module.css";

export default function Education() {
  return (
    <section className={styles.section__education}>
      <div className={styles_section.section__head}>
        <h2 className={styles_section.section__title}>Trình độ học vấn</h2>
      </div>
      <ul className={styles.education_blocks}>
        <li>
            <div className={styles.education_time}>2007-2009</div>
            <div className={styles.education_school_info}>
                <h3 className={styles.education_cer}>Cử nhân Kế Toán Thương Mại Dịch Vụ</h3>
                <p className={styles.education_name}>Cao Đẳng Thương Mại</p>
            </div>
        </li>
        <li>
            <div className={styles.education_time}>9.2011 - 2.2012</div>
            <div className={styles.education_school_info}>
                <h3 className={styles.education_cer}>Khóa học lập trình với PHP</h3>
                <p className={styles.education_name}>Trung tâm iNET</p>
            </div>
        </li>
        <li>
            <div className={styles.education_time}>5.2022 - 12.2022</div>
            <div className={styles.education_school_info}>
                <h3 className={styles.education_cer}>FullStack React, Node.js (M.E.R.N)</h3>
                <p className={styles.education_name}>Softech Aptech Đà Nẵng</p>
            </div>
        </li>
        
      </ul>
    </section>
  );
}
