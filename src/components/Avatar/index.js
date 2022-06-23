import React, { useContext } from 'react'
import {AppContext} from '../../AppContext'
import styles from './styles.module.css'

function Avatar() {
  const data = useContext(AppContext);
  console.log('re-render Avatar');
  return (
    <>
    <img className={styles.avatar} src={process.env.PUBLIC_URL + data.avatar} alt={data.name} />
    </>
  )
}

export default React.memo(Avatar)