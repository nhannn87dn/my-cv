import React, { useContext } from 'react'
import {AppContext} from '../../AppContext'
import styles from "./styles.module.css";
import Social from '../Social';

function Profile() {
  const data = useContext(AppContext);
  return (
    <div className={styles.textCenter}>
        <h3 className={styles.user_name}>{data.name}</h3>
        <div className={styles.badge}>{data.career}</div>
        <Social />
    </div>
  )
}

export default React.memo(Profile)