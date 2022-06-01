import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles_section from "../../assets/css/section.module.css";
import styles from './styles.module.css';

function SkillsOther({content=''}){
  return (
    <span>{content}</span>
  )
}


function SkillsList({icon="fa-brands fa-html5", name='',bg='#304CFD',percent=20}){
  return (
    <div className={styles.skills}>
        <div className={styles.skills__label} >
            <div className={styles.skills__label_icon} style={{background: `${bg}`}}><FontAwesomeIcon icon={icon} /></div>
            <div className={styles.skills__label_name}>{name}</div>
        </div>
        <div className={styles.skills__chart}>
            <div className={styles.skills__chart_percent} style={{background: `${bg}`, width: `${percent}%`}}></div>

        </div>
    </div>
  )
}

/**
 * Cách đưa prop vào FontAwesomeIcon
 * @param {*} props 
 * @returns 
 */

export default function Skill({skills=[],skill_others=[]}) {
  const listItems = skills.map((row) => 
        <SkillsList key={row.id.toString()} icon={row.icon} name={row.name} bg={row.bg} percent={row.percent} />);

  const listItemsOther = skill_others.map((row) => 
        <SkillsOther key={row.id.toString()}  content={row.content} />);



  return (
    <section className={styles.section__skill}>
      <div className={styles_section.section__head}>
        <h2 className={styles_section.section__title}>Kỹ năng nghề nghiệp</h2>
      </div>
      {listItems}
      <h3>Kỹ năng khác</h3>
      <div className={styles.section__skill_others}>
        {listItemsOther}
      </div>
    </section>
  )
}
