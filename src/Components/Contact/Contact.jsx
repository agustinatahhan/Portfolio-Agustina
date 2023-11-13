import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import style from "./Contact.module.css";
import Confetti from 'react-dom-confetti';

const Contact = () => {
  const { t } = useTranslation("global");

  useEffect(() => {
    AOS.init();
  }, []);

  const form = useRef();

  const [showConfetti, setShowConfetti] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_bspw2kn', 'template_1xikv5h', form.current, 'H8am2fnuPnEQYGeGH')
      .then((result) => {
        console.log(result.text);
        clearForm();
        setShowConfetti(true);
      }, (error) => {
        console.log(error.text);
      });
  };

  const clearForm = () => {
    form.current.user_name.value = '';
    form.current.user_email.value = '';
    form.current.message.value = '';
  };

  const confettiConfig = {
    particleCount: 100,
    spread: 70,
    origin: { y: 0.6 }
  };

  return (
    <section
      className={`min-vh-100 d-flex align-items-center justify-content-center ${style.formContainer}`}
    >
      <div className={`container p-4 rounded mt-5 ${style.contentWidth}`}>
        <div className={`mb-4`}>
          <h3 className="fw-bold display-4 text-start text-dark mt-5">{t("contact.title")}</h3>
          <p className="text-start fs-5 text-dark mt-3">{t("contact.description")}</p>
        </div>
        <form ref={form} onSubmit={sendEmail} className={`p-4 rounded mt-5 ${style.form}`}>
          <div className="mb-3">
            <input
              type="text"
              name="user_name"
              className="form-control"
              placeholder={t("contact.name")}
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="email"
              name="user_email"
              className="form-control"
              placeholder={t("contact.email")}
              required
            />
          </div>
          <div className="mb-3">
            <textarea
                name="message"
              className="form-control"
              rows="3"
              placeholder={t("contact.message")}
              required
            />
          </div>
          <div className="d-grid gap-2 col-6 mx-auto">
            <button type="submit" value="Send" className="btn btn-light">
              {t("contact.send")}
            </button>
          </div>
        </form>
        <Confetti active={showConfetti} config={confettiConfig} />

      </div>
    </section>
  );
};

export default Contact;