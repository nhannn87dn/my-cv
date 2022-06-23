import React, { useContext } from 'react'
import {AppContext} from '../../AppContext'

import styles from './styles.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


function ContactItem({icon='',text=''}) {
  return (
    <li className={styles.contacts__item}>
        <span className={styles.contacts__item_icon}><FontAwesomeIcon icon={icon} /></span>
        <span className={styles.contacts__item_text}>{text}</span>
    </li>
  );
}

export default function Contact() {
  const data = useContext(AppContext);
  const listItems = data.contacts.map((row) => 
        <ContactItem key={row.id.toString()} id={row.id} icon={row.icon} text={row.text}  />);
  return (
    <ul className={styles.contacts}>
        {listItems}
    </ul>
  )
}
