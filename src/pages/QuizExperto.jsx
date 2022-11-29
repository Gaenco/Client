import React from 'react'
import SpinningText from '../components/SpinningText'
import Quizzis5 from '../components/Quizzis5'
import reactlogo from '/src/assets/wblogo.svg'

const QuizExperto = () => {
  return (
    <>
    <div className='quiz-container'>
    <SpinningText text="  Nivel Experto  ">
  <img src={reactlogo} alt="logo react" />
</SpinningText>
<Quizzis5 />
</div>
</>
  )
}

export default QuizExperto