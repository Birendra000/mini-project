import React from "react";

const Contact = () => {
  return (
    <div className="main-container">
      <div className="main-contact-wrapper">
        <h3 className="contact-heading">Contact Page</h3>
        <div className="contact-section">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d226170.13778731241!2d84.26580546030314!3d27.658305505192537!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3994fb37e078d531%3A0x973f22922ea702f7!2sBharatpur%2044200!5e0!3m2!1sen!2snp!4v1676903694763!5m2!1sen!2snp"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      <div className="maincontact-form">
        <form
          action="https://formspree.io/f/xdovgwze"
          method="POST"
          className="contact-form"
        >
          <div className="input-wrapper">
            <label>Name:</label>
            <input
              type="text"
              placeholder="Username"
              name="username"
              required
              autoComplete="off"
              className="form-input"
            />
          </div>
          <div className="input-wrapper">
            <label> E-mail:</label>
            <input
              type="email"
              placeholder="E-mail"
              name="email"
              required
              autoComplete="off"
              className="form-input"
            />
          </div>
          <div className="input-wrapper">
            <label> Contact:</label>
            <input
              type="text"
              placeholder="Phone no"
              name="phone number"
              autoComplete="off"
              className="form-input"
            />
          </div>
          <input type="submit" value="Submit" className="submit-button"></input>
        </form>
      </div>
    </div>
  );
};

export default Contact;
