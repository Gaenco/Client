import { levelup } from "../assets";
import styles, { layout } from "../style";

const Levels = () => (
  <section id="levels" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <img src={levelup} alt="levelup" className="w-[100%] h-[100%] relative z-[5]" />

      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />

    </div>

    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        ¿Qué son <br className="sm:block hidden" /> los niveles?
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Los niveles son un sistema de organización en relación a tu nivel de conocimiento en la tecnología <br/> <br/>
         Nivel 1: Principiante <br/>
         Nivel 2: Amateur<br/>
         Nivel 3: Intermedio<br/>
         Nivel 4: Avanzado<br/>
         Nivel 5: Experto
      </p>

    </div>
  </section>
);

export default Levels;
