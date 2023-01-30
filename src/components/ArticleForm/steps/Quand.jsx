import React, { useState } from 'react';
import './style.css' 
function Quand() {

  return (
    <div className="container">
        <form className="subContainer">
        <label className='label' for='from'>les cours commence du :</label>
        <div className="f1">
          <input type="date" name='dateFrom'  min="2023-01-01" id='from' />
         </div>
         <label className='label' for='to'>Les cours se deroulera jusqu'a :</label>
        <div className="f1">
          <input type="date" name='DateTo' min="2023-01-01"   max='' id="to" />
         </div>
      
         <label className='labeljours'> Dans quels jours de la semaine Vous travaillez ?</label>
        <div className='checkbox'>
          <input type="checkbox" name="jours" value="dimanche" id="dur" />
          <label htmlFor='dir'>Dimanche</label>
          <input type="checkbox" name="jours" value="Lundi" id="dur" />
          <label htmlFor='dir'> Lundi </label>
          <input type="checkbox" name="jours" value="Mardi" id="dur" />
          <label htmlFor='dir'>Mardi </label>
          <input type="checkbox" name="jours" value="Mercredi" id="dur" />
          <label htmlFor='dir'> Mercredi </label>
          <input type="checkbox" name="jours" value="Jeudi" id="dur" />
          <label htmlFor='dir'> Jeudi </label>
          <input type="checkbox" name="jours" value="Vendredi" id="dur" />
          <label htmlFor='dir'> Vendredi </label>
          <input type="checkbox" name="jours" value="Samedi" id="dur"  />
          <label htmlFor='dir'> Samedi </label>
        </div>
        </form>

    </div>
  );
}; export default Quand;