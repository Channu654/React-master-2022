import React, { useState } from 'react';

const Tour = ({ id, image, price, name, info, removtour }) => {
  //  all properties must be inside obj {} y becz all data is inside obj
  const [readmore, setReadmore] = useState(false);
  return (
    <article className='Single-tour'>
      <img src={image} alt={name} />
      <footer>
        <div className='tour-info'>
          <h4>{name}</h4>
          <h4 className='tour-price'>${price}</h4>
        </div>
        <p>
          {readmore ? info : `${info.substring(0, 200)}....`}
          <button
            onClick={() => {
              setReadmore(!readmore);
            }}>
            {readmore ? 'show less' : 'read more'}{' '}
          </button>{' '}
        </p>
      </footer>
      <button className='delete-btn' onClick={() => removtour(id)}>
        Not interested
      </button>
    </article>
  );
};

export default Tour;
