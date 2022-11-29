import styles from "../style";
import { Link } from "react-router-dom";

const Test = () => (
  <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-purple-gradient-2 rounded-[20px] box-shadow`}>
    <div className="flex-1 flex flex-col">
      <h2 className={styles.heading2}>Prueba de Conocimientos</h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        ¡Prueba tus capacidades en estos mini exámenes que te pondrán a prueba!
      </p>
    </div>

    <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
      <Link to="/SelectQuiz">
        <button type="button" className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles}`}>
          Hacer Examen
        </button>
      </Link>
    </div>
  </section>
);

export default Test;
