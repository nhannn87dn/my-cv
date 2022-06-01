import React from 'react'
import styles from "./styles.module.css";
import Social from '../Social';

export default function Profile({socialsArr=[],career='Website Developer',myname='Ngọc Nhân'}) {
  return (
    <div className={styles.textCenter}>
        <h3 className={styles.user_name}>{myname}</h3>
        <div className={styles.badge}>{career}</div>
        <Social socials={socialsArr}/>
    </div>
  )
}
