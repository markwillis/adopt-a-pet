import React from 'react';
// 3 paramenters of a React element.
// 1st parameter is type of element, e.g div, h1 etc
// 2nd parameter {} is all the attributes of the element, such as ID, className and so on
// 3rd parameter is the chilren of the element. Either text, span or more elements. Can also be an array of elements.
const Pet = ({ name, animal, breed }) => {
  return React.createElement('div', {}, [
    React.createElement('h1', {}, name),
    React.createElement('h2', {}, animal),
    React.createElement('h2', {}, breed),
  ]);
};

export default Pet;
