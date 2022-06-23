import React, { useContext } from 'react'
import {AppContext} from '../../AppContext'

import styles from "./styles.module.css";
import styles_section from "../../assets/css/section.module.css";

function EducationItem({time_working='',school_name='', class_name=''}){
  return (
    <li>
        <div className={styles.education_time}>{time_working}</div>
        <div className={styles.education_school_info}>
            <h3 className={styles.education_cer}>{class_name}</h3>
            <p className={styles.education_name}>{school_name}</p>
        </div>
    </li>
  )
}


export default function Education() {
  const data = useContext(AppContext);
  const listDesc= data.education.map((row) => 
        <EducationItem key={row.id.toString()} school_name={row.school_name} class_name={row.class_name} time_working={row.time_working} />);

  return (
    <section className={styles.section__education}>
      <div className={styles_section.section__head}>
        <h2 className={styles_section.section__title}>Trình độ học vấn</h2>
      </div>
      <ul className={styles.education_blocks}>
        {listDesc}
      </ul>
    </section>
  );
}
