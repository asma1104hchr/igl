import React from 'react';
import './style.css';
const Prix = () => {
    return (
        <div className='container'>
            <form  className="subContainerPrix">
            <label className='label' for='webcam'>Prix pour un cours sur webcam</label>
            <div className="prix">
                <input type="number"   placeholder="DZ" name="webcam" id="webcam" step="5" min="200" />
            </div>
            <label className='label' for='présentiel'>Prix pour un cours Présentiel</label>
            <div className="prix">
                <input type="number"  placeholder="DZ" name="présentiel" id='présentiel' step="5" min="200"/>
            </div>
            <label className='label' for='privée'>Prix pour un cours chez l'éleve</label>
            <div className="prix">
                <input type="number"  placeholder="DZ" name="privée" id='privée'step="5" min="200" />
            </div>


            </form>
            
        </div>
    );
}

export default Prix;
