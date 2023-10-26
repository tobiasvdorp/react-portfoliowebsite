import React, { useState } from "react";
import "../css/contact.css";
import "../css/responsive.css";
import WOW from "wowjs";
import "animate.css";
import Socials from "./Socials";
import { FaGripLines } from "react-icons/fa";
import { TbArrowsCross } from "react-icons/tb";
import { useTranslation } from "react-i18next";

const ContactForm = () => {
  const { t } = useTranslation();
  const [isDisordered, setDisordered] = useState(false);

  const toggleDisordered = () => setDisordered(!isDisordered);

  const wow = new WOW.WOW();
  wow.init();
  const [status, setStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    fetch("https://formspree.io/f/xknlznnl", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: form.name.value,
        email: form.email.value,
        message: form.message.value,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.ok) {
          setStatus(t("messageSent"));

          form.reset();
        } else {
          setStatus("Something went wrong. Please try again.");
        }
      });
  };

  return (
    <div className="contact" id="contact">
      <div className="flex">
        <h2 className="title2">{t("getInTouch")}</h2>
        <button className="filter-icon button">
          {isDisordered ? (
            <TbArrowsCross onClick={toggleDisordered} />
          ) : (
            <FaGripLines onClick={toggleDisordered} />
          )}
        </button>
      </div>
      <h3 className="readmore">{t("friendRequestAccepted")}</h3>
      <form onSubmit={handleSubmit} className="">
        <div
          className={`name animate__animated  ${
            isDisordered
              ? "disordered animate__bounceInDown animate__slower"
              : "wow  animate__flipInX "
          }`}
        >
          <label htmlFor="name">{t("nameLabel")}</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div
          className={`email animate__animated  ${
            isDisordered
              ? "disordered animate__bounceInDown animate__slow"
              : "wow animate__flipInX "
          }`}
        >
          <label htmlFor="email">{t("emailLabel")}</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div
          className={`message animate__animated  ${
            isDisordered
              ? "disordered animate__bounceInDown animate__fast"
              : "wow  animate__flipInX "
          }`}
        >
          <label htmlFor="message">{t("messageLabel")}</label>
          <textarea
            id="message"
            name="message"
            required
            onInput={function (e) {
              const target = e.target;
              target.style.height = "";
              target.style.height = `${target.scrollHeight}px`;
            }}
          ></textarea>
        </div>
        <div
          id="senddiv"
          className={` animate__animated ${
            isDisordered
              ? "disordered animate__faster"
              : "wow animate__bounceInDown animate__flipInX"
          }`}
        >
          <button type="submit" className="button">
            {t("sendButton")}
          </button>
        </div>
        <div className="statusdiv">
          {status && (
            <p className="status animate__animated animate__fadeInLeft">
              {status === "Something went wrong. Please try again."
                ? t("somethingWentWrong")
                : status}
            </p>
          )}
        </div>
      </form>
      <h3 className="readmore" id="findme">
        {t("orFindMeOn")}
      </h3>

      <Socials />
    </div>
  );
};

export default ContactForm;
