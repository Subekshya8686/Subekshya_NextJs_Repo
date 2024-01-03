import React from 'react';

function handleClick() {
  alert('Button Clicked!');
}

export default function Button() {
  <button onClick={handleClick}>
    Click me
  </button>
};
