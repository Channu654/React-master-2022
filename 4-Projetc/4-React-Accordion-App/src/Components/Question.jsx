import React, { useState } from 'react';
import styles from './que.module.css';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
const Question = ({ title, info }) => {
  const [showinfo, setShowinfo] = useState(true);
  return (
    <div>
      <div className={styles.question}>
        <h3>{title}</h3>
        <button className={styles.btn} onClick={() => setShowinfo(!showinfo)}>
          {' '}
          {showinfo ? '-' : '+'}
        </button>
        {showinfo && <p>{info}</p>}
      </div>
    </div>
  );
};

export default Question;
