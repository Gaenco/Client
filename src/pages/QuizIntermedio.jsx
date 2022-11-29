import React from 'react'
import SpinningText from '../components/SpinningText'
import Quizzis3 from '../components/Quizzis3'
import reactlogo from '/src/assets/wblogo.svg'

const QuizIntermedio = () => {
  return (
    <>
    <div className='quiz-container'>
    <SpinningText text="  Intermedio  ">
  <img src={reactlogo} alt="logo react" />
</SpinningText>
<Quizzis3 />
</div>
</>
  )
}

export default QuizIntermedio