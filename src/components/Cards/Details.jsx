import React from 'react';
import './Details.css'
import '../Compte/Compte.css'
import Header from '../header/Header';
import details from '../../assets/details.png'
import Sent from '../../assets/Sent.png'
import photoAnnonce from "../../assets/photoAnnonce.png";
import userPro from "../../assets/userPro.png"
import Footer from '../Footer/Footer'
const Details = () => {
    return (
        <div>
        <div className='head2'><Header></Header></div>
   <div className='bloc'>

<div className="holder2">
<img src={Sent} alt="Sent" id='sent'/>
<img src={details} alt="Sent" id="details" />

<h2>Vous trouvez ici que <br /> les<span>  meilleurs cours</span></h2>
</div>
    </div>



    <div className="important">
        <div className="picture">
        <h4>Nos cours > 1as >Math</h4>
        <div className="userInfo">
        <img src={userPro} alt="" id='user'/>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
        <div className='stars'>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star"></span>
        <span class="fa fa-star"></span>
        </div>
       
        
        </div>
        <h4>Haichour Asma</h4>
            <img src={photoAnnonce} alt="" id='announce' />
        </div>


        <div className="description">
        <h5>Description :</h5>
        <p>Depuis 5 ans, j'ai aidé plus de 30 élèves français en difficulté
 du collège (sixième, cinquième, quatrième, troisième)
 et lycée (seconde, première, terminale) à atteindre leurs ob
jectifs (bonne moyenne, brevet, bac, PREPA) et à reprendre confian
ce en eux.</p>
<h5>Les horaires : </h5>
<p>6h/Semaine</p>
<h5>Emplaçemnt :</h5>
<p>Bejaia</p>
<h5>Prix :</h5>
<p>500DZ/mois</p>
<button class="btn-hover color-7">Contactez-nous</button>
        </div>
    </div>
    <Footer></Footer>
    </div>
    );
}

export default Details;
