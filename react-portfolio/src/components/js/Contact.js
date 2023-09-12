import React, { useState, useEffect } from "react";
import "../css/contact.css";
import "../css/responsive.css";
import WOW from "wowjs";
import "animate.css";

const ContactForm = () => {
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
          setStatus(
            "Message sent! I will get back to you as soon as possible."
          );
          form.reset();
        } else {
          setStatus("Something went wrong. Please try again.");
        }
      });
  };

  return (
    <div className="contact" id="contact">
      <h2 className="title2">Contact.</h2>
      <h3 className="readmore">"Hello?"</h3>

      <form onSubmit={handleSubmit} className="">
        <div className="wow animate__animated animate__flipInX">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div className="wow animate__animated animate__flipInX">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="wow animate__animated animate__flipInX">
          <label htmlFor="message">Message</label>
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
        <div id="senddiv" className="wow animate__animated animate__flipInX">
          <button type="submit" className="button">
            Send
          </button>
        </div>
        <div className="statusdiv">
          {status && (
            <p className="status animate__animated animate__fadeInLeft">
              {status}
            </p>
          )}
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
