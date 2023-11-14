import style from "./Nav.module.css";
import { useTranslation } from "react-i18next";
import { useState } from "react";
// import i18next from "i18next";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { NavLink } from "react-router-dom";

const languages = [
  {
    code: "en",
    name: "English",
    country_code: "gb",
  },
  {
    code: "es",
    name: "Español",
    country_code: "es",
  },
];

const LanguageIcon = () => (
  <svg
    width="30"
    height="30"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill="#fff"
      d="M12 22q-2.05 0-3.875-.788t-3.188-2.15q-1.362-1.362-2.15-3.187T2 12q0-2.075.788-3.888t2.15-3.174Q6.3 3.575 8.124 2.788T12 2q2.075 0 3.888.788t3.174 2.15q1.363 1.362 2.15 3.175T22 12q0 2.05-.788 3.875t-2.15 3.188q-1.362 1.362-3.175 2.15T12 22Zm0-2.05q.65-.9 1.125-1.875T13.9 16h-3.8q.3 1.1.775 2.075T12 19.95Zm-2.6-.4q-.45-.825-.788-1.713T8.05 16H5.1q.725 1.25 1.813 2.175T9.4 19.55Zm5.2 0q1.4-.45 2.488-1.375T18.9 16h-2.95q-.225.95-.562 1.838T14.6 19.55ZM4.25 14h3.4q-.075-.5-.113-.988T7.5 12q0-.525.038-1.012T7.65 10h-3.4q-.125.5-.188.988T4 12q0 .525.063 1.012T4.25 14Zm5.4 0h4.7q.075-.5.113-.988T14.5 12q0-.525-.038-1.012T14.35 10h-4.7q-.075.5-.113.988T9.5 12q0 .525.038 1.012T9.65 14Zm6.7 0h3.4q.125-.5.188-.988T20 12q0-.525-.063-1.012T19.75 10h-3.4q.075.5.113.988T16.5 12q0 .525-.038 1.012T16.35 14Zm-.4-6h2.95q-.725-1.25-1.812-2.175T14.6 4.45q.45.825.788 1.713T15.95 8ZM10.1 8h3.8q-.3-1.1-.775-2.075T12 4.05q-.65.9-1.125 1.875T10.1 8Zm-5 0h2.95q.225-.95.563-1.838T9.4 4.45Q8 4.9 6.912 5.825T5.1 8Z"
    />
  </svg>
);
const Nav = () => {
  const [showLanguageMenu, setShowLanguageMenu] = useState(false);
  const [t, i18n] = useTranslation();

  const handleLanguageChange = (languageCode) => {
    i18n.changeLanguage(languageCode);
    setShowLanguageMenu(false);
  };

  // const [showOptions, setShowOptions] = useState(false);
  useEffect(() => {
    AOS.init();
  }, []);

  // const handleMenuClick = () => {
  //   setShowOptions((prevShowOptions) => !prevShowOptions);
  // };
  
  return (
    <nav className={`navbar navbar-expand-lg bg-tertiary p-4 fixed-top ${style.navbarIdea}`}>
      <div className={`container-fluid d-flex `}>
        <button
          className={`navbar-toggler`}
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className={`collapse navbar-collapse justify-content-evenly`}
          id="navbarSupportedContent" 
        >
          <ul className={`navbar-nav mb-2 mb-lg-0 fw-medium fs-4}`}>
            <li className={`nav-item justify-content-center ${style.links}`}>
              <a className="nav-link me-4 text-white fw-medium fs-4" href="/#home">
                {t("nav.home")}
              </a>
            </li>
            <li className={`nav-item justify-content-center ${style.links}`}>
              <a className="nav-link me-4 text-white fw-medium fs-4" href="/#about">
                {t("nav.about")}
              </a>
            </li>
            <li className={`nav-item justify-content-center ${style.links}`}>
              <a className="nav-link me-4 text-white fw-medium fs-4" href="/#skills">
                {t("nav.skills")}
              </a>
            </li>
            <li className={`nav-item justify-content-center ${style.links}`}>
              <a
                className="nav-link me-4 text-white fw-medium fs-4"
                href="/#projects"
              >
                {t("nav.projects")}
              </a>
            </li>
            <li className={`nav-item justify-content-center ${style.links}`}>
              <NavLink
                className="nav-link me-4 text-white fw-medium fs-4"
                to="/contact"
              >
                {t("nav.contact")}
              </NavLink>
            </li>
            <li className={`nav-item dropdown ${style.links} `}>
              <a
                className={`nav-link dropdown-toggle me-4 text-white `}
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <LanguageIcon width="28" height="28" />
              </a>
              <ul
                className={`dropdown-menu fondo-menu letras-menu ${
                  showLanguageMenu ? "show" : ""
                }`}
              >
                {languages.map(({ code, name }) => (
                  <li key={code}>
                    <button
                      className="dropdown-item reveal-text my-2"
                      onClick={() => handleLanguageChange(code)}
                    >
                      {name}
                    </button>
                  </li>
                ))}
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;