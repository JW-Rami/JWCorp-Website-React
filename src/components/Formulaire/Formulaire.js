import React, { useState } from "react";
import "./Formulaire.css";
import { useForm } from "react-hook-form";
import { db } from "../../firebaseConfig";
import { collection, addDoc } from "firebase/firestore/lite";

function Formulaire({ langageState }) {
  const [isFormulaireSent, setIsFormulaireSent] = useState(false);
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      message: "",
    },
  });

  const timerFormulaireMessage = () => {
    setIsFormulaireSent(true);
    setTimeout(() => {
      setIsFormulaireSent(false);
    }, 6000);
  };

  var collectionUser = collection(db, "JW Corp Beta Live");
  function onSubmit(data) {
    console.log(data);
    addDoc(collectionUser, {
      email: `${data.email}`,
      message: `${data.message}`,
    });
    console.log("c'est envoyé");
    reset();
    console.log(" c'est reset");
    timerFormulaireMessage();
  }

  return (
    <>
      <section id="form" className="form-cta-container">
        <section className="cta-form">
          <div className="line-animation-top-container">
            <div className="line-animation-top" id="line-animation"></div>
          </div>
          <div className="cta-form-paragraph" id="cta-form-text">
            <div className="text-cta-form text-cta-form-responsiv1">
              {langageState ? (
                <>
                  Vous souhaitez prendre contact ? Vous avez un projet
                  Blockchain, un besoin d'accompagnement, de développement ? Un
                  retour à nous faire ?
                </>
              ) : (
                <>
                  Do you want to get in touch? You have a project Blockchain
                  project, a need for support or development? A feedback to us ?
                </>
              )}
            </div>
            <div className="text-cta-form">
              {langageState ? (
                <>
                  Laissez-nous votre message nous reviendrons vers vous au plus
                  vite !
                </>
              ) : (
                <>
                  Leave us your message and we will get back to you as soon as
                  possible !
                </>
              )}
            </div>
          </div>
          <div className="line-animation-bottom-container">
            <div className="line-animation-bottom"></div>
          </div>
        </section>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="title-container">
            <h4>CONTACT</h4>
          </div>
          <div className="mail-container">
            <label className="label-mail">
              <div className="text-label-mail">Email</div>
              <div className="mail-input">
                <input
                  type="text"
                  name="email"
                  {...register("email", {
                    required: true,
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: " Ce format de mail n'est pas valide.",
                    },
                  })}
                />
              </div>
              {errors.email && (
                <span className="error-message">
                  {langageState ? (
                    <>Votre mail est requis pour l'envoi du formulaire</>
                  ) : (
                    <>Your email is required to send the form</>
                  )}
                </span>
              )}
              {errors.email?.type == "pattern" && (
                <span className="error-message">{errors.email.message}</span>
              )}
            </label>
          </div>
          <div className="space-container"></div>
          <div className="message-container">
            <label className="label-message">
              <div className="text-label-message">
                {langageState ? <>Votre message</> : <>Your message</>}
              </div>
              <div className="message-input">
                {langageState ? (
                  <>
                    <textarea
                      name="message"
                      {...register("message", {
                        required: true,
                        maxLength: {
                          value: 1000,
                          message:
                            "Votre message ne peut contenir que 1000 caractères maximum.",
                        },
                        minLength: {
                          value: 140,
                          message:
                            "Votre message doit contenir 140 caractères minimum.",
                        },
                      })}
                    ></textarea>
                  </>
                ) : (
                  <>
                    <textarea
                      name="message"
                      {...register("message", {
                        required: true,
                        maxLength: {
                          value: 1000,
                          message:
                            "Your message can only contain a maximum of 1000 characters.",
                        },
                        minLength: {
                          value: 140,
                          message:
                            "Your message must be at least 140 characters long.",
                        },
                      })}
                    ></textarea>
                  </>
                )}

                {errors.message?.type == "maxLength" && (
                  <span className="error-message">
                    {errors.message.message}
                  </span>
                )}
                {errors.message?.type == "minLength" && (
                  <span className="error-message">
                    {errors.message.message}
                  </span>
                )}
              </div>
            </label>
          </div>
          <div className="button-container">
            <div>
              <button className="submit-button" type="submit">
                {langageState ? <>ENVOYER</> : <>SEND</>}
              </button>
            </div>
          </div>
        </form>
      </section>
      <div
        className={
          isFormulaireSent
            ? "validation-message-container"
            : "validation-message-disapear"
        }
      >
        <div className="validation-message-text">
          {langageState ? (
            <>Votre formulaire a bien été envoyé !</>
          ) : (
            <>Your form has been sent!</>
          )}
        </div>
      </div>
    </>
  );
}

export default Formulaire;
