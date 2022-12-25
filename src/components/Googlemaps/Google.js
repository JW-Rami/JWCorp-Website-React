import React from "react";
import "./Google.css";

const Google = ({ langageState }) => {
  return (
    <div className="google-maps-container">
      <span>
        {langageState ? (
          <>
            Venez nous rencontrer dans nos locaux à La Défense (uniquement sur
            RDV).
          </>
        ) : (
          <>
            Come and meet us in our offices in La Défense (by appointment only).
          </>
        )}
      </span>
      <div className="google-maps-cut"></div>
      <iframe
        title="google maps"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2623.4020133445424!2d2.2475172158606496!3d48.8886752065276!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e665ee25d21b01%3A0xc15a3b519b7f243a!2sJW%20Corp!5e0!3m2!1sfr!2sfr!4v1654658142857!5m2!1sfr!2sfr"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default Google;
