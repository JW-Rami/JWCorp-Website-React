import React from "react";
import "./Cta.css";
import { useLocation, useNavigate } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Cta = ({ langageState }) => {
  return (
    <div className="cta-component">
      <div className="cta-wrap">
        <p className="cta-text" id="cta-contact-us">
          {langageState ? (
            <>
              <strong> Vous souhaitez en savoir plus ?</strong> <br />{" "}
              Envoyez-nous un message afin de commencer à discuter autour de
              votre projet.
            </>
          ) : (
            <>
              <strong>Would you like to know more?</strong> <br /> Send us a
              message to start discussing around your project.
            </>
          )}
        </p>
        <div className="cta-wrap-button">
          <HashLink
            smooth
            to={"/#form"}
            className="cta-button"
            id="cta-contact-us"
          >
            {langageState ? <>Contactez-nous</>: <>Contact us</>}
            
          </HashLink>
        </div>
      </div>
    </div>
  );
};
export default Cta;
