import React, {useState} from 'react'
import { Container} from 'reactstrap';
import Stepper from './Stepper'
import StepperControl  from './StepperControl'
import Prix from './steps/Prix'
import Quand from './steps/Quand'
import Cours from './steps/Cours'
import Lieu from './steps/Lieu'

import {StepperContext} from './contexts/StepperContext'
import send from '../../assets/Sent.png'
import VosAnnounce from '../Compte/VosAnnounce'

function PublierArticle() {

  const [currentStep, setCurrentStep] = useState(1);
  const[userData,setUserData]=useState('');
  const [finalData,setFinalData]=useState([])
  const steps =[
    "Cours",
    "Lieu",
    "Quand",
    "Prix",
    
  
  ];
  const displayStep=(step)=>{
    switch (step) {
      case 1:
        return <Cours/>
      case 2:
        return <Lieu/>
      case 3:
        return <Quand/>
      case 4:
        return <Prix/>
      case 5:
        return<VosAnnounce/>
      default:
    }
  }
const handleClick = (direction)=>{
  let newStep = currentStep;
  direction ==="Suivant" ? newStep ++ : newStep --;
  newStep > 0 && newStep <= steps.length && setCurrentStep(newStep) ;

}



  return (
    <section>
        <Container  className='css'>
                            
                    <div className="hero__content  ">
                      <div className="  shadow-xl rounded-2xl pb-2 bg-white">
                      <div className="container horizontal mt-20 ">
                        <Stepper
                          steps={steps}
                          currentStep={currentStep}/>
                      </div>

                      <img src={send} alt='send' className='send'/>
                      <div className='mt-15'>
                        <StepperContext.Provider value ={{userData,setUserData,finalData,setFinalData}}>
                          {displayStep(currentStep)}
                        </StepperContext.Provider>
                      </div>

                      <img src={send} alt="send" className="rotateimg180"/>

                      <StepperControl handleClick={handleClick}
                      currentStep={currentStep}
                      steps={steps}
                      />
                    </div>   
                    </div>
        </Container>
    </section>
  )
};
export default PublierArticle;