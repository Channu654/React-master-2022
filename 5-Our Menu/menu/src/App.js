import { useState } from 'react';
import './App.css';
import Menu from './Components/Menu';
import items from './Components/Data';
import Categories from './Components/Categories';

function App() {
  const [menuItem, setMenuItems] = useState(items);
  const [catagories, setCatagories] = useState([]);

  //filter
  const filterItems = (category) => {
    if (category === 'All') {
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
  };
  return (
    <main>
      <section className='menu section'>
        <div className='title'>
          <h2>Our menu</h2>
          <div className='underline'></div>
        </div>
        <Categories filterItems={filterItems} />
        <Menu items={menuItem} />
      </section>
    </main>
  );
}

export default App;
