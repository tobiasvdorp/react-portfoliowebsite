import React, { useState, useEffect } from "react";
import "../css/contact.css";
import WOW from "wowjs";
import "animate.css";

const ContactForm = () => {
  const wow = new WOW.WOW();
  wow.init();
  const [status, setStatus] = useState("");
  const [textAreaHeight, setTextAreaHeight] = useState("120px"); // beginhoogte

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
          setStatus("Bedankt voor je bericht!");
          form.reset();
        } else {
          setStatus("Er ging iets mis, probeer het opnieuw.");
        }
      });
  };
  useEffect(() => {
    const textArea = document.getElementById("message");
    setTextAreaHeight(`${textArea.scrollHeight}px`);
  }, []);

  const handleTextAreaInput = (e) => {
    const textArea = e.target;
    textArea.style.height = "auto";
    setTextAreaHeight(`${textArea.scrollHeight}px`);
  };

  return (
    <div className="contact">
      <h2 className="title2">Contact.</h2>
      <h3 className="readmore">"Hello?"</h3>

      <form onSubmit={handleSubmit} className="">
        <div id="name" className="wow animate__animated animate__flipInX">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div id="email" className="wow animate__animated animate__flipInX">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div id="message" className="wow animate__animated animate__flipInX">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            required
            style={{ height: textAreaHeight }}
            onInput={handleTextAreaInput}
          ></textarea>
        </div>
        <div id="send" className="wow animate__animated animate__flipInX">
          <button type="submit" className="button">
            Send
          </button>
        </div>

        {status && <p>{status}</p>}
      </form>
    </div>
  );
};

export default ContactForm;
