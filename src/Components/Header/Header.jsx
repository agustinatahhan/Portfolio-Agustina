import style from "./Header.module.css";
// import image from "../../assets/bbbgp.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
const Header = () => {
  const [t] = useTranslation("global");

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    //   // <section id="home" className={style.header}>
    //   //   <div className={`${style.grid} ${style.containerCenter}`}>

    //   //      <div
    //   //       className={`${style.background} ${style.span12}`}
    //   //       data-aos="fade-right"
    //   //     ></div>
    //   //     <div
    //   //       className={`${style.textContent} ${style.full}`}
    //   //       data-aos="zoom-in"
    //   //     >
    //   //       <h3>{t("header.hi_there")}</h3>
    //   //       <h3>{t("header.name")}</h3>
    //   //       <h2>{t("header.career")}</h2>
    //   //       <h3>Hi There!</h3>
    //   //       <h3>I´m Agustina Tahhan</h3>
    //   //       <h2>Full Stack Developer & Dentist</h2>
    //   //     </div>
    //   //   </div>
    //   // </section>
    //   <section id="home" className={style.header}>
    //     <div className={`${style.grid} ${style.containerCenter}`}>
    //       {/* <div
    //       className={`${style.imageContent} ${style.span6}`}
    //       data-aos="fade-right"
    //     >
    //       <img src={image} alt="image" className={style.img} />
    //     </div> */}
    //       <div
    //         className={`${style.textContent} ${style.full}`}
    //         data-aos="zoom-in"
    //       >
    //         <h3>{t("header.hi_there")}</h3>
    //         <h3>{t("header.name")}</h3>
    //         <h2>{t("header.career")}</h2>
    //         <a href="#footer" className={style.cta}>
    //           <span>Contact Me</span>
    //           <svg viewBox="0 0 13 10" height="10px" width="15px">
    //             <path d="M1,5 L11,5"></path>
    //             <polyline points="8 1 12 5 8 9"></polyline>
    //           </svg>
    //         </a>{" "}
    //       </div>
    //     </div>
    //   </section>

    <section
      className={`min-vh-100 d-flex align-items-center justify-content-center ${style.header}`}
      id="home"
    >
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-lg-6 text-center"></div>
          <div className="col-lg-6 text-center align-items-center justify-content-center">
            <div className={` ${style.textContent} ${style.full}`}>
              <h3>{t("header.hi_there")}</h3>
              <h3>{t("header.name")}</h3>
              <h2>{t("header.career")}</h2>
              <a href="#footer" className={`btn ${style.cta}`}>
                <span>Contact Me</span>
                <svg viewBox="0 0 13 10" height="10px" width="15px">
                  <path d="M1,5 L11,5"></path>
                  <polyline points="8 1 12 5 8 9"></polyline>
                </svg>
              </a>{" "}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
