import React from 'react'

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

export default function Contact({contacts=[]}) {
  const listItems = contacts.map((row) => 
        <ContactItem key={row.id.toString()} id={row.id} icon={row.icon} text={row.text}  />);
  return (
    <ul className={styles.contacts}>
        {listItems}
    </ul>
  )
}
