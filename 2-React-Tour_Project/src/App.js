import React, { useEffect, useState } from 'react';
import Loading from './Components/Loading';
import Tours from './Components/Tours';

const App = () => {
  const [loading, setLoading] = useState(false);
  const [tours, setTours] = useState([]);
  const removtour = (id) => {
    const newtours = tours.filter((tour) => tour.id != id);
    setTours(newtours);
  };

  //  fetching data
  const fetcTours = async () => {
    setLoading(true);
    try {
      let res = await fetch('https://course-api.com/react-tours-project');
      let tours = await res.json();
      setLoading(false);
      setTours(tours);
    } catch (err) {
      setLoading(false);
      console.log('err:', err);
    }
  };

  useEffect(() => {
    fetcTours();
  }, []);

  if (loading) {
    return (
      <>
        <Loading />
      </>
    );
  }
  // for refreshing button
  if (tours.length === 0) {
    return (
      <div>
        <h2>No Tours Left...</h2>
        <button onClick={fetcTours}> Refrsh</button>
      </div>
    );
  }
  // else return tourse components
  return (
    <div>
      <Tours tours={tours} removtour={removtour} />
      {/* sending props to Tours */}
    </div>
  );
};

export default App;
