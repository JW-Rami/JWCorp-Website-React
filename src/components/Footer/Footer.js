import React from "react";
import "./Footer.css";
import logo from "../../assets/logoJWCorp/jwlogosolutionblanc.svg";


const Footer = ({langageState}) => {
  return (
    <div className="footer-component">
      <div className="footer-container-1">
        <div className="footer-img-wrap">
          <a href="/#">
            <img src={logo} alt="logo jwcorp" />
          </a>
          <div className="footer-social-wrap">
            <a href="https://twitter.com/jwcorp_" target="_blank">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"/></svg>
            </a>
            <a href="https://www.linkedin.com/company/jwcorp/" target="_blank">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"/></svg>
            </a>
          </div>
        </div>
      </div>
      <div className="footer-container-2">
        <div className="footer-addresse-wrap">
          <p>
            Tour CB21 - La Défense <br />
            16 Place de l'iris <br />
            92400 Courbevoie, France <br />
          </p>
          <span>
            © 2022 <a href="/#">JW Corp</a>. All rights reserved
          </span>
        </div>
      </div>
      <div className="footer-container-3">
        <div className="footer-3-cut"></div>
        <div className="footer-tel-wrap">
          <span>
            {langageState ? <>Tél:</> : <>Phone:</>}
            <a href="tel:06 18 28 62 67"> 06 18 28 62 67 </a>/
            <a href="tel:07 70 07 84 84"> 07 70 07 84 84</a>
          </span>
          <span>
            Email:
            <a href="mailto: contact@jwcorp.fr"> contact@jwcorp.fr</a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
