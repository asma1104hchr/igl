import React from 'react'
import { Container,Row,Col } from 'reactstrap';
import hero2 from '../../assets/hero2.jpg'
import'./ProposSection.css'


const ProposSection = () => {
  return (
  <Container>
    
                <div className="about" id="propos">
                    <h2><b>A propos</b></h2>
                </div>
                <div className="underline0">
                </div>
        <Row>
               
                <Col lg='6' md='6'>
                    <img src={hero2} alt=" "className="w-100" />
                </Col>
            <Col lg='6' md='6'>
                <div className="cards">
                    <div className="card1">
                        <p> <span>Etudiant </span><br/> Une plateforme <br />et de nombreux cours rien que pour vous</p>
                    </div>
                    <div className="card2">
                        <p> <span>Enseignant</span><br/> Publier les<br/> articles pour faire des cours en ligne ou présentiel</p>
                    </div>
                    <div className="card3">
                        <p><span>Etudiant </span><br/> Une plateforme <br />et de nombreux cours rien que pour vous</p>
                    </div>
                </div>
            </Col>    

        </Row>
</Container>
  )
};
export default ProposSection;
