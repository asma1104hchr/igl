import React from 'react'
import { Container,Row,Col } from 'reactstrap';
import './HeroSection.css'
import hero from '../../assets/hero.jpg'


const HeroSection = () => {
  return (
    <section >
        <div>
            <Row>
                <Col lg='6' md='6'>
                    <div className="hero__content" id="/">
                        <h2><span>Prenez votre temps </span> et apprenez n’importe où</h2>                
                           <p>Upgrade est une plate-forme qui aide les étudiants<br /> à trouver les cours qui leur conviennent
                             
                            </p>
                          <Col className='search'>
                            <div className="searche">
                              <input type="text" form='form1'  placeholder=" Chercher un cours " name="search" />
                            </div>
                            
                          </Col>
                            <img src={hero} alt=" "className="pic" /> 
                    </div>   
                        
                    </Col>
            </Row>
        </div>
    </section>
  )
};
export default HeroSection;