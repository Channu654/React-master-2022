import './App.css';
import Review from './Comoponents/Review';

function App() {
  return (
    <section className='container'>
      <div className='title'>
        <h2> our Review</h2>
        <div className='underline'></div>
      </div>
      <Review />
    </section>
  );
}

export default App;
