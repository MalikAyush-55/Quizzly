import Quiz from "./components/quiz/Quiz"
import  {jsQuizz}  from "./constants"


function App() {

  return (
    <>
    <Quiz questions={jsQuizz}/>
    </>
  )
}

export default App
