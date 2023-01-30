import React from 'react'
import './Course.css'
import{Circle,Row,Col ,Container} from 'reactstrap'
import primaire from '../../assets/primaire.png'
import cem from '../../assets/cem.png'
import lycée from '../../assets/Lycée.png'
import send from '../../assets/Sent.png'

const Course = () => {
  return (
    <Container> 
                <div className="Abbout" id="cours">
                    <h2><b>Les Niveaux</b></h2>
                </div>
                <div className='underline'></div>
                <img src={send}  className='send'/>

        <Row>
            <Col lg='6' md='6'>
                <div className="cardy">
                    
                    <div className="cards1">
                        <div className="circle"></div>
                        <img src={lycée}/> 
                        <h2> Pour  <br/>les <br/> lycéens</h2>
                    </div>
                    
                    <div className="cards2">
                        <img src={cem}/>
                        <div class="circle"></div>
                        <h2>Classes<br/> inter- <br/>médiaires </h2>
                    </div>
                    <div className="cards3">
                        <img src={primaire}/>
                        <div class="circle"></div>
                        <h2>Les <br/> Classes<br/> primaires</h2>
                    </div>    
                </div>
            </Col>    

        </Row>
        <img src={send}  className="rotateimg180"/>

</Container>
  )
};

export default Course