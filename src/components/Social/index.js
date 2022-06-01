import React from 'react'
import styles from "./styles.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function SocialItem({icon='', link=''}){
    return (
        <a className={styles.social__link} href={link} rel="noreferrer">
            <FontAwesomeIcon icon={icon}/>
        </a>
    )
}

export default function Social({socials=[]}) {
    const listItems = socials.map((row) => 
        <SocialItem key={row.id.toString()} icon={row.icon} link={row.link} />);
  return (
    <div className={styles.social}>
       {listItems}
    </div>
  )
}
