import React from "react";

const GreyParagraph = ({ children }) => {
  const paragraphStyle =  {
    display: "block",
    justifyContent: "center",
    textAlign: "justify",
    fontSize: "1em",
    padding: "5%",
    width: "40vw",
    fontWeight: "400",
    fontFamily: 'PT Serif',
    lineHeight: "30.24px",
    color: "#6f6f6f", 
    /* Recréer composant après merge pour la couleur des paragraphes de tout le site */
 };
  return <p style={paragraphStyle}>{children}</p>;
};

export default GreyParagraph;
