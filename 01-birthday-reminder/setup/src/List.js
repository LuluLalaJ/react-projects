import React from 'react';

const List = ({person}) => {
  const {name, age, image} = person
  return (
    <article className="person">
      <img src={image} alt={name} className="img"/>
      <div>
        <h4>{name}</h4>
        <p>{age} years</p>
      </div>
    </article>
  );
};

export default List;
