import React from "react";
import styles_section from "../../assets/css/section.module.css";
import styles from "./styles.module.css";


function DescItem({content=''}){
  return (
    <li>{content}</li>
  )
}


function Experiencetitem({time_working='', company_name='',position='', desc=[]}){
  const listDesc= desc.map((row) => 
        <DescItem key={row.id.toString()} content={row.content}/>);

  
  return (
    <div className={styles.experience_item}>
        <div className={styles.experience_item_left}>
          <h3 className={styles.experience_company}>{company_name}</h3>
          <span className={styles.experience_time}>{time_working}</span>
        </div>
        <div className={styles.experience_item_right}>
          <h3 className={styles.experience_position}>{position}</h3>
          <ul className={styles.experience_desc}>
            {listDesc}
          </ul>
        </div>
      </div>
  )
}

export default function Experience({experiences=[]}) {
  const listExperience= experiences.map((row) => 
        <Experiencetitem key={row.id.toString()}  time_working={row.time_working} company_name={row.company_name} position={row.position} desc={row.desc}/>);

  return (
    <section className={styles.section__experience}>
      <div className={styles_section.section__head}>
        <h2 className={styles_section.section__title}>Kinh nghiệm</h2>
      </div>
      <div className={styles.experience_block}>
        {listExperience}
      </div>
    </section>
  );
}
