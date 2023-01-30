import React from 'react';

const StepperControl = ({handleClick,currentStep,steps}) => {
    return (
        <div className='container flex justify-around mt-4 mb-8'>
            <button onClick={()=>handleClick()}
             className={`bg-green-600 text-black uppercase py-2 px-4 rounded-xl font-semibold cursor-pointer border-2 border-slate-300 hover:bg-yellow-300 hover:text-white transition duration-200 ease-in-out ${currentStep ===1 ? "opacity-50 cursoer-not-allowed":""} ` }>
                Arriere
            </button>
            <button  onClick={()=>handleClick("Suivant") }
            className=' text-black bg-green-600 uppercase py-2 px-4 rounded-xl font-semibold cursor-pointer border-2 border-slate-300 hover:bg-yellow-300 hover:text-white transition duration-200 ease-in-out'>
                {currentStep ===steps.length ? "Confirmer" : "Suivant" 
}
            </button>
   
        </div>
    );
}

export default StepperControl;
