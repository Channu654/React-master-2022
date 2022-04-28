import './App.css';
import React, { useEffect, useState } from 'react';
import { FaAngleDoubleRight } from 'react-icons/fa';

// url  https://course-api.com/react-tabs-project

function App() {
  const [loading, setLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [value, setValue] = useState(0);
  //1.fetching
  const fetchjobs = async () => {
    const res = await fetch('https://course-api.com/react-tabs-project');
    const newJobs = await res.json();
    //2.
    setJobs(newJobs);
    //3.
    setLoading(false);
  };
  //4.
  useEffect(() => {
    fetchjobs();
  }, []);
  //5.
  if (loading) {
    return (
      <section className='loading-section'>
        <h1>Loading.....</h1>
      </section>
    );
  }
  //6.destructuring ,,,
  const { company, title, duties, dates } = jobs[value];

  return (
    //7.
    <section className='section'>
      <div className='title'>
        <h2>Experience</h2>
        <div className='underline'></div>
      </div>
      <div className='jobs-center'>
        {/* 9.btn container */}
        <div className='btn-container'>
          {jobs.map((item, index) => {
            return (
              <button key={item.id} onClick={() => setValue(index)}>
                {item.company}
              </button>
            );
          })}
        </div>

        {/* 8.job info */}
        <article className='job-info'>
          <h3>{title}</h3>
          <h4>{company}</h4>
          <div className='job-dates'>
            <p>{dates}</p>
            {duties.map((duty, index) => {
              return (
                <div key={index} className='job-desc'>
                  <FaAngleDoubleRight className='job-icon'></FaAngleDoubleRight>
                  <p>{duty}</p>
                </div>
              );
            })}
          </div>
        </article>
      </div>
    </section>
  );
}

export default App;
