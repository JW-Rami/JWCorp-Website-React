import React, { useState } from "react";
import "./Navbar.css";
import "../../assets/fonts/Lato-Black.ttf";
import jwblanc from "../../assets/logoJWCorp/jwlogosolutionblanc.svg";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

function Navbar({ handlingLangage, langageState }) {
  const [isClick, setIsClick] = useState(false);
  const handleClick = () => {
    setIsClick(!isClick);
  };

  return (
    <>
      <section className="component-navbar">
        <div className="navbar-logo-container">
          <Link to="/">
            <img src={jwblanc} alt="JW Corp logo blanc" />
          </Link>
        </div>
        <div className="switch-langage-container">
          <div>FR/EN  </div>
          <div>
            <label className="switch">
              <input type="checkbox" onChange={handlingLangage} />
              <span className="slider round"></span>
            </label>
          </div>
        </div>
        <div className="navbar-container">
          <div className="nav-container">
            <nav className={isClick ? "navbar-active" : "navbar"}>
              <div className="navbar-list-container">
                <ul className="navbar-list">
                  <li className={isClick ? "li1" : "li1"}>
                    <Link to="/">{langageState ? "Accueil" : "Home"}</Link>
                  </li>
                  <li className={isClick ? "li2" : "li1"}>
                    <HashLink to="/Services">
                      {langageState ? <>Nos services</> : <>Our Services</>}
                    </HashLink>
                  </li>
                  <li className={isClick ? "li3" : "li1"}>
                    <HashLink to="/#form">Contact</HashLink>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
          <div></div>
          {/* <div className="switch-langage-container">
            FR/EN  
            <label className="switch">
              <input type="checkbox" onChange={handlingLangage} />
              <span className="slider round"></span>
            </label>
          </div> */}
          <div className="burger">
            <a onClick={handleClick}>
              <span className={isClick ? "span span1-active" : "span"}></span>
              <span className={isClick ? "span span2-active" : "span"}></span>
              <span className={isClick ? "span span3-active" : "span"}></span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
export default Navbar;
