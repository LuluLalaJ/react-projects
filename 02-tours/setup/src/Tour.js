import React, { useState } from 'react';

const Tour = ({name, info, image, price, id, deleteTour}) => {
  const [isShort, setIsShort] = useState(true)

  return (
    <article className="single-tour">
      <img src={image} alt={name} />
      <footer>
        <div className="tour-info">
          <h4>{name}</h4>
          <h4 className="tour-price">${price}</h4>
        </div>
        <p>
          {isShort
          ? `${info.substring(0, 200)}...`
          : info}
          <button className="info-btn" onClick={()=>setIsShort(!isShort)}>{isShort?'read more':'read less'}</button>
        </p>
        <button className="delete-btn" onClick={(e)=>deleteTour(id)}>not interested</button>
      </footer>
    </article>
  )
};

export default Tour;
