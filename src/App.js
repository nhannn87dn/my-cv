import React from 'react'
import "./App.css";
import styles from "./assets/css/global.module.css";
import { useScreenDimensions } from './useScreenDimensions';
import { useAffix } from './useAffix';

//import app_data from "./Config";
import Profile from "./components/Profile";
import Contact from "./components/Contact";
import Aboutme from "./components/Aboutme";
import CareerGoals from "./components/CareerGoals";
import Education from "./components/Education";
import Skill from "./components/Skill";
import Experience from "./components/Experience";
import Interests from "./components/Interests";
import Projects from "./components/Projects";

/**
 * fontawesome
 */
 import { library } from '@fortawesome/fontawesome-svg-core'
 import { fas } from '@fortawesome/free-solid-svg-icons'
 import { far } from '@fortawesome/free-regular-svg-icons'
 import { fab } from '@fortawesome/free-brands-svg-icons'
import Avatar from './components/Avatar';

 /* Thêm thư viện fontawesome */
library.add(fas,far, fab);


function App() {
  
  const [affix, setAffix]   = useAffix(100);
  const [windowSize, setWindowSize] = useScreenDimensions();
  //
  return (
    <main className={styles.main}>
      <div className={styles.section_container + (" ") + styles.gutter_top}>
        <aside className={styles.col_sub}>
          <div className={styles.sidebar + (" ") + styles.shadow} id={(windowSize.width >980 && affix)? styles.sidebar_fixed : null}>
            <Avatar/>
            <Profile />
            <Contact />
          </div>
        </aside>

        <aside className={styles.col_main + (" ") + styles.shadow}>
         <Aboutme />
           <CareerGoals />
          <Education />
          <Skill />
          <Experience />
          <Interests />
          <Projects  /> 
        </aside>
      </div>
    </main>
  );
}

export default App;
