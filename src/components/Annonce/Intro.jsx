import React from 'react';
import './Intro.css'
import '../Compte/Compte.css'
import Header from '../header/Header';
import details from '../../assets/details.png'
import Sent from '../../assets/Sent.png'


const Intro = () => {
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
    </div>
    );
    }
export default Intro;