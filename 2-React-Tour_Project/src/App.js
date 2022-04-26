import React, { useEffect, useState } from 'react';
import Loading from './Components/Loading';
import Tours from './Components/Tours';

const App = () => {
  const [loading, setLoading] = useState(false);
  const [tours, setTours] = useState([]);

  //  fetching data
  const fetcTours = async () => {
    setLoading(true);
    try {
      let res = await fetch('https://course-api.com/react-tours-project');
      let tours = await res.json();
      setLoading(false);
      setTours(tours);
      console.log('tours:', tours);
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
  // else return tourse components
  return (
    <div>
      <Tours tours={tours}/>
      {/* sending props to Tours */}
    </div>
  );
};

export default App;
