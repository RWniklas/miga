import React from "react";
import "./about.css"; // External styles

function About() {
  return (
    <div className="about-container">
      {/* Left Section */}
      <div className="about-left">
        <h2 className="about-title"><i class="fa-solid fa-arrow-down" style={{ transform: "rotate(-45deg)" }}></i><b>Mission</b></h2>
        <p className="mission-description">
        La missione è quella di creare un’esperienza coinvolgente e multiforme che combini 
        intrattenimento e approfondimenti culturali attraverso musica, esposizioni artistiche, 
        attività e performance, con il costante impegno nel restituire vita ai luoghi trascurati 
        della città per trasformarli in ambienti vibranti e culturalmente arricchenti.
        </p>
        <button className="about-button">SEE OUR SERVICES</button>
      </div>

      {/* Right Section */}
      <div className="about-right">
        <h3 className="founded-subtitle">about</h3>
        <h1 className="about-title"><b>Fondata nel 2021</b></h1>
        <p className="founded-text">
          <b>Migarden</b> è un’associazione di promozione sociale che si dedica 
          all'organizzazione e alla promozione di eventi culturali dinamici e 
          innovativi, progettati per riappropriarsi socialmente e attivamente degli 
          spazi naturali all'interno di contesti urbani.
          <br></br>
          L’attività principale della <b>associazione</b> è stata la produzione
           e l’organizzazione di <b>eventi culturali</b>, mezzo di 
           propagazione del nostro <b>impegno sociale</b>, culturale 
           e artistico che ci ha permesso di <b>collaborare</b> ed 
           entrare in contatto con importanti luoghi, persone e istituzioni del
            territorio di Milano e non solo.
          
        </p>
      
      </div>
    </div>
  );
}

export default About;