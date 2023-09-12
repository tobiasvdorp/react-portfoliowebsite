import React, { useState } from "react";
import "../css/contact.css";
const ContactForm = () => {
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
          setStatus("Bedankt voor je bericht!");
          form.reset();
        } else {
          setStatus("Er ging iets mis, probeer het opnieuw.");
        }
      });
  };

  return (
    <div className="contact">
      <h2 className="title2">Contact.</h2>
      <h3 className="readmore">"Hello?"</h3>

      <form onSubmit={handleSubmit} className="">
        <div id="name">
          <label htmlFor="name">Naam</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div id="email">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div id="message">
          <label htmlFor="message">Bericht</label>
          <textarea id="message" name="message" required></textarea>
        </div>
        <div id="send">
          <button type="submit" className="button">
            Verzenden
          </button>
        </div>

        {status && <p>{status}</p>}
      </form>
    </div>
  );
};

export default ContactForm;
