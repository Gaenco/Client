import { meet } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const Meet = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Nuestras Clases <br className="sm:block hidden" /> por Google Meet
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      Meet es una aplicacion en donde varias personas se conectan a través de un celular o una computadora, no importa el lugar en donde estes o de donde seas.
Meet nos brinda la oportunidad de conectarnos y aprender de una forma cómoda ya sea desde casa o oficina.
      </p>

      <Button styles={`mt-10`} />
    </div>

    <div className={layout.sectionImg}>
      <img src={meet} alt="google meet" className="w-[100%] h-[100%]" />
    </div>
  </section>
);

export default Meet;
