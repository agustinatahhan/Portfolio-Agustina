import style from "./Skills.module.css";
import iconReact from "../../assets/react.png";
import iconRedux from "../../assets/redux.png";
import node from "../../assets/node.png";
import iconExpress from "../../assets/express.png";
import iconSequelize from "../../assets/sequelize.png";
import iconPostgreSQL from "../../assets/postgresql.png";
import iconTailwind from "../../assets/tailwindcss.png";
import iconGit from "../../assets/git.png";
import iconHtml from "../../assets/iconHtml.png";
import iconJs from "../../assets/iconJs.png";
import iconCss from "../../assets/iconCss.png";
import iconSass from "../../assets/sass.png";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

const Skills = () => {
  const { t } = useTranslation("global");

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section id="skills" className={style.bg} data-aos="fade">
      <div className={style.grid}>
        {/* <h2 className={style.span6}>{t("skills.skills_title")}</h2> */}
        <h2 className={style.span6}>Skills</h2>
        <div className={`${style.gridIcons} ${style.span6}`}>

          <div className={style.myCard} data-aos="zoom-in">
            <div className={style.innerCard}>
              <div className={style.frontSide}>
                <img className={style.img} src={iconHtml} alt="" />
              </div>
              <div className={style.backSide}>
                <p className={style.title}>HTML</p>
              </div>
            </div>
          </div>

          <div className={style.myCard} data-aos="zoom-in">
            <div className={style.borderEffect}></div>
            <div className={style.innerCard}>
              <div className={style.frontSide}>
                <img className={style.img} src={iconCss} alt="css" />
              </div>
              <div className={style.backSide}>
                <p className={style.title}>CSS</p>
              </div>
            </div>
          </div>

          <div className={style.myCard} data-aos="zoom-in">
            <div className={style.innerCard}>
              <div className={style.frontSide}>
                <img className={style.imgJs} src={iconJs} alt="Java Script" />
              </div>
              <div className={style.backSide}>
                <p className={style.title}>JavaScript</p>
              </div>
            </div>
          </div>

          <div className={style.myCard} data-aos="zoom-in">
            <div className={style.innerCard}>
              <div className={style.frontSide}>
                <img className={style.img} src={iconReact} alt="Sass" />
              </div>
              <div className={style.backSide}>
                <p className={style.title}>React</p>
              </div>
            </div>
          </div>

          <div className={style.myCard} data-aos="zoom-in">
            <div className={style.innerCard}>
              <div className={style.frontSide}>
                <img className={style.img} src={iconRedux} alt="Redux" />
              </div>
              <div className={style.backSide}>
                <p className={style.title}>Redux</p>
              </div>
            </div>
          </div>

          <div className={style.myCard} data-aos="zoom-in">
            <div className={style.innerCard}>
              <div className={style.frontSide}>
                <img className={style.img} src={node} alt="Node Js" />
              </div>
              <div className={style.backSide}>
                <p className={style.title}>Node Js</p>
              </div>
            </div>
          </div>

          <div className={style.myCard} data-aos="zoom-in">
            <div className={style.innerCard}>
              <div className={style.frontSide}>
                <img
                  className={style.img}
                  src={iconPostgreSQL}
                  alt="PostgreSQL"
                />
              </div>
              <div className={style.backSide}>
                <p className={style.title}>PostgreSQL</p>
              </div>
            </div>
          </div>

          <div className={style.myCard} data-aos="zoom-in">
            <div className={style.innerCard}>
              <div className={style.frontSide}>
                <img className={style.img} src={iconExpress} alt="Express" />
              </div>
              <div className={style.backSide}>
                <p className={style.title}>Express</p>
              </div>
            </div>
          </div>

          <div className={style.myCard} data-aos="zoom-in">
            <div className={style.innerCard}>
              <div className={style.frontSide}>
                <img
                  className={style.img}
                  src={iconSequelize}
                  alt="Sequelize"
                />
              </div>
              <div className={style.backSide}>
                <p className={style.title}>Sequelize</p>
              </div>
            </div>
          </div>

          <div className={style.myCard} data-aos="zoom-in">
            <div className={style.innerCard}>
              <div className={style.frontSide}>
                <img className={style.img} src={iconGit} alt="Git" />
              </div>
              <div className={style.backSide}>
                <p className={style.title}>Git</p>
              </div>
            </div>
          </div>

          <div className={style.myCard} data-aos="zoom-in">
            <div className={style.innerCard}>
              <div className={style.frontSide}>
                <img className={style.img} src={iconTailwind} alt="Tailwind" />
              </div>
              <div className={style.backSide}>
                <p className={style.title}>Tailwind</p>
              </div>
            </div>
          </div>

          <div className={style.myCard} data-aos="zoom-in">
            <div className={style.innerCard}>
              <div className={style.frontSide}>
                <img className={style.img} src={iconSass} alt="Sass" />
              </div>
              <div className={style.backSide}>
                <p className={style.title}>SASS</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
