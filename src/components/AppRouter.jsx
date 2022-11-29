import { Routes, Route } from "react-router-dom";
import { Layout, QuizPrincipiante, QuizAmateur, QuizIntermedio, QuizAvanzado, QuizExperto, PostForm } from '../pages';
import HomePage from "./HomePage";
function AppRouter() {
    return (
        <Routes>
            <Route path="/" element={<HomePage />}> </Route>
            <Route path="/SelectQuiz" element={<Layout />} />
            <Route path="/quizPrincipiante" element={<QuizPrincipiante />} />
            <Route path="/quizAmateur" element={<QuizAmateur />} />
            <Route path="/quizIntermedio" element={<QuizIntermedio />} />
            <Route path="/quizAvanzado" element={<QuizAvanzado />} />
            <Route path="/quizExperto" element={<QuizExperto />} />
            <Route path="/form" element={<PostForm />} />

        </Routes>
    )
}

export default AppRouter;