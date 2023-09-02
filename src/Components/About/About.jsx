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
    <section id="about" className={`${style.about} box`} data-aos="fade">
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
            {/* <h3>About me</h3>
            <p>
              I'm Agustina, a Full Stack Developer recently graduated from
              Henry's Bootcamp. I graduated as a dentist but soon realized it
              wasn't fulfilling my desire for challenges. Seeking a profession
              that matched my adventurous and travel-loving personality, I
              transitioned to programming. Now, I thrive on the excitement of
              this new path that perfectly aligns with my passions and
              aspirations.
            </p>
            <h3>What I believe are my greatest strengths?</h3>
            <ul>
              {description.map((info, index) => (
                <li key={index} className={style.ul}>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    xmlns="http:www.w3.org/2000/svg"
                  >
                    <path
                      fill="none"
                      stroke="#000000"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M3 12c6.268 0 9-2.637 9-9c0 6.363 2.713 9 9 9c-6.287 0-9 2.713-9 9c0-6.287-2.732-9-9-9Z"
                    />
                  </svg>
                  {info}
                </li>
              ))}
            </ul>
            <h3>What do I look for?</h3>
            <p>
              I am actively seeking a new challenging project to contribute all
              that I have learned so far.
            </p> */}
            <div className={style.cardItem}>
              <h3 className={style.title}>{t("about.about_me")}</h3>
              {/* <p className={style.description}>{t("about.description")}</p> */}
              {t("about.description")
                .split("\n")
                .map((info, index) => (
                  <div key={index} className={style.description}>
                    {/* <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path fill="#4b5563" d="M9 9v6h6V9H9m2 2h2v2h-2v-2Z" />
                    </svg> */}
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
                      >
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
    </section>
  );
};

export default About;
