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
    <div
      className={`min-vh-100 d-flex align-items-center justify-content-center my-5 ${style.header}`}
      data-aos="fade"
      id="skills"
    >
      <div className="container">
        <h2 data-aos="fade-right" className={`text-center my-5 display-5 ${style.title2}`}>{t("skills.skills_title")}</h2>
        <div className="row row-cols-2 row-cols-md-3 row-cols-lg-4 g-4">
          <div className="d-flex align-items-center justify-content-center ">
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
          </div>
          <div className="d-flex align-items-center justify-content-center ">
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
            </div>
         
          <div className="d-flex align-items-center justify-content-center ">
              <div className={style.myCard} data-aos="zoom-in">
                <div className={style.innerCard}>
                  <div className={style.frontSide}>
                    <img
                      className={style.imgJs}
                      src={iconJs}
                      alt="Java Script"
                    />
                  </div>
                  <div className={style.backSide}>
                    <p className={style.title}>JavaScript</p>
                  </div>
                </div>
            
            </div>
          </div>
          <div className="d-flex align-items-center justify-content-center ">
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
          
          </div>
          <div className="d-flex align-items-center justify-content-center ">
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
            
          </div>
          <div className="d-flex align-items-center justify-content-center ">
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
          
          </div>
          <div className="d-flex align-items-center justify-content-center ">
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
          </div>
          <div className="d-flex align-items-center justify-content-center ">
              <div className={style.myCard} data-aos="zoom-in">
                <div className={style.innerCard}>
                  <div className={style.frontSide}>
                    <img
                      className={style.img}
                      src={iconExpress}
                      alt="Express"
                    />
                  </div>
                  <div className={style.backSide}>
                    <p className={style.title}>Express</p>
                  </div>
                </div>
           
            </div>
          </div>
          <div className="d-flex align-items-center justify-content-center ">
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
          </div>
          <div className="d-flex align-items-center justify-content-center ">
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
          </div>
          <div className="d-flex align-items-center justify-content-center ">
              <div className={style.myCard} data-aos="zoom-in">
                <div className={style.innerCard}>
                  <div className={style.frontSide}>
                    <img
                      className={style.img}
                      src={iconTailwind}
                      alt="Tailwind"
                    />
                  </div>
                  <div className={style.backSide}>
                    <p className={style.title}>Tailwind</p>
                  </div>
                </div>
              </div>
            
          </div>
          <div className="d-flex align-items-center justify-content-center ">
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
        
      </div>
    </div>
  );
};

export default Skills;
