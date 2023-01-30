import React from 'react';
import './Favorite.css';
import './Compte.css';
import profile from '../../assets/profile.png';
import ProPers from '../../assets/ProPers.png';
import Favori from '../../assets/Favorite.png';
import Notification from '../../assets/Notification.png';
import {Col,Row,Container}from 'reactstrap';
import Cards from '../Cards/Cards'
import Header from '../header/Header'
import annou from '../../assets/annou.png'

const Favorite = () => {
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
                   <li><a href="#">Favorite</a><img className='icon' src={Favori} alt="" /></li>
                   <li><a href="/UserAnnounce">Vos announce</a><img className='icon' src={annou} alt="" /></li>
                   <li><a href="#">Notification</a><img className='icon' src={Notification} alt="" /></li>
                   <div className="bar2"></div>
               </ul>
           </div>
       </div>
       <div className='holder21'>
       <h2> vos cours préférés </h2>
       <div className="underline3">
           </div>
           
               <div className='column'>
               <Cards></Cards>
               
               </div>
           
       
       </div>
       
   </div>

   </Container>
   
    );
}

export default Favorite;
