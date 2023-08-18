import style from "./Header.module.css";
import image from "../../assets/agusbw.jpg";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import { useTranslation } from "react-i18next"
const Header = () => {
  const [t, i18n] = useTranslation("global");

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section id="home" className={style.header}>
      <div className={`${style.grid} ${style.containerCenter}`}>
        {/* <div>
                        <img src={image} alt="image" className={style.img}/>
                    </div> */}
        <div className={`${style.textContent} ${style.full}`} data-aos="zoom-in">
          <h3>{t("header.hi_there")}</h3>
          <h3>{t("header.name")}</h3>
          <h2>{t("header.career")}</h2>
          {/* <h3>Hi There!</h3>
          <h3>I´m Agustina Tahhan</h3>
          <h2>Full Stack Developer & Dentist</h2> */}
        </div>
      </div>
    </section>
  );
};

export default Header;
