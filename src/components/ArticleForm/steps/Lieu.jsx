import React from 'react';
import './style.css'

const Lieu = () => {
    return (
        <div className='container'>
            <form className='subContainer'>
            <div className='checkboxx'>
            <label For='présentiel' className='labellieu'>Je donne cours a mon domicile ou mon studio</label>
          <input type="checkbox" name="lieu" value="présentiel" id="préseniel" />
          
          <br />
          <label For='privée' className='labellieu'> Je me deplace au domicile de l'éleve </label>
          <input type="checkbox" name="lieu" value="privée" id="privée" /> 
          <br />
          <label for='webcam' className='labellieu'>Je donne cours par webcam</label>
          <input type="checkbox" name="lieu" value="webcam" id="webcam" />
         
        </div>
        </form>
        </div>
    );
}

export default Lieu;

