import React, { useContext } from 'react'
import {AppContext} from '../../AppContext'
import styles from "./styles.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function SocialItem({icon='', link=''}){
    return (
        <a className={styles.social__link} href={link} rel="noreferrer">
            <FontAwesomeIcon icon={icon}/>
        </a>
    )
}

function Social() {
    const data = useContext(AppContext);
    const listItems = data.socials.map((row) => 
        <SocialItem key={row.id.toString()} icon={row.icon} link={row.link} />);
  return (
    <div className={styles.social}>
       {listItems}
    </div>
  )
}
export default React.memo(Social)