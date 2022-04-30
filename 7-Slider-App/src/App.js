import './App.css';
import React, { useEffect, useState } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';
import data from './Components/data';
function App() {
  //y this state required ?? its creats variable with initial value ,,whenever value is changed component will render ..
  const [people, setPeople] = useState(data);
  //index state for changing user photot
  const [index, setIndex] = useState(0);
  return (
    <section className='section'>
      <div className='title'>
        <h2>
          {' '}
          <span>/</span> reviews{' '}
        </h2>
      </div>
    </section>
  );
}

export default App;
