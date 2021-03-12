import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
  document.getElementById('root')
);

const ratio = 0.5;
const options = {
  root: null,
  rootMargin: '0px',
  threshold: ratio,
};

const handleIntersect = (entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('reveal-show');
      observer.unobserve(entry.target);
      entry.target.classList.remove('reveal-hide');
    }
  });
}

const observer = new IntersectionObserver(handleIntersect, options);

document.querySelectorAll('.reveal-hide').forEach(r => observer.observe(r));
