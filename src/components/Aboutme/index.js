import React, { useContext } from 'react'
import {AppContext} from '../../AppContext'

import styles_section from "../../assets/css/section.module.css";
import styles from "./styles.module.css";

function AboutmeItem({content=''}){
  return (
    <p>{content}</p>
  )
}


export default function Aboutme() {
  const data = useContext(AppContext);
  const listDesc= data.aboutme.map((row) => 
    <AboutmeItem key={row.id.toString()} content={row.content}/>);

  return (
    <section className={styles.section_aboutme}>
        <div className={styles_section.section__head }>
          <h2 className={styles_section.section__title + (" ") + styles.pd_0}>Giới thiệu</h2>
        </div>
        {listDesc}
    </section>
  )
}
