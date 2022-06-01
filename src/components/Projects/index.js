import React from 'react'
import styles_section from "../../assets/css/section.module.css";
import styles from "./styles.module.css";


function Projectitem({name='', link=''}){
  return (
    <a target='_blank' rel='noreferrer' href={link} >{name}</a>
  )
}

function ProjecOthertitem({name='', link=''}){
  return (
    <a target='_blank' rel='noreferrer' href={link} >{name}</a>
  )
}

export default function Projects({projects=[], project_others=[]}) {

  const listProject= projects.map((row) => 
        <Projectitem key={row.id.toString()}  name={row.name} link={row.link} />);
  
  const listProjectOther= project_others.map((row) => 
        <ProjecOthertitem key={row.id.toString()}  name={row.name} link={row.link} />);

  return (
    <section className={styles.section__project}>
      <div className={styles_section.section__head}>
        <h2 className={styles_section.section__title}>Dự án đã thực hiện</h2>
      </div>
       <ul className={styles.project_list}>
           <li>Một số ấn phẩm thiết kế đã thực hiện: <a target='_blank' href="https://drive.google.com/file/d/1zHOxY5kGoNwUKFuiCq4WokO2d1S0h8P7/view?usp=sharing">xem tại đây</a></li>
           <li className={styles.project_site}>
             <div>Một số Dự án website nổi bật đã thực hiện đang vận hành cho khách:</div>
             {listProject}
             ...
           </li>
           <li className={styles.project_site}>
             <div>Một số Site mẫu:</div>
                {listProjectOther} ...
           </li>
        </ul> 
    </section>
  )
}
