import React from 'react';

const List = ({ people }) => {
  return (
    <>
      {people.map((person) => {
        const { name, id, image, Age } = person;

        return (
          <div Key={id}>
            <img src={image} />
            <h2>{name}</h2>
            <h2>Age:{" "+ Age} years</h2>
          </div>
        );
      })}
    </>
  );
};

export default List;
