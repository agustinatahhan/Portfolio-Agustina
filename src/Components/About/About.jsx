import style from "./About.module.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

const About = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const { t } = useTranslation("global");
  // const description = [
  //   "My bravery in stepping out of my comfort zone",
  //   "My ability to adapt quickly to any situation",
  //   "My quick aptitude for acquiring new knowledge",
  //   "My effective communication skills within teams.",
  // ];

  return (
    <div
      className={`min-vh-100 d-flex align-items-center justify-content-center py-5 ${style.about}`}
      id="projects"
      data-aos="fade"
    >
      <div className={`${style.grid} ${style.span10}`}>
        <div
          className={`${style.background} ${style.span4}`}
          data-aos="fade-right"
        ></div>
        <div className={style.span6}>
          <div
            className={`${style.textContent} ${style.lateral}`}
            data-aos="fade-left"
          >
            <div className={style.cardItem}>
              <h3 className={style.title}>{t("about.about_me")}</h3>
              {t("about.description")
                .split("\n")
                .map((info, index) => (
                  <div key={index} className={style.description}>
                    {info}
                  </div>
                ))}
              <h3 className={style.title}>{t("about.strengths")}</h3>
              {Array.isArray(t("about.strengths_description").split("\n"))
                ? t("about.strengths_description")
                    .split("\n")
                    .map((info, index) => (
                      <div key={index} className={style.description}>
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          xmlns="http:www.w3.org/2000/svg"
                        >Name
                          <path
                            fill="none"
                            stroke="#000000"
                            strokeLinejoin="round"
                            strokeWidth="1.5"
                            d="M3 12c6.268 0 9-2.637 9-9c0 6.363 2.713 9 9 9c-6.287 0-9 2.713-9 9c0-6.287-2.732-9-9-9Z"
                          />
                        </svg>
                        {info}
                      </div>
                    ))
                : null}
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};

export default About;
