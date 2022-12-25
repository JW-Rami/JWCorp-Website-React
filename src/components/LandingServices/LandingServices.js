import React from "react";
import "./LandingServices.css";

function LandingServices({ langageState }) {
  return (
    <section className="landing-service">
      <div className="landing-service-title-container">
        <h1 className="landing-service-title">
          {langageState ? <>NOS SERVICES</> : <>OUR SERVICES</>}
        </h1>
      </div>
    </section>
  );
}

export default LandingServices;
