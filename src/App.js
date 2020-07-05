import React from 'react';
import { render } from 'react-dom';
import Pet from './Pet';

const App = () => {
  return React.createElement('div', {}, [
    React.createElement('h1', {}, 'Adopt a pet!'),
    React.createElement(Pet, {
      name: 'Luna',
      animal: 'Dog',
      breed: 'Havanese',
    }),
    React.createElement(Pet, { name: 'Steve', animal: 'Cat', breed: 'Tabby' }),
    React.createElement(Pet, {
      name: 'Harold',
      animal: 'Lizard',
      breed: 'Big Lizard',
    }),
  ]);
};

render(React.createElement(App), document.getElementById('root'));
