import './App.css';
import List from './Components/List';
import {data} from './Components/data'
import { useState } from 'react';
function App() {
  const [people, setPeople]= useState(data);

  const hanlechange = ()=>{
    setPeople([])
    
  }
  
  return (
    <main>
      <section className='container'>
        <h3 >{people.length}  birthDays today </h3>
        <List people={people}/>
        <button
          type='button'
          className='btn btn-secondary'
          onClick={hanlechange}>
          Clear all
        </button>
      </section>
    </main>
  );
}

export default App;
