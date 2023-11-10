// import style from "./Home.module.css";
import Nav from "../Nav/Nav";
import Header from "../Header/Header";
import About from "../About/About";
// import BgComputer from "../BgComputer/BgComputer";
// import BgWindow from "../BgWindow/BgWindow";
import Skills from "../Skills/Skills";
import Projects from "../Projects/Projects";
// import Certifications from "../Certifications/Certifications";
import Footer from "../Footer/Footer";
const Home = () => {
  return (
    <>
      <Nav />
      <Header />
      {/* <BgComputer/> */}
      <About />
      {/* <BgComputer /> */}
      <Skills />
      {/* <BgComputer/> */}
      <Projects />
      {/* <BgComputer/> */}
      {/* <Certifications /> */}
      <Footer />
    </>
  );
};

export default Home;
