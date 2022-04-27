import './App.css';
import Review from './Review';
import styles from "./our.module.css"
function App() {
  return <div>
    <h2 className={styles.our}> our Reviews</h2>
    <div className="underline">
      
    </div>
      <Review/>
  </div>;
}

export default App;
