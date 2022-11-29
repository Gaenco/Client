import React from 'react'
import SpinningText from '../components/SpinningText'
import Quizzis4 from '../components/Quizzis4'
import reactlogo from '/src/assets/wblogo.svg'

const QuizAvanzado = () => {
  return (
    <>
    <div className='quiz-container'>
    <SpinningText text="  Nivel Avanzado  ">
  <img src={reactlogo} alt="logo react" />
</SpinningText>
<Quizzis4 />
</div>
</>
  )
}

export default QuizAvanzado