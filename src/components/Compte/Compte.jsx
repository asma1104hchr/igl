import React from 'react';
import './Compte.css'
import profile from '../../assets/profile.png'
import Settings from '../../assets/Settings.png'
import ProPers from '../../assets/ProPers.png'
import Favorite from '../../assets/Favorite.png'
import annou from '../../assets/annou.png'
import Notification from '../../assets/Notification.png'
import {Container}from 'reactstrap';
import Header from '../header/Header';

const Compte = () => {

    return (
       
        <Container>
            <div className='head'><Header></Header></div>
          
        <div className='bloc'>
            <div className="holder">
                <div className="profile-pic-div">
                    <img src={profile} alt="" id='photo'/>
                </div>
                
                <h1 className="user">Haichour asma</h1>


                <div className="nav_list">
                    <ul className="nav_item"> 
                        <li><a href="#">Informations générales</a><img className='icon' src={ProPers} alt="" /></li>
                        <li><a href="/UserFavorites">Favorite</a><img className='icon' src={Favorite} alt="" /></li>
                        <li><a href="/UserAnnounce">Vos announce</a><img className='icon' src={annou} alt="" /></li>
                        <li><a href="/messagerie">Notification</a><img className='icon' src={Notification} alt="" /></li>
                        <div className="bar"></div>
                    </ul>
                </div>
            </div>
            <div className='holder21'>
            <h2> Vos Informations Générales </h2>
            <div className="underline2">
                </div>
            <form className='information'>
                
                <label htmlFor="nom">Nom</label>
            <input type="text" id="nom" name="nom" className='info1'
             value="HAICHOUR" readonly/>
             <br />
                <label htmlFor="prénom">Prénom</label>
            <input type="text" id="prénom" name="prénom" className='info2'
             value="Asma" readonly/>
             <br />
             <label htmlFor="date">Date de Naissance</label>
            <input type="date" id="nom" name="title" className='info3'
             value="12/01/2002" readonly/>
             <br />
             <label htmlFor="Adress">Adresse Email</label>
            <input type="text" id="Adresse" name="title" className='info4'
             value="a_haichour@estin.dz" readonly/>
             <br />
             <label htmlFor="num">Numero de tel</label>
            <input type="tel" id="num" name="nom" className='info5' value='0775199544'
             readonly/>
             </form>
            </div>
            
        </div>
        </Container>
        
    );
}

export default Compte;
