import React, { useState } from 'react';
import Data from './Data';

const List = () => {
  const [people, setPeople] = useState(Data);

  return (
    <div>
      List
      {people.map((person) => {
        const { image, name, info } = person;
        return (
            
          <div>
            <img src={image} alt='' />
            <h3>{name}</h3>
            <h3>{info}</h3>
          </div>
        );
      })}
    </div>
  );
};

export default List;
