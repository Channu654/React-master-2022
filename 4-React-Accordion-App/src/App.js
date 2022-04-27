import { useState } from 'react';
import './App.css';
import data from './Components/Data';
import Question from './Components/Question';

function App() {
  const [questions, setQuestions] = useState(data);
  console.log('data:', data);

  return (
    <>
      <main>
        <h1> quetions and aswers </h1>
        {data.map((questions) => {
          return <Question key={questions.id} {...questions} />;
        })}
      </main>
    </>
  );
}

export default App;
