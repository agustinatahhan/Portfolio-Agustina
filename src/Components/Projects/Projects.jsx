import { useState } from "react";
import { NavLink } from "react-router-dom";
import style from "./Projects.module.css";
import pokemon from "../../assets/pokemon.png";
import detailPoke from "../../assets/detail.png";
import lion from "../../assets/lion.png";
import formPoke from "../../assets/form.png";
import sportiverse from "../../assets/sportiverse.png";
import login from "../../assets/login.png";
import dashboard from "../../assets/reservations.png";
import reservations from "../../assets/natacion.png";
import iconReact from "../../assets/react.png";
import iconRedux from "../../assets/redux.png";
import node from "../../assets/node.png";
import iconExpress from "../../assets/express.png";
import iconSequelize from "../../assets/sequelize.png";
import iconPostgreSQL from "../../assets/postgresql.png";
import iconNodemailer from "../../assets/nodemailer.png";
import iconSendGrid from "../../assets/sendgrid.png";
import iconCloudinary from "../../assets/cloudinary.png";
import iconOauth from "../../assets/oauth-2-sm.png";
import iconMercadoPago from "../../assets/mercadopago.png";
import iconRender from "../../assets/render.png";
import iconTailwind from "../../assets/tailwindcss.png";
import iconSweetalert2 from "../../assets/sweetalert2.png";
import iconMaps from "../../assets/gmaps.webp";
import iconLandbot from "../../assets/landbot.webp";
import iconReactChar from "../../assets/reactcharjs2.png";
import iconJest from "../../assets/jest.png";
import { useTranslation } from "react-i18next";

const Projects = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 1; // Establecer el número de tarjetas a mostrar por página

  const { t } = useTranslation("global");
  const getTechnologyIcon = (technology) => {
    switch (technology) {
      case "React":
        return iconReact;
      case "Redux":
        return iconRedux;
      case "Node":
        return node;
      case "Express":
        return iconExpress;
      case "Sequelize":
        return iconSequelize;
      case "PostgreSQL":
        return iconPostgreSQL;
      case "oauth":
        return iconOauth;
      case "Nodemailer":
        return iconNodemailer;
      case "Sendgrid":
        return iconSendGrid;
      case "Mercadopago":
        return iconMercadoPago;
      case "Render":
        return iconRender;
      case "Tailwind":
        return iconTailwind;
      case "Cloudinary":
        return iconCloudinary;
      case "Jest":
        return iconJest;
      case "Landbot":
        return iconLandbot;
      case "Sweetalert":
        return iconSweetalert2;
      case "Maps":
        return iconMaps;
      case "Reactchart":
        return iconReactChar;
      default:
        // Return a default icon or a placeholder image for unknown technologies
        return someDefaultIcon;
    }
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const cardData = [
    {
      title: "Sportiverse",
      image: [sportiverse, login, dashboard, reservations],
      description: [
        t("projects.sportiverse.description1"),
        t("projects.sportiverse.description2"),
        t("projects.sportiverse.description3"),
        t("projects.sportiverse.description4"),
        t("projects.sportiverse.description5"),
      ],
      // description: [
      //   "In this project, I've built a web application that fetches Pokémon data from an API and showcases them on the homepage.",
      //   "The app offers a user-friendly sorting and filtering system for easy Pokémon exploration.",
      //   "Additionally, users can create, edit, and delete custom characters with a validated form.",
      //   "Explore the Pokémon world and enjoy an interactive experience with this engaging web app."
      // ],
      technologies: [
        "React",
        "Redux",
        "Node",
        "Express",
        "Sequelize",
        "PostgreSQL",
        "Cloudinary",
        "oauth",
        "Mercadopago",
        "Landbot",
        "Reactchart",
        "Jest",
      ],
      deploy: "https://sportiverse-client.onrender.com/",
      repositoryBack: "https://github.com/nadiamartel/PF_BACK",
      repositoryFront: "https://github.com/SofiDubrowsky/PF-Front",
    },
    {
      title: "Pokémons",
      image: [pokemon, detailPoke, formPoke, lion],
      description: [
        t("projects.pokemon.description1"),
        t("projects.pokemon.description2"),
        t("projects.pokemon.description3"),
      ],
      // description: [
      //   "Make reservations for sports activities.",
      //   "Reservate using a React calendar and pay through Mercado Pago.",
      //   "Chatbot to assist users.",
      //   "User dashboards to manage reservations, leave reviews, and update personal information.",
      //   "Admin dashboard to offer easy management."
      // ],
      technologies: [
        "React",
        "Redux",
        "Node",
        "Express",
        "Sequelize",
        "PostgreSQL",
      ],
      repository: "https://github.com/agustinatahhan/Pi-Pokemon",
    },
    // Agrega más tarjetas según sea necesario
  ];

  const startIndex = (currentPage - 1) * cardsPerPage;
  const endIndex = startIndex + cardsPerPage;
  const displayedCards = cardData.slice(startIndex, endIndex);

  return (
    <section id="projects" className={style.bg}>
      <div className={style.grid}>
        <div className={`${style.gridIcons} ${style.span6}`}>
          <h2 className={style.title1}>{t("projects.project_title")}</h2>
          {/* <h2 className={style.span6}>Projects</h2> */}

          {displayedCards.map((card, index) => (
            <div key={index} className={style.myCard}>
              <div className={style.content}>
                <div className={style.imgCard}>
                  <div className={style.sliderFrame}>
                    <ul>
                      {card.image.map((ima, index) => (
                        <li key={index}>
                          <img className={style.img} src={ima} />
                        </li>
                      ))}
                    </ul>
                  </div>

                  {card.deploy ? (
                    <NavLink to={card.deploy} className={style.navlink}>
                      {/* {t("projects.link_deploy")} */}
                      Link to Sportiverse
                    </NavLink>
                  ) : (
                    <></>
                  )}
                  {/* {card.repositoryBack ? (
                    <NavLink to={card.repositoryBack} className={style.navlink}>
                      Link to Backend Repository
                    </NavLink>
                  ) : (
                    <></>
                  )}
                  {card.repositoryFront ? (
                    <NavLink
                      to={card.repositoryFront}
                      className={style.navlink}
                    >
                      Link to Frontend Repository
                    </NavLink>
                  ) : (
                    <></>
                  )} */}
                  {card.repository ? (
                    <NavLink to={card.repository} className={style.navlink}>
                      {/* {t("projects.link")} */}
                      Link to Repository
                    </NavLink>
                  ) : (
                    <></>
                  )}
                </div>
                <div className={style.text}>
                  <h4>{card.title}</h4>
                  <ul>
                    {card?.description.map((info, index) => (
                      <li key={index}>
                        {info}
                      </li>
                    ))}
                  </ul>

                  <div className={style.icons}>
                    {card.technologies.map((technology, techIndex) => (
                      <div key={techIndex} className={style.aboutConteiner}>
                        <img
                          className={style.aboutSectionImg}
                          src={getTechnologyIcon(technology)}
                          alt={technology}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Pagination */}
          <div className={style.pagination}>
            <button
              className={style.btnPag}
              onClick={handlePrevPage}
              disabled={currentPage === 1}
            >
              <svg
                height="16"
                width="16"
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
                viewBox="0 0 1024 1024"
              >
                <path d="M874.690416 495.52477c0 11.2973-9.168824 20.466124-20.466124 20.466124l-604.773963 0 188.083679 188.083679c7.992021 7.992021 7.992021 20.947078 0 28.939099-4.001127 3.990894-9.240455 5.996574-14.46955 5.996574-5.239328 0-10.478655-1.995447-14.479783-5.996574l-223.00912-223.00912c-3.837398-3.837398-5.996574-9.046027-5.996574-14.46955 0-5.433756 2.159176-10.632151 5.996574-14.46955l223.019353-223.029586c7.992021-7.992021 20.957311-7.992021 28.949332 0 7.992021 8.002254 7.992021 20.957311 0 28.949332l-188.073446 188.073446 604.753497 0C865.521592 475.058646 874.690416 484.217237 874.690416 495.52477z"></path>
              </svg>
              <span className={style.spanBtn}>Back</span>
            </button>
            <button
              onClick={handleNextPage}
              disabled={endIndex >= cardData.length}
              className={style.btnPag}
            ><span className={style.spanBtn}>Next</span>
              
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-arrow-narrow-right"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#000000"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M5 12l14 0" />
                <path d="M15 16l4 -4" />
                <path d="M15 8l4 4" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
