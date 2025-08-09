import React from "react";
import "./info.css";

function Info() {
  return (
    <div class ="info-container">

        {/* Values Section */}
        <div className="info-box-display" >
        

            {/* 1 Values */}
            <div className="info-box"  >
                <i class="fa-solid fa-arrow-down arrow" style={{ transform: "rotate(-45deg)" }}></i>
                <img src="images/homepage/mivalori.png" alt="Values" className="second-image" />
                <img  src="images/flowers/bg2_grey.png" alt="Values" className="first-image" />
                <p1 className="number" style={{ left: "35%" }}>01</p1>
                <h1 className="title">Mi - VALORI</h1>
                <p1 className="subtitle">
                Promozione sociale, valorizzazione artistica e riqualificazione sono i 
                valori pulsanti che hanno guidato l’associazione nella sua crescita, consolidandone 
                l’impatto e la forza di innovazione.
                </p1>
            </div>

            {/* 2 Values */}
            <div className="info-box" style={{ color:"white" , height:"1400px", background: "black" }} >
            
                <img src="images/homepage/bannerValues.png" alt="Values" className="bannerImage" />
                <p className="bannerText">L’arte e la musica diventano per noi espressioni e 
                    suoni che trasformano in maniera multiforme lo spazio dei nostri eventi. 
                    Attraverso l’arte, Migarden si impegna a trasformare gli spazi urbani 
                    trascurati in ambienti culturalmente arricchenti, contribuendo così al 
                    rinnovamento delle città e al benessere della comunità locale. Le 
                    collaborazioni artistiche contribuiscono inoltre ad arricchire 
                    l’atmosfera dell’evento, offrendo al pubblico la possibilità di 
                    entrare in contatto con forme d’arte diverse e stimolanti.
                   
                </p>
                <p className="bannerText" style={{top:"950px"}}>
                    Le location scelte da Migarden vengono trasformate in contesti 
                    unici e suggestivi, che siano parchi, spazi abbandonati o università. 
                    Questo avviene attraverso installazioni che sfruttano strumenti 
                    tecnologici avanzati come laser, schermi, proiezioni e strisce LED, 
                    oppure attraverso l’invasione di spazi chiusi con vegetazione 
                    rigogliosa. 
                </p>
                <img src="images/homepage/bannerValues2.png" alt="Values" className="third-image" style={{top:"1350px"}}  /> 

                
            </div>
        </div>

        {/* Archive Section */}
        <div className="info-box-display" >
            

            {/* 1 Archive */}
            <div className="info-box" style={{ color: "white" }} >
                <i class="fa-solid fa-arrow-down arrow" style={{ transform: "rotate(-45deg)" }}></i>
                <img  src="images/homepage/miarchive.png" alt="Values" className="first-image" />
                <p1 className="number " >02</p1>
                <h1 className="title">Mi - ARCHIVE</h1>
                <p1 className="subtitle">
                    Gli ospiti e i collaboratori dei nostri eventi sono il
                    cuore vibrante della nostra missione: performer, dj, musicisti,
                    visual artist, designer e creativi hanno reso unica ciascuna 
                    occasione di unione e coesione artistica. 
                </p1>
            </div>
            
            {/* 2 Archive */}
            <div className="info-box" style={{ color: "white", height: "1400px", background:"black" }} >
                <img src="images/homepage/bannerArchive2.png" alt="Values" className="third-image"  /> 
                <img src="images/homepage/bannerArchive.png" alt="Values" className="bannerImage" style={{width:"47%", top:"335px"}}        />

                <p className="bannerText" style={{ top: "70px" }}>
                    Dal suo inizio nel parco di Lea Garofalo, fino alla collaborazione con Tempio 
                    Del Futuro Perduto e il parco di Monte Stella, gli spazi stessi sono stati il 
                    principale protagonista del savoir faire di Migarn
                </p>
                <p className="bannerText" style={{ top: "455px" }}>
                    All’interno di questi spazi 
                    uno dei focus principali del collettivo è stato quello di dare spazio ad artisti
                     emergenti che si esprimessero su più campi artistici, primo fra tutti quello
                      musicale con un focus sulla musica elettronica/techno, coadiuvato 
                      dall’intersezione di performance e allestimenti che hanno toccato 
                      qualsiasi ambito artisticoden.
                </p>
                
       
                <p className="bannerText"style={{ top: "1020px" }}>
                    live painting, esposizioni di design, performance di danza, sfilate, installazioni e progetti fotografici.
                </p>
                <img src="images/homepage/bannerArchive3.png" alt="Values" className="third-image" style={{top:"1350px"}}  /> 

            </div>
        </div>

        {/* Studio Section */}
        <div className="info-box-display">

            {/* 1. Studio */}
            <div className="info-box" >
                <i class="fa-solid fa-arrow-down arrow" style={{ transform: "rotate(-45deg)" }}></i>
                <img  src="images/flowers/bg2_grey.png" alt="Values" className="first-image" />
                <img src="images/homepage/mistudio.png" alt="Values" className="second-image" />

                <p1 className="number" style={{ left: "35%" }}>03</p1>
                <h1 className="title">Mi - STUDIOS</h1>
                <p1 className="subtitle">
                Migarden Studio è un vero e proprio fornitore di servizi legati alla produzione e 
                curatela di eventi culturali.  La nostra volontà è mettere al servizio di terzi le
                competenze ed esperienze del nostro Team, garantendo un ampio spettro di servizi e 
                ambiti di intervento.
                </p1>
            </div>
            
            {/* 2 Studio */}
            <div className="info-box" style={ { color: "white" , background: "black", height: "780px" } } >
                <img className="bannerImage" src="images/homepage/bannerStudio.png" alt="Values" />
                <p className="bannerText">
                Siamo disponibili ad offrire servizi quali produzione e allestimento per mostre d’arte ed 
                eventi culturali, light & set design per stage ed installazioni, dj set, 
                progettazione di nuovi media e consulenze per l’organizzazione di eventi.<br></br>
                Scopri la soluzione che fa più al tuo caso nella nostra sezione studio dedicata!
                </p>
            </div>
            
        </div>
    </div>
  );
}

export default Info;