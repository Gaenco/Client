import React from 'react'
import SpinningText from '../components/SpinningText'
import Quizzis2 from '../components/Quizzis2'
import reactlogo from '/src/assets/wblogo.svg'

const QuizAmateur = () => {
  return (
    <> <div className='quiz-container'>
        <SpinningText text="  Nivel Amateur ">
      <img src={reactlogo} alt="logo react" />
    </SpinningText>
    <Quizzis2 />
    
    </div>
    
    </>
  )
}

export default QuizAmateur