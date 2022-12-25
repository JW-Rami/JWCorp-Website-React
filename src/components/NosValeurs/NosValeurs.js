import React from "react";
import "./NosValeurs.css";
import { TypeAnimation } from "react-type-animation";
import GreyParagraph from "./UIelement/GreyParagraph";

function NosValeurs({ langageState }) {
  return (
    <section className="bloc-nos-valeurs">
      <div className="nos-valeurs">
        <div>
          <h3 className="nos-valeurs-title">
            {langageState ? <>Nos valeurs</> : <>Our values</>}
            </h3>
        </div>
        <div className="bloc-typed-nos-valeurs">
          <div className="bloc-vide-nos-valeurs"></div>
          <h6 className="typed-nos-valeurs">
            {langageState ?
          <>
          Parlons 
          </>
          :
          <>
          Let's talk about 
          </>  
          }
            
            <span>
              {langageState ? (
                <>
                  <TypeAnimation
                    sequence={[
                      " Bitcoin",
                      1000,
                      " transformation numérique",
                      1500,
                      " blockchain ",
                      1000,
                      " smart-contracts",
                      1000,
                    ]}
                    cursor={true}
                    repeat={Infinity}
                  />
                </>
              ) : (
                <>
                  <TypeAnimation
                    sequence={[
                      " Bitcoin",
                      1000,
                      " digital transformation",
                      1500,
                      " blockchain ",
                      1000,
                      " smart-contracts",
                      1000,
                    ]}
                    cursor={true}
                    repeat={Infinity}
                  />
                </>
              )}
            </span>
          </h6>
        </div>

        <div className="nos-valeurs-paragraphe">
          <GreyParagraph>
            {langageState ? (
              <>
                Véritables passionnés, nous construisons nos compétences autour
                de la Blockchain depuis 2017. La désintermédiation des services
                financiers, la décentralisation de la monnaie, une gouvernance
                "trustless", des règles publiques et vérifiables par tous sont
                les notions qui nous ont poussés à faire de cette passion notre
                métier, notre sujet de prédilection. Une nouvelle économie
                numérique se bâtit aujourd'hui, nous avons la volonté de
                participer activement à sa réalisation c'est pourquoi depuis le
                <strong> 04/03/2021</strong> nous avons lancer la JW Corp.
              </>
            ) : (
              <>
                True enthusiasts, we have been building our skills around
                Blockchain since 2017. Disintermediation of financial services,
                decentralization of money, "trustless" governance, public rules
                and verifiable by all are the notions that pushed us to make
                this passion our job, our favorite subject. A new digital
                economy is being built today, we have the will to actively
                participate in its realization that's why since{" "}
                <strong>04/03/2021</strong> we launched the JW Corp.
              </>
            )}
          </GreyParagraph>
        </div>
      </div>
    </section>
  );
}

export default NosValeurs;
