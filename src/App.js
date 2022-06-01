import "./App.css";
import styles from "./assets/css/global.module.css";
import app_data from "./Config";
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

 /* Thêm thư viện fontawesome */
library.add(fas,far, fab);


function App() {
  const data = app_data[0];
  return (
    <main className={styles.main}>
      <div className={styles.section_container + (" ") + styles.gutter_top}>
        <aside className={styles.col_sub}>
          <div className={styles.sidebar + (" ") + styles.shadow} id='sidebar'>
            <img className={styles.avatar} src={process.env.PUBLIC_URL + data.avatar} alt={data.name} />
            <Profile socialsArr={data.socials} career={data.career} myname={data.name} />
            <Contact contacts={data.contacts} />
          </div>
        </aside>
        <aside className={styles.col_main + (" ") + styles.shadow}>
          <Aboutme aboutmes={data.aboutme}/>
          <CareerGoals careergoals={data.careergoals} />
          <Education educations={data.education}/>
          <Skill skills={data.skills} skill_others={data.skill_others} />
          <Experience experiences={data.experience}/>
          <Interests  interests={data.interests}/>
          <Projects projects={data.project} project_others={data.project_other} />
        </aside>
      </div>
    </main>
  );
}

export default App;
