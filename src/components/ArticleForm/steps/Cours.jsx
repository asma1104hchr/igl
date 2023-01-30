import React from 'react';
import {useContext} from 'react';

import {StepperContext} from "../contexts/StepperContext"
import './style.css'


const Cours = () => {
    return(
<div class="container">
    

    <form className='subContainer'>
      <label className='label'>Titre Du Cours</label>
      <div className="f1">
          <input type="text" form='form1'  placeholder=" Search Courses" name="search" />
      </div>
    
      <label className='label'>Description du Cours</label>
      <div className="f2">
          <input type="text" form='form1'  placeholder=" Search Courses" name="search" />
      </div>
    
  

      <div className="select">
        <label className='label1'for='crs'>Quelle Catégorie Correspandent le mieu a votre cours ?</label>
        <select name='cours' id='crs'>
    
          <option>Math</option>
          <option>Physique</option>
          <option>Science</option>
          <option>Anglais</option>
          <option>Arabe</option>
          <option>Autre</option>
        </select>
        </div>


        <label className='label3'> Niveau du Cours</label>
        <div className='checkbox'>
          <input type="checkbox" name="niveau" value="debutant" id="niv" />
          <label htmlFor='niv'>Débutant</label>
          <input type="checkbox" name="niveau" value="intermediaire" id="niv" />
          <label htmlFor='niv'> Intermédiaire </label>
          <input type="checkbox" name="niveau" value="avancé" id="niv" />
          <label htmlFor='niv'> Avancé</label>
        </div>

        <div className="select">
        <label className='label1'for='crs'>Quelle Catégorie Correspandent le mieu a votre cours ?</label>
        <select name='cours' id='crs'>
    
          <option>Anglais</option>
          <option>Français</option>
          <option>Arabe</option>
          <option>Kabyle</option>
        </select>
        </div>


        <label className='label3'> Niveau du Cours</label>
        <div className='checkbox'>
          <input type="checkbox" name="duree" value="debutant" id="dur" />
          <label htmlFor='dir'>30 minutes</label>
          <input type="checkbox" name="duree" value="intermediaire" id="dur" />
          <label htmlFor='dir'> 45 minutes </label>
          <input type="checkbox" name="duree" value="avancé" id="dur" />
          <label htmlFor='dir'> 60 minutes </label>
          <input type="checkbox" name="duree" value="avancé" id="dur" />
          <label htmlFor='dir'> 90 minutes </label>
          <input type="checkbox" name="duree" value="avancé" id="dur" />
          <label htmlFor='dir'> 120 minutes </label>
        </div>



    </form>
  </div>
    
    
    );
}

export default Cours;
