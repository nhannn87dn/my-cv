import React from "react";
import styles from "./styles.module.css";
import styles_section from "../../assets/css/section.module.css";


function CareerGoalsItem({content=''}){
  return (
    <li>{content}</li>
  )
}

export default function CareerGoals({careergoals=[]}) {
  const listItems = careergoals.map((row) => 
        <CareerGoalsItem key={row.id.toString()}  content={row.content} />);

  return (
    <section className={styles.section_career_goals}>
      <div className={styles_section.section__head }>
        <h2 className={styles_section.section__title}>Mục tiêu nghề nghiệp</h2>
      </div>
      <ul className={styles.section_career_blocks}>
        {listItems}
      </ul>
    </section>
  );
}
