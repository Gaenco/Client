import styles from "../style";
import { tablet } from "../assets";
import ClasesGratis from "./ClasesGratis";

const Intro = () => {
  return (
    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
      
        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
            Web <br className="sm:block hidden" />{" "}
            <span className="text-gradient">Learning</span>{" "}
          </h1>
          <div className="ss:flex hidden md:mr-4 mr-0">
            <ClasesGratis />
          </div>
        </div>

        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Una página web que te ayudará a conocer aún mas acerca de el internet con cursos totalmente GRATUITOS
        </p>
      </div>

      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        <img src={tablet} alt="tablet" className="w-[100%] h-[100%] relative z-[5]" />
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
      </div>

      <div className={`ss:hidden ${styles.flexCenter}`}>
        <ClasesGratis />
      </div>
    </section>
  );
};

export default Intro;
