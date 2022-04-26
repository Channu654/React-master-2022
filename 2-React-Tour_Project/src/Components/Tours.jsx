import React from 'react';
import Tour from './Tour';
import styles from "./Body.module.css"
const Tours = ({ tours ,removtour }) => {
  return (
    <section className={styles.title}>
      <div>
        <h2>ours Tours</h2>
      </div>
      {/* mapping */}
      {tours.map((tour) => {
        return <Tour key={tour.id} {...tour} removtour={removtour}/>;
      })}
    </section>
  );
};

export default Tours;
