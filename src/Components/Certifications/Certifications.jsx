import style from "./Certifications.module.css";
import iconEf from "../../assets/ef.png";
import iconDentist from "../../assets/dentist.jpg";
import iconJs from "../../assets/coder.png";
import { useState } from "react";

import { NavLink } from "react-router-dom";
const Certifications = () => {

  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 1;

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };
  const cardData = [
    {
      link: "",
      image: iconEf,
      title: "Henry Bootcamp",
      description: "Full Stack Developer",
    },
    {
      link: "https://res.cloudinary.com/dojqllm76/image/upload/v1690831711/agus/637fc0b6bbffda000eb97a02_osph6c.png",
      image: iconJs,
      title: "Coderhouse",
      description: "Java Script Certificate",
    },
    {
      link: "https://www.efset.org/cert/KAVHQp",
      image: iconEf,
      title: "EFSET",
      description: "English Certificate",
    },
    {
      link: "https://res.cloudinary.com/dojqllm76/image/upload/v1690832068/agus/IMG-20201125-WA0015_ijsyij.jpg",
      image: iconDentist,
      title: "Universidad Nacional de Cordoba",
      description: "Dentist Degree",
    },
  ];

  const startIndex = (currentPage - 1) * cardsPerPage;
  const endIndex = startIndex + cardsPerPage;
  const displayedCards = cardData.slice(startIndex, endIndex);
  return (
    <section id="certifications" className={style.bg}>
      <div className={style.grid}>
        <div className={`${style.cardsContainer} ${style.span6}`}>
          {displayedCards.map((card, index) => (
            <NavLink key={index} className={style.card} to={card.link}>
                <h3>{card.description}</h3>
                <img className={style.img} src={card.image} alt={card.name} />
                <h4>{card.title}</h4>
            </NavLink>
          ))}
        
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
              <span>Back</span>
            </button>
            <button
              onClick={handleNextPage}
              disabled={endIndex >= cardData.length}
              className={style.btnPag}
            >
              Next
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

export default Certifications;
