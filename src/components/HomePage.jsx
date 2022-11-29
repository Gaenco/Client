import styles from "../style";
import { Levels, Inscription, Meet, Test, Footer, Navbar, Stats, Tutors, Intro, Profile,} from "../components";

const HomePage = () => (
  <div className="bg-primary w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
        <Profile/>
      </div>
    </div>

    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Intro />
      </div>
    </div>
    
    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Stats />
        <Inscription />
        <Levels/>
        <Meet />
        <Tutors />
        <Test />  
        <Footer />
      </div>
    </div>
  </div>
);

export default HomePage;