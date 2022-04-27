import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';
import styles from './our.module.css';
const Review = () => {
  const [index, setIndex] = useState(1);
  const { name, job, image, text, info } = people[index];
  // to avoid the error after completiton of array wts nex or prev array wts pre???

  const checkNumber = (number) => {
    if (number > people.length - 1) {
      return 0;
    }
    if (number < 0) {
      return people.length - 1;
    } else {
      return number;
    }
  };

  //random persons
  const randomPersons = () => {
    let randomNumber = Math.floor(Math.random() * people.length);
    if (randomNumber === index) {
      randomNumber = index + 1;
    }
       setIndex(checkNumber(randomNumber));
  };

  const nextPerson = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(checkNumber(newIndex));
    });
  };

  const PrevPerson = () => {
    setIndex((index) => {
      let NewIndex = index - 1;
      return checkNumber(NewIndex);
    });
  };

  return (
    <article className='review'>
      <div className='img-container'>
        <img src={image} alt={name} className='person-img' />
        <span className='quote-icon'>
          <FaQuoteRight />
        </span>
      </div>
      <h4 className='author'>{name}</h4>
      <p className='job'>{job}</p>
      <p className='info'>{info}</p>
      <p className='text'>{text}</p>
      <div className='button-container'>
        <button className='next-btn' onClick={nextPerson}>
          <FaChevronLeft />
        </button>
        <button className='prev-btn' onClick={PrevPerson}>
          <FaChevronRight />
        </button>
        <button className='random-btn' onClick={randomPersons}>
          surprise
        </button>
      </div>
    </article>
  );
};

export default Review;
