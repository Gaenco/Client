import {  Link } from "react-router-dom";

const Layout = () =>{
 return <div className="select-quiz-container">
    <nav>

          <button className="select-quiz-button"><Link to="/quizPrincipiante"> Nivel 1</Link></button>
          <button className="select-quiz-button"> <Link to="/quizAmateur">Nivel 2</Link></button>
          <button className="select-quiz-button"> <Link to="/quizIntermedio">Nivel 3</Link></button>  
          <button className="select-quiz-button"> <Link to="/quizAvanzado">Nivel 4</Link></button>
          <button className="select-quiz-button"> <Link to="/quizExperto">Nivel 5</Link></button>
    </nav>
 </div>;
}

export default Layout;