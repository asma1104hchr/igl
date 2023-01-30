
import './VosAnnounce.css'
import React from 'react';
import './Favorite.css';
import './Compte.css';
import profile from '../../assets/profile.png';
import Settings from '../../assets/Settings.png';
import ProPers from '../../assets/ProPers.png';
import Favori from '../../assets/Favorite.png';
import Notification from '../../assets/Notification.png';
import {Col,Row,Container}from 'reactstrap';
import Cards from '../Cards/Cards'
import Header from '../header/Header'
import annou from '../../assets/annou.png'






const VosAnnounce = () => {
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
                        <li><a href="/UserInformation">Informations générales</a><img className='icon' src={ProPers} alt="" /></li>
                        <li><a href="/UserFavorites">Favorites</a><img className='icon' src={Favori} alt="" /></li>
                        <li><a href="#">Vos announces</a><img className='icon' src={annou} alt="" /></li>
                        <li><a href="#">Notification</a><img className='icon' src={Notification} alt="" /></li>
                        <div className="bar3"></div>
                    </ul>
                </div>
            </div>
            <div className='holder21'>
            <h2> vos Announce </h2>
            <div className="underline3">
                </div>
                <div className='colom'>
                    <Cards></Cards>
                <Cards></Cards>
                <Cards></Cards>
                <Cards></Cards>
                </div>
                <a href="/announce"><button className="btn-hover color-7">Ajouter Announce</button></a>

            </div>
            
        </div>
        </Container>
    );
}

export default VosAnnounce;
