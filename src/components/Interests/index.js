import React, { useContext } from 'react'
import {AppContext} from '../../AppContext'
import styles_section from "../../assets/css/section.module.css";
import styles from "./styles.module.css";

function Intereststem({content=''}){
  return (
    <li>{content}</li>
  )
}


function Interests() {
  const data = useContext(AppContext);
  console.log(data);
  const listItems = data.interests.map((row) => 
        <Intereststem key={row.id.toString()} content={row.content} />);
  return (
    <section className={styles.section__interests}>
      <div className={styles_section.section__head}>
        <h2 className={styles_section.section__title}>Sở thích</h2>
      </div>
       <ul className={styles.interests_list}>
          {listItems}
        </ul> 
    </section>
  )
}
export default React.memo(Interests)