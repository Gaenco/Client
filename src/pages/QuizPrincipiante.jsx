import React from 'react'
import SpinningText from '../components/SpinningText'
import Quizzis from '../components/Quizzis'
import reactlogo from '/src/assets/wblogo.svg'

const QuizPrincipiante = () => {
  return (
    <>
    <div className='quiz-container'>
    <SpinningText text="  Nivel Principiante  ">
  <img src={reactlogo} alt="logo react" />
</SpinningText>
<Quizzis />
</div>
</>
  )
}

export default QuizPrincipiante