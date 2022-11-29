import styles from "../style";
import { wblogo } from "../assets";

const Footer = () => (
  <section className={`${styles.flexEnd} ${styles.paddingY} flex-col`}>

    <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]">
      <p className="font-poppins font-normal text-center text-[18px] leading-[27px] text-white">
        Copyright Ⓒ WebLearning
      </p>
      <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
      <div className="flex-[1] flex flex-col justify-end mr-10">
        <img
          src={wblogo}
          alt="weblearning"
          className="w-[266px] h-[72.14px] object-contain"
        />
      </div>
    </div>
    </div>
  </section>
);

export default Footer;
